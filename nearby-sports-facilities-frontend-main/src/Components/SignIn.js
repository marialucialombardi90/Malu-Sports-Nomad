import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import logo1 from "../Images/logo1.png";
import bgauth from "../Images/bg-auth.jpg";
import { errorToast, successToast } from "./Toast";

const SignInPage = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const changeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  // Formik configuration
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email(t("sign_in.invalid_email"))
        .required(t("sign_in.required")),
      password: Yup.string()
        .min(6, t("sign_in.password_min"))
        .required(t("sign_in.required")),
    }),
    onSubmit: async (values) => {
      try {
        const { data } = await axios.post("/auth/login", values);

        if (data) {
          const token = data.token;
          localStorage.setItem("token", token);
          // Redirect to the main page on success
          navigate("/main");
          successToast("Login successfull!");
        } else {
          errorToast("Login failed with some error!");
        }
      } catch (error) {
        errorToast("Login failed with some error!");
        console.error("Login failed", error);
      }
    },
  });

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
        <img
          src={logo1}
          alt="image1"
          className="mb-4 h-[120px] object-contain"
        />
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

        <form className="space-y-4" onSubmit={formik.handleSubmit}>
          <div>
            <label className="block mb-2 font-semibold text-accent-100">
              {t("sign_in.email_label")}:{" "}
              <span className="text-accent-100">*</span>
            </label>
            <input
              type="email"
              name="email"
              className="border border-gray-300 rounded px-3 py-2 w-full"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              required
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-500 text-sm">{formik.errors.email}</div>
            ) : null}
          </div>

          <div>
            <label className="block mb-2 font-semibold text-accent-100">
              {t("sign_in.password_label")}:{" "}
              <span className="text-accent-100">*</span>
            </label>
            <input
              type="password"
              name="password"
              className="border border-gray-300 rounded px-3 py-2 w-full"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              required
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="text-red-500 text-sm">
                {formik.errors.password}
              </div>
            ) : null}
          </div>

          <div className="flex justify-center text-primary-500">
            <button
              type="submit"
              className="mt-2 bg-primary-500 text-accent-100 px-5 py-2 rounded-md shadow-md hover:bg-transparent hover:border-primary-500 border-2 border-solid transition-all duration-300"
            >
              {t("sign_in.sign_in_button")}
            </button>
          </div>
        </form>

        <p className="text-center text-lg text-accent-100 pt-3">
          {t("sign_in.no_account")}
          <Link
            className="text-primary-600 hover:text-primary-500 cursor-pointer pl-1 font-semibold"
            to="/signup"
          >
            {t("sign_in.create_account")}
          </Link>
        </p>

        {/* <p className="text-center text-lg text-accent-100 pt-3">
          {t("sign_in.already_have_account")}
          <Link
            className="text-primary-600 hover:text-primary-500 cursor-pointer pl-1 font-semibold"
            to="/forget-password"
          >
            {t("sign_in.forgot_password")}
          </Link>
        </p> */}
      </div>
    </div>
  );
};

export default SignInPage;
