import React, { useState } from "react";
import logo1 from "../Images/logo1.png";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const changeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };
  const handleLogout = () => {
    localStorage.clear();
    navigate("/signin");
  };
  return (
    <div className="navigation">
      <nav className="fixed w-full z-50 top-0 left-0 border-b border-primary-200 font-popins bg-white">
        <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="/main" className="flex items-center w-1/2 lg:w-1/4">
            <img src={logo1} className="h-14 mr-3" alt=" Logo" />
          </Link>
          <div className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1 ">
            <ul className="flex flex-col p-4 lg:p-0 mt-4 font-medium border border-primary-100 rounded-lg bg-white lg:flex-row lg:space-x-12 lg:mt-0 lg:border-0 lg:bg-white">
              <li>
                <Link
                  to="/main"
                  className="font-normal py-2 pl-3 pr-4 nav-link hover:text-primary-500 text-accent-600 active:text-primary-500 lg:p-0 transition-colors duration-300 nav-link"
                  aria-current="page"
                >
                  {t("header.home")}
                </Link>
              </li>
              <li>
                <Link
                  to="/registered-facilities"
                  className="font-normal py-2 pl-3 pr-4 nav-link hover:text-primary-500 text-accent-600 active:text-primary-500 lg:p-0 transition-colors duration-300 nav-link"
                >
                  {t("header.registered_facilities")}
                </Link>
              </li>
              <li>
                <Link
                  to="/nearby-facilities"
                  className="py-2 pl-3 pr-4 font-normal nav-link hover:text-primary-500 text-accent-600 active:text-primary-500 lg:p-0 transition-colors duration-300 nav-link"
                >
                  {t("header.nearby_facilities")}
                </Link>
              </li>
              <li>
                <Link
                  to="/online-booking"
                  className="py-2 pl-3 pr-4 font-normal hover:text-primary-500 lg:p-0 transition-colors duration-300 nav-link text-accent-600"
                >
                  {t("header.online_booking")}
                </Link>
              </li>
              <li>
                <Link
                  to="/excercises"
                  className="py-2 pl-3 pr-4 nav-link font-normal hover:text-primary-500 lg:p-0 transition-colors duration-300 nav-link text-accent-600"
                >
                  {t("header.excersises")}
                </Link>
              </li>
            </ul>
          </div>
          {/* </div> */}

          <div className="flex lg:order-2 items-center gap-5 w-1/2 lg:w-[20%] justify-end">
            <select
              id="languageType"
              name="languageType"
              className="h-10 border-2 border-primary-500 focus:outline-none focus:border-primary-500 focus:ring-0 text-accent-600 rounded-md px-3 py-0 tracking-wider bg-white transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none appearance-none"
              onChange={changeLanguage}
              value={i18n.language}
            >
              <option value="de">🇩🇪 Deutsch</option>
              <option value="en">🇬🇧 English</option>
            </select>
            {/* <Link to="/contact" className="hidden lg:block nav-link"> */}
            {token ? (
              <button
                type="button"
                onClick={handleLogout}
                className="bg-primary-500 text-accent-100 px-5 py-2 rounded-md shadow-md hover:bg-transparent hover:border-primary-500 border-2 border-solid transition-all duration-300 hover:text-primary-500"
              >
                {t("header.logout")}
              </button>
            ) : (
              <Link
                to="/signin"
                className="bg-primary-500 text-accent-100 px-5 py-2 rounded-md shadow-md hover:bg-transparent hover:border-primary-500 border-2 border-solid transition-all duration-300 hover:text-primary-500"
              >
                {t("header.login")}
              </Link>
            )}
            {/* </Link> */}

            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-accent-1000 rounded-lg lg:hidden hover:bg-primary-100 focus:outline-none focus:ring-2 focus:ring-primary-200"
              aria-controls="navbar-sticky"
              aria-expanded="false"
              onClick={() => setNavOpen(!navOpen)}
            >
              <span className="sr-only">Open</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          {navOpen ? (
            <div
              className="items-center justify-between w-full lg:w-auto lg:order-1"
              id="navbar-sticky"
            >
              <ul className="flex flex-col p-4 lg:p-0 mt-4 font-medium border border-primary-100 rounded-lg bg-white lg:flex-row lg:space-x-8 lg:mt-0 lg:border-0 lg:bg-white">
                <li>
                  <Link
                    to="/main"
                    className="py-2 pl-3 pr-4 nav-link hover:text-primary-500 text-accent-600 active:text-primary-500 lg:p-0 transition-colors duration-300 nav-link"
                    aria-current="page"
                  >
                    {t("header.home")}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/registered-facilities"
                    className="py-2 pl-3 pr-4 nav-link hover:text-primary-500 text-accent-600 active:text-primary-500 lg:p-0 transition-colors duration-300 nav-link"
                  >
                    {t("header.registered_facilities")}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/nearby-facilities"
                    className="py-2 pl-3 pr-4 nav-link hover:text-primary-500 text-accent-600 active:text-primary-500 lg:p-0 transition-colors duration-300 nav-link"
                  >
                    {t("header.nearby_facilities")}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/online-booking"
                    className="py-2 pl-3 pr-4 nav-link hover:text-primary-500 text-accent-600 active:text-primary-500 lg:p-0 transition-colors duration-300 nav-link"
                  >
                    {t("header.online_booking")}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/excercises"
                    className="py-2 pl-3 pr-4 nav-link hover:text-primary-500 text-accent-600 active:text-primary-500 lg:p-0 transition-colors duration-300 nav-link"
                  >
                    {t("header.excersises")}
                  </Link>
                </li>

                <li className="mt-2 ml-2">
                  {/* <Link
                    to="/contact"
                   
                  > */}
                  {token ? (
                    <button
                      type="button"
                      onClick={handleLogout}
                      className=" bg-primary-500 text-accent-100 px-5 py-2 rounded-md shadow-md hover:bg-transparent hover:border-primary-500 border-2 border-solid transition-all duration-300 hover:text-primary-500"
                    >
                      {t("header.logout")}
                    </button>
                  ) : null}
                  {/* </Link> */}
                </li>
              </ul>
            </div>
          ) : null}
        </div>
      </nav>
      {/* its a chapii taka header fixed ka nicha jo space hai usa div daikr khali height dai dain */}
      <div className="h-20"></div>
    </div>
  );
};

export default Header;
