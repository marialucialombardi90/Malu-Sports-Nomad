import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo1 from "../Images/logo1.png";
import bgauth from "../Images/bg-auth.jpg";
import { useTranslation } from "react-i18next"; // Import useTranslation hook

const Otp = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };
  const navigate = useNavigate();

  const handleOtpVerification = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    navigate("/reset-password");
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
        <form className="space-y-4" onSubmit={handleOtpVerification}>
          <div>
            <label className="block mb-4 font-semibold text-accent-100">
              {t("otp.enter_otp")} {/* Translated label for OTP input */}
            </label>
            <div className="flex space-x-2 justify-center ">
              {/* OTP input fields */}
              {Array(6)
                .fill(0)
                .map((_, index) => (
                  <input
                    key={index}
                    type="text"
                    maxLength="1"
                    className="border border-gray-300 rounded px-3 py-2 text-center w-12 focus:ring-primary-500 focus:ring-2"
                    required
                  />
                ))}
            </div>
          </div>

          <div className="flex justify-center text-primary-500">
            <button
              type="submit"
              className="mt-2 bg-primary-500 text-accent-100 px-5 py-2 rounded-md shadow-md hover:bg-transparent hover:border-primary-500 border-2 border-solid transition-all duration-300"
            >
              {t("otp.verify_otp")} {/* Translated button text */}
            </button>
          </div>
        </form>
        <p className="text-center text-lg text-accent-100">
          {t("otp.did_not_receive")} {/* Translated text for OTP message */}
          <Link
            className="text-primary-600 hover:text-primary-500 cursor-pointer pl-1 font-semibold"
            to="/signup"
          >
            {t("otp.email_verification")} {/* Translated link text */}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Otp;
