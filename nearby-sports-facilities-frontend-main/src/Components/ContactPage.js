import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { useTranslation } from "react-i18next";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup"; // To validate the form
import axios from "axios"; // Axios for API calls
import { successToast } from "./Toast";

const ContactPage = () => {
  const { t } = useTranslation();

  // Validation schema using Yup
  const validationSchema = Yup.object({
    name: Yup.string().required(t("contact.form.errors.required")),
    country: Yup.string().required(t("contact.form.errors.required")),
    city: Yup.string().required(t("contact.form.errors.required")),
    phone_no: Yup.string().required(t("contact.form.errors.required")),
    email: Yup.string()
      .email(t("contact.form.errors.invalid_email"))
      .required(t("contact.form.errors.required")),
    message: Yup.string().required(t("contact.form.errors.required")),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      await axios.post("/contacts", values);
      successToast("Added Success");
      // Optionally reset the form or show a success message
    } catch (error) {
      console.error("There was an error!", error);
      successToast("Failed");
      // Optionally show an error message to the user
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <Header />
      <div className="min-h-[calc(100vh-356px)]">
        <div className="grid md:grid-cols-2 items-center overflow-hidden shadow-[0_2px_20px_-3px_rgba(6,81,237,0.3)] rounded-3xl max-w-8xl mx-auto bg-white my-8 md:my-28 ">
          <div className="p-8 bg-white">
            <h2 className="text-3xl font-bold text-secondary-500">
              {t("contact.welcome")}
            </h2>
            <p className="text-sm text-gray-400 mt-4 leading-relaxed">
              {t("contact.subtitle")}
            </p>

            <Formik
              initialValues={{
                name: "",
                country: "",
                city: "",
                phone_no: "",
                email: "",
                message: "",
              }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form>
                  <div className="space-y-4 mt-8">
                    <Field
                      type="text"
                      name="name"
                      placeholder={t("contact.form.full_name")}
                      className="px-2 py-3 bg-transparent text-gray-600 w-full text-sm border-b border-gray-700 rounded focus:border-secondary-500 focus:ring-2 outline-none"
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="text-red-600 text-sm"
                    />

                    <div className="grid grid-cols-2 gap-6">
                      <Field
                        type="text"
                        name="country"
                        placeholder={t("contact.form.country")}
                        className="px-2 py-3 bg-transparent text-gray-600 w-full text-sm border-b border-gray-700 rounded focus:border-secondary-500 focus:ring-2 outline-none"
                      />
                      <ErrorMessage
                        name="country"
                        component="div"
                        className="text-red-600 text-sm"
                      />

                      <Field
                        type="text"
                        name="city"
                        placeholder={t("contact.form.city")}
                        className="px-2 py-3 bg-transparent text-gray-600 w-full text-sm border-b border-gray-700 rounded focus:border-secondary-500 focus:ring-2 outline-none"
                      />
                      <ErrorMessage
                        name="city"
                        component="div"
                        className="text-red-600 text-sm"
                      />
                    </div>

                    <Field
                      type="text"
                      name="phone_no"
                      placeholder={t("contact.form.phone_no")}
                      className="px-2 py-3 bg-transparent text-gray-600 w-full text-sm border-b border-gray-700 rounded focus:border-secondary-500 focus:ring-2 outline-none"
                    />
                    <ErrorMessage
                      name="phone_no"
                      component="div"
                      className="text-red-600 text-sm"
                    />

                    <Field
                      type="email"
                      name="email"
                      placeholder={t("contact.form.email")}
                      className="px-2 py-3 bg-transparent text-gray-600 w-full text-sm border-b border-gray-700 rounded focus:border-secondary-500 focus:ring-2 outline-none"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-600 text-sm"
                    />

                    <Field
                      as="textarea"
                      name="message"
                      placeholder={t("contact.form.message")}
                      className="px-2 pt-3 bg-transparent text-gray-600 w-full text-sm border-b border-gray-700 rounded focus:border-secondary-500 focus:ring-2 outline-none"
                    ></Field>
                    <ErrorMessage
                      name="message"
                      component="div"
                      className="text-red-600 text-sm"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`mt-8 flex items-center justify-center text-sm w-full rounded-md px-6 py-3 tracking-wide text-accent-100 bg-secondary-500 hover:bg-secondary-600 ${
                      isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16px"
                      height="16px"
                      fill="white"
                      className="mr-2"
                      viewBox="0 0 548.244 548.244"
                    >
                      <path
                        fillRule="evenodd"
                        d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {t("contact.form.send_btn")}
                  </button>
                </Form>
              )}
            </Formik>

            <ul className="mt-4 flex flex-wrap justify-center gap-4 lg:space-x-6 max-lg:flex-col max-lg:items-center max-lg:space-y-2 ">
              <li className="flex items-center text-secondary-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16px"
                  height="16px"
                  fill="currentColor"
                  viewBox="0 0 479.058 479.058"
                >
                  <path d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z" />
                </svg>
                <div className="text-current text-sm ml-3">
                  info@example.com
                </div>
              </li>
              <li className="flex items-center text-secondary-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16px"
                  height="16px"
                  fill="currentColor"
                  viewBox="0 0 512 512"
                >
                  <path d="M486.4 320h-39.2V86.4c0-23.68-19.2-42.4-42.4-42.4H67.2c-23.2 0-42.4 19.2-42.4 42.4v233.6h-39.2c-20.8 0-38.4 17.6-38.4 38.4s17.6 38.4 38.4 38.4h392.8c20.8 0 38.4-17.6 38.4-38.4s-17.6-38.4-38.4-38.4zM125.6 85.6h260.8c9.6 0 18.4 8 18.4 18.4v243.2H107.2V104c0-10.4 8-18.4 18.4-18.4zm238.4 341.6H147.2c-9.6 0-18.4-8-18.4-18.4v-31.2h263.2v31.2c0 10.4-8 18.4-18.4 18.4z" />
                </svg>
                <div className="text-current text-sm ml-3">
                  +1 (123) 456-7890
                </div>
              </li>
            </ul>
          </div>

          <div className="z-10 relative h-full max-md:min-h-[350px]">
            <iframe
              title="Map to indicate location of headquarters"
              src="https://maps.google.com/maps?q=berlin&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="left-0 top-0 h-full w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
