import { Link } from "react-router-dom";
import BWLogo from "../Images/logo1.png";
import { useTranslation } from "react-i18next";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <>
      <footer className="py-8 bg-accent-500 md:p-6 lg:p-6 ">
        <div className="mx-auto max-w-screen-xl text-center">
          <div className="flex justify-center items-center text-2xl font-semibold text-gray-900">
            <Link to="/main">
              <img src={BWLogo} alt="Logo" className="h-20" />
            </Link>
          </div>
          <ul className="flex flex-wrap justify-center items-center my-6 text-gray-900">
            <li className="mr-4">
              <Link
                to="/main"
                className="text-accent-100 hover:text-primary-500 transition-all duration-300"
              >
                {t("header.home")}
              </Link>
            </li>
            <li className="mr-4">
              <Link
                to="/registered-facilities"
                className="text-accent-100 hover:text-primary-500 transition-all duration-300"
              >
                {t("header.registered_facilities")}
              </Link>
            </li>
            <li className="mr-4">
              <Link
                to="/nearby-facilities"
                className="text-accent-100 hover:text-primary-500 transition-all duration-300"
              >
                {t("header.nearby_facilities")}
              </Link>
            </li>
            <li className="mr-4">
              <Link
                to="/online-booking"
                className="text-accent-100 hover:text-primary-500 transition-all duration-300"
              >
                {t("header.online_booking")}
              </Link>
            </li>
            <li className="mr-4">
              <Link
                to="/excercises"
                className="text-accent-100 hover:text-primary-500 transition-all duration-300"
              >
                {t("header.excersises")}
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-accent-100 hover:text-primary-500 transition-all duration-300"
              >
                {t("header.contact_us")}
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex justify-center items-center pt-2 space-x-4">
          <a
            href="https://www.facebook.com"
            className="hover:text-blue-600 text-accent-100 text-2xl transition-all duration-300"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href="https://x.com"
            className="hover:text-blue-400 text-accent-100 text-2xl transition-all duration-300"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-purple-600 text-accent-100 text-2xl transition-all duration-300"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-800 text-accent-100 text-2xl transition-all duration-300"
          >
            <FaLinkedinIn />
          </a>
        </div>
        <ul className="mt-4 flex flex-wrap justify-center pt-2 gap-4 lg:space-x-6 max-lg:flex-col max-lg:items-center max-lg:space-y-2 ">
          <li>
            <a
              href="mailto:info@email.com"
              className="flex items-center text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16px"
                height="16px"
                fill="currentColor"
                viewBox="0 0 479.058 479.058"
              >
                <path d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z" />
              </svg>
              <div className="text-current text-sm ml-3">info@example.com</div>
            </a>
          </li>
          <li className="flex items-center text-white">
            <a href="tel:+1234567890" className="flex items-center text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16px"
                height="16px"
                fill="currentColor"
                viewBox="0 0 512 512"
              >
                <path d="M486.4 320h-39.2V86.4c0-23.68-19.2-42.4-42.4-42.4H67.2c-23.2 0-42.4 19.2-42.4 42.4v233.6h-39.2c-20.8 0-38.4 17.6-38.4 38.4s17.6 38.4 38.4 38.4h392.8c20.8 0 38.4-17.6 38.4-38.4s-17.6-38.4-38.4-38.4zM125.6 85.6h260.8c9.6 0 18.4 8 18.4 18.4v243.2H107.2V104c0-10.4 8-18.4 18.4-18.4zm238.4 341.6H147.2c-9.6 0-18.4-8-18.4-18.4v-31.2h263.2v31.2c0 10.4-8 18.4-18.4 18.4z" />
              </svg>
              <div className="text-current text-sm ml-3">+1 (123) 456-7890</div>
            </a>
          </li>
        </ul>
      </footer>
      <div className="bg-accent-500 border-t-[0.5px] border-solid border-accent-100 py-6 text-center text-accent-100 text-lg font-normal">
        <p className="text-accent-100">
          © {new Date().getFullYear()}{" "}
          <a
            href="#hero-section"
            className="text-primary-500 hover:opacity-80 font-semibold transition-opacity "
          >
            MALU SportNomad
          </a>
          <span className="hidden md:inline"> {t("global.rights")}</span>
        </p>
      </div>
    </>
  );
};

export default Footer;
