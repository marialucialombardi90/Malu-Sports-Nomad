import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo1 from "../Images/logo1.png";
import bgauth from "../Images/bg-auth.jpg";
import { useTranslation } from "react-i18next"; // Import useTranslation hook

const ForgetPassword = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  const navigate = useNavigate();

  const handleEmailVerification = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    navigate("/otp");
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
        <form className="space-y-4">
          <div>
            <label className="block mb-2 font-semibold text-accent-100">
              {t("forget_password.verify_email")}{" "}
              <span className="text-accent-100">*</span>
            </label>
            <input
              type="email"
              name="email"
              className="border border-gray-300 rounded px-3 py-2 w-full"
              required
            />
          </div>
          <div className="flex justify-center text-accent-100">
            <button
              type="submit"
              onClick={handleEmailVerification}
              className="mt-2 bg-primary-500 text-accent-100 px-5 py-2 rounded-md shadow-md hover:bg-transparent hover:border-primary-500 border-2 border-solid transition-all duration-300"
            >
              {t("forget_password.verify_button")}
            </button>
          </div>
        </form>
        <p className="text-center text-lg text-accent-100 pt-3">
          {t("forget_password.already_account")}
          <Link
            className="text-primary-600 hover:text-primary-500 cursor-pointer pl-1 font-semibold"
            to="/signup"
          >
            {t("forget_password.sign_in")}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ForgetPassword;
