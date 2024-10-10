import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Link } from "react-router-dom";
import {
  FaWifi,
  FaParking,
  FaSwimmingPool,
  FaUtensils,
  FaBroom,
  FaTshirt,
  FaShieldAlt,
  FaExclamationCircle,
} from "react-icons/fa";
import bgauth from "../Images/bg-auth.jpg";
import registeredfacilitiesbannerhome from "../Images/sections_images/4.png";
import bookings from "../Images/sections_images/10.png";
import nearbyfacilty from "../Images/sections_images/5.png";
import excercisesbanner from "../Images/sections_images/12.png";
import howWorks from "../Images/sections_images/11.png";
import howWorks2 from "../Images/sections_images/6.png";
import { useTranslation } from "react-i18next";

const MainPage = () => {
  const { t } = useTranslation();
  const accessToken = localStorage.getItem("token");
  return (
    <div>
      <Header />
      <div className="min-h-[calc(100vh-356px)]">
        <section
          className="relative py-40 text-accent-100"
          style={{
            backgroundImage: `url(${bgauth})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="container mx-auto px-4 relative max-w-3xl">
            <div className=" backdrop-blur-md rounded-2xl p-8 shadow-lg">
              <div className="text-center mb-12">
                <h1 className="text-4xl font-semibold uppercase">
                  {t("home.hero.welcome")}
                </h1>
                <h2 className="mt-4 text-lg italic font-light lowercase">
                  '{t("home.hero.subtitle")}'
                </h2>
                <Link to="/registered-facilities">
                  <button className="mt-8 bg-primary-500 text-accent-100 px-6 py-3 rounded-2xl shadow-md hover:bg-primary-600 transition-all duration-300">
                    {t("home.hero.btn_text")}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Registered Facilities */}
        <section className="home bg-white">
          <div className="py-8 px-4 mx-auto max-w-screen-xl container sm:py-8 lg:px-6 flex flex-col lg:flex-row items-center space-y-8">
            <div className="home-content text-center px-10">
              <div className="title">
                <h2 className="text-xl lg:text-3xl font-semibold text-accent-500 uppercase">
                  {t("home.registered.heading")}
                </h2>
              </div>
              <div className="description mt-4 lg:mt-6">
                <p className="text-accent-600 lowercase">
                  {t("home.registered.text")}
                </p>
              </div>
              {/* <Link to="/registered-facilities">
                <button className="mt-8 bg-primary-500 text-accent-100 px-5 py-2 rounded-2xl shadow-md hover:bg-transparent hover:border-primary-500 border-2 border-solid transition-all duration-300 hover:text-primary-500">
                  {t("global.explore_btn")}
                  <i className="fas fa-arrow-right ml-2"></i>
                </button>
              </Link> */}
            </div>
            {/* <div className="w-full md:w-6/12 h-auto">
              <img
                src={nearbyfacilty}
                nearbyfacilty
                alt="image1"
                className="w-full h-auto rounded-2xl"
              />
            </div> */}
          </div>
        </section>

        {/* Search Location nearby */}
        <section className="home">
          <div className="py-8 px-4 mx-auto max-w-screen-xl container sm:py-8 lg:px-6">
            <div className="bg-secondary-100 flex flex-col rounded-2xl lg:flex-row items-center justify-stretch">
              <div className="w-full lg:w-2/5 md:h-[450px] h-[100%]">
                <img
                  src={registeredfacilitiesbannerhome}
                  alt="image1"
                  className="w-full h-[100%] rounded-lg"
                />
              </div>
              <div className="home-content lg:w-3/5 p-10">
                <div className="title">
                  <h2 className="text-xl lg:text-3xl font-semibold text-secondary-500 uppercase">
                    {t("home.nearby.heading")}
                  </h2>
                </div>
                <div className="description mt-4 lg:mt-6 lowercase">
                  <p className="text-accent-600">
                    {t("home.nearby.sub_heading")}
                  </p>
                </div>
                <div className="description mt-1 lg:mt-2">
                  <p className="text-accent-600 lowercase">
                    {t("home.nearby.text")}
                  </p>
                </div>
                <div className="flex gap-5">
                  <Link
                    to={accessToken ? "/registered-facilities" : "/signup"}
                    className="mt-8 bg-secondary-500 text-white px-5 py-2 rounded-2xl shadow-md hover:bg-secondary-600 transition-all duration-300 "
                  >
                    {t("home.nearby.community_text_btn")}
                  </Link>
                  <Link
                    to="/nearby-facilities"
                    className="mt-8 bg-primary-500 text-white px-5 py-2 rounded-2xl shadow-md hover:bg-primary-600 transition-all duration-300"
                  >
                    {t("home.nearby.find_facility")}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Book Online */}
        <section className="home">
          <div className="py-8 px-4 mx-auto max-w-screen-xl container sm:py-8 lg:px-6">
            <div className="bg-primary-100 flex flex-col rounded-2xl lg:flex-row items-center justify-stretch">
              <div className="home-content lg:w-3/5 p-10">
                <div className="title">
                  <h2 className="text-xl lg:text-3xl font-semibold text-primary-500 uppercase">
                    {t("home.book_online.heading")}
                  </h2>
                </div>
                <div className="description mt-4 lg:mt-6">
                  <p className="text-accent-600 lowercase">
                    {t("home.book_online.text")}
                  </p>
                </div>
                <Link to="/online-booking">
                  <button className="w-full mt-8 bg-primary-500 text-white px-5 py-2 rounded-2xl shadow-md hover:bg-primary-600 transition-all duration-300">
                    {t("home.book_online.btn_text")}
                    <i className="fas fa-arrow-right ml-2"></i>
                  </button>
                </Link>
              </div>
              <div className="w-full lg:w-2/5 md:h-[450px] h-[100%]">
                <img
                  src={bookings}
                  alt="image1"
                  className="w-full h-[100%] rounded-2xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Excersises */}
        <section className="home">
          <div className="py-8 px-4 mx-auto max-w-screen-xl container sm:py-8 lg:px-6">
            <div className="bg-secondary-100 flex flex-col rounded-2xl lg:flex-row items-center justify-stretch">
              <div className="w-full lg:w-2/5 md:h-[450px] h-[100%]">
                <img
                  src={excercisesbanner}
                  alt="image1"
                  className="w-full h-[100%] rounded-2xl object-cover"
                />
              </div>
              <div className="home-content lg:w-3/5 p-10">
                <div className="title">
                  <h2 className="text-xl lg:text-3xl font-semibold text-secondary-500 uppercase">
                    {t("home.exercise.heading")}
                  </h2>
                </div>
                <div className="description mt-4">
                  <p className="text-accent-600 lowercase">
                    {t("home.exercise.text")}
                  </p>
                </div>
                <Link to="/excercises">
                  <button className="mt-2 w-full bg-secondary-500 text-white px-5 py-2 rounded-2xl shadow-md hover:bg-secondary-600  transition-all duration-300 ">
                    {t("global.explore_btn")}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* how it works */}
        <section className="home">
          <div className=" px-4 mx-auto max-w-screen-xl container sm:py-8 lg:px-6">
            <h2 className="text-xl lg:text-3xl font-semibold text-accent-600 pb-10 uppercase">
              {t("home.working.heading")}
            </h2>
            <div className="flex justify-center items-center py-10">
              <div className="w-full lg:w-1/2">
                <img
                  alt="image1"
                  src={nearbyfacilty}
                  className="rounded-2xl h-[100%] w-full"
                />
              </div>
              <div className="w-full lg:w-1/2 flex justify-center p-10 flex-col">
                <h2 className="text-xl lg:text-3xl font-semibold text-secondary-500 pb-4 uppercase">
                  {t("home.working.section1.heading")}
                </h2>
                <p className="lowercase">{t("home.working.section1.text")}</p>
              </div>
            </div>
            <div className="flex justify-center items-center py-10">
              <div className="w-full lg:w-1/2 flex justify-center p-10 flex-col">
                <h2 className="text-xl lg:text-3xl font-semibold text-secondary-500 pb-4 uppercase">
                  {t("home.working.section2.heading")}
                </h2>
                <p className="lowercase">{t("home.working.section2.text")}</p>
              </div>
              <div className="w-full lg:w-1/2">
                <img
                  alt="image1"
                  src={howWorks}
                  className="rounded-2xl h-[100%] w-full"
                />
              </div>
            </div>
            <div className="flex justify-center items-center py-10">
              <div className="w-full lg:w-1/2">
                <img
                  alt="image1"
                  src={howWorks2}
                  className="rounded-2xl h-[100%] w-full"
                />
              </div>
              <div className="w-full lg:w-1/2 flex justify-center p-10 flex-col">
                <h2 className="text-xl lg:text-3xl font-semibold text-secondary-500 pb-4 uppercase">
                  {t("home.working.section3.heading")}
                </h2>
                <p className="lowercase">{t("home.working.section3.text")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* <div className="py-32 text-center">Conact us for any suport</div> */}
        <section>
          <div className="px-4 mx-auto max-w-screen-xl sm:py-20 lg:px-6">
            <div className="flex flex-col items-center space-y-8">
              <h1 className="text-primary-500 text-[1.3rem] md:text-3xl lg:text-4xl font-bold uppercase">
                {t("home.feedback.heading")}
              </h1>
              <p className="text-accent-600 text-center max-w-[786px] lowercase">
                {t("home.feedback.text")}
              </p>
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                  <Link to="/contact">
                    <button
                      type="button"
                      className="bg-primary-500 text-accent-100 px-5 py-3 rounded-2xl shadow-md hover:bg-transparent hover:border-primary-500 border-2 border-solid transition-all duration-300 hover:text-primary-500"
                    >
                      {t("home.feedback.proceed_btn")}
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-secondary-100">
          <div className="container max-w-[1100px] mx-auto px-4">
            <h2 className="text-3xl font-semibold mb-8 text-center  text-secondary-500 uppercase">
              {t("global.registered_facilities")}
            </h2>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              <div className="flex items-center justify-center p-4 bg-white rounded-2xl shadow-md mb-4">
                <FaWifi size={32} className="text-secondary-500 mr-2" />
                <span className="text-lg font-semibold text-accent-600">
                  {t("global.wifi")}
                </span>
              </div>
              <div className="flex items-center justify-center p-4 bg-white rounded-2xl shadow-md mb-4">
                <FaParking size={32} className="text-secondary-500 mr-2" />
                <span className="text-lg font-semibold text-accent-600">
                  {t("global.parkign")}
                </span>
              </div>
              <div className="flex items-center justify-center p-4 bg-white rounded-2xl shadow-md mb-4">
                <FaSwimmingPool size={32} className="text-secondary-500 mr-2" />
                <span className="text-lg font-semibold text-accent-600">
                  {t("global.pllo")}
                </span>
              </div>
              <div className="flex items-center justify-center p-4 bg-white rounded-2xl shadow-md mb-4">
                <FaUtensils size={32} className="text-secondary-500 mr-2" />
                <span className="text-lg font-semibold text-accent-600">
                  {t("global.cafe")}
                </span>
              </div>

              <div className="flex items-center justify-center p-4 bg-white rounded-2xl shadow-md mb-4">
                <FaBroom size={32} className="text-secondary-500 mr-2" />
                <span className="text-lg font-semibold text-accent-600">
                  {t("global.maintained")}
                </span>
              </div>
              <div className="flex items-center justify-center p-4 bg-white rounded-2xl shadow-md mb-4">
                <FaTshirt size={32} className="text-secondary-500 mr-2" />
                <span className="text-lg font-semibold text-accent-600">
                  {t("global.dressing")}
                </span>
              </div>
              <div className="flex items-center justify-center p-4 bg-white rounded-2xl shadow-md mb-4">
                <FaShieldAlt size={32} className="text-secondary-500 mr-2" />
                <span className="text-lg font-semibold text-accent-600">
                  {t("global.security")}
                </span>
              </div>
              <div className="flex items-center justify-center p-4 bg-white rounded-2xl shadow-md mb-4">
                <FaExclamationCircle
                  size={32}
                  className="text-secondary-500 mr-2"
                />
                <span className="text-lg font-semibold text-accent-600">
                  {t("global.complaint")}
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default MainPage;
