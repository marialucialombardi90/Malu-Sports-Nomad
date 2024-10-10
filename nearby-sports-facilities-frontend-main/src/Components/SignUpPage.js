import React from "react";
// import { toast } from "react-hot-toast"; // Uncomment if you want to use toast notifications
import { Link, useNavigate } from "react-router-dom";
import logo1 from "../Images/logo1.png";
import bgauth from "../Images/bg-auth.jpg";
import { useTranslation } from "react-i18next";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup"; // For validation
import axios from "axios"; // For API calls

const SignUpPage = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const changeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  // Validation schema using Yup
  const validationSchema = Yup.object().shape({
    first_name: Yup.string().required(t("sign_up.first_name_required")),
    last_name: Yup.string().required(t("sign_up.last_name_required")),
    email: Yup.string()
      .email(t("sign_up.invalid_email"))
      .required(t("sign_up.email_required")),
    password: Yup.string()
      .min(8, t("sign_up.password_min"))
      .required(t("sign_up.password_required")),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], t("sign_up.passwords_must_match"))
      .required(t("sign_up.confirm_password_required")),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await axios.post("/auth/register", values);
      console.log("User registered successfully:", response.data);
      // Uncomment below line to show success message
      // toast.success("User Created Successfully!");
      navigate("/signin");
    } catch (error) {
      console.error("There was an error!", error);
      // Uncomment below line to show error message
      // toast.error("Registration failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      className="flex justify-center items-center min-h-screen"
      style={{
        backgroundImage: `url(${bgauth})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="rounded-lg p-8 shadow-md w-full sm:max-w-lg backdrop-blur-xl flex flex-col">
        <img src={logo1} alt="logo" className="mb-4 h-[120px] object-contain" />
        <select
          id="languageType"
          name="languageType"
          className="h-10 my-2 border-2 border-primary-500 focus:outline-none focus:border-primary-500 focus:ring-0 text-accent-600 rounded-md px-3 py-0 tracking-wider bg-white transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none appearance-none"
          onChange={changeLanguage}
          value={i18n.language}
        >
          <option value="de">🇩🇪 Deutsch</option>
          <option value="en">🇬🇧 English</option>
        </select>

        <Formik
          initialValues={{
            first_name: "",
            last_name: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-4">
              <div className="flex space-x-4">
                <div className="w-1/2">
                  <label className="block mb-2 font-semibold text-accent-100">
                    {t("sign_up.first_name_label")}:{" "}
                    <span className="text-accent-100">*</span>
                  </label>
                  <Field
                    type="text"
                    name="first_name"
                    className="border border-gray-300 rounded px-3 py-2 w-full focus:ring-primary-500 focus:ring-2"
                    required
                  />
                  <ErrorMessage
                    name="first_name"
                    component="div"
                    className="text-red-600 text-sm"
                  />
                </div>
                <div className="w-1/2">
                  <label className="block mb-2 font-semibold text-accent-100">
                    {t("sign_up.last_name_label")}:{" "}
                    <span className="text-accent-100">*</span>
                  </label>
                  <Field
                    type="text"
                    name="last_name"
                    className="border border-gray-300 rounded px-3 py-2 w-full focus:ring-primary-500 focus:ring-2"
                    required
                  />
                  <ErrorMessage
                    name="last_name"
                    component="div"
                    className="text-red-600 text-sm"
                  />
                </div>
              </div>
              <div>
                <label className="block mb-2 font-semibold text-accent-100">
                  {t("sign_up.email_label")}:{" "}
                  <span className="text-accent-100">*</span>
                </label>
                <Field
                  type="email"
                  name="email"
                  className="border border-gray-300 rounded px-3 py-2 w-full focus:ring-primary-500 focus:ring-2"
                  required
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-600 text-sm"
                />
              </div>
              <div>
                <label className="block mb-2 font-semibold text-accent-100">
                  {t("sign_up.password_label")}:{" "}
                  <span className="text-accent-100">*</span>
                </label>
                <Field
                  type="password"
                  name="password"
                  className="border border-gray-300 rounded px-3 py-2 w-full focus:ring-primary-500 focus:ring-2"
                  required
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-600 text-sm"
                />
              </div>
              <div>
                <label className="block mb-2 font-semibold text-accent-100">
                  {t("sign_up.confirm_password_label")}:{" "}
                  <span className="text-accent-100">*</span>
                </label>
                <Field
                  type="password"
                  name="confirmPassword"
                  className="border border-gray-300 rounded px-3 py-2 w-full focus:ring-primary-500 focus:ring-2"
                  required
                />
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  className="text-red-600 text-sm"
                />
              </div>
              <div className="flex justify-center text-primary-500">
                <button
                  type="submit"
                  className={`mt-2 bg-primary-500 text-accent-100 px-5 py-2 rounded-md shadow-md hover:bg-transparent hover:border-primary-500 border-2 border-solid transition-all duration-300 ${
                    isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  disabled={isSubmitting}
                >
                  {t("sign_up.register_button")}
                </button>
              </div>
            </Form>
          )}
        </Formik>

        <p className="text-center text-lg text-accent-100 pt-3">
          {t("sign_up.already_have_account")}
          <Link
            className="text-primary-600 hover:text-primary-500 cursor-pointer pl-1 font-semibold"
            to="/signin"
          >
            {" "}
            {t("sign_up.sign_in")}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
