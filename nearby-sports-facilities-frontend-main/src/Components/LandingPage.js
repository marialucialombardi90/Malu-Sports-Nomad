import React from "react";
import { Link } from "react-router-dom";
import logo1 from "../Images/logo1.png";
import landing from "../Images/landing.gif";
import booking from "../Images/booking.png";
import complex from "../Images/complex.png";
import maps from "../Images/maps.png";
import underline from "../Images/underline.png";

const LandingPage = () => {
  return (
    <>
      <section id="hero-section" className="home bg-white mt-6">
        <div className="py-8 px-4 mx-auto max-w-screen-xl container sm:py-8 lg:px-6 flex flex-col lg:flex-row items-center space-y-8">
          <div className="home-content lg:w-3/4 lg:p-20 lg:pl-0">
            <div className="title">
              <h2 className="text-xl lg:text-3xl font-semibold text-gray-900">
                <span className="lg:text-4xl text-primary-500">
                  <img
                    src={logo1}
                    alt="image1"
                    className="ml-0 md:ml-[-18px]"
                  />
                </span>
              </h2>
            </div>
            <div className="description mt-4 lg:mt-6">
              <p className="text-gray-600 font-semibold">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Numquam assumenda illo adipisci modi, dolore totam nam itaque
                error quibusdam, est quas aliquam. Eos impedit, suscipit quaerat
                ex perferendis ea nemo eius! Nesciunt nostrum id fuga eaque
                voluptatibus sint
              </p>
            </div>
            <Link to="/signin">
              <button className="mt-8 bg-primary-500 text-accent-100 px-5 py-2 rounded-md shadow-md hover:bg-transparent hover:border-primary-500 border-2 border-solid transition-all duration-300">
                Get Started
                <i className="fas fa-arrow-right ml-2"></i>
              </button>
            </Link>
          </div>
          <div className="w-full md:w-6/12 h-auto">
            <img src={landing} alt="image1" className="w-full h-auto" />
          </div>
        </div>
      </section>
      <section id="services" className="bg-white">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-6 lg:px-6 ">
          <div className="flex flex-col items-center space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div
                className="bg-primary-100 p-6 rounded-lg border-2 border-primary-500"
                data-aos="slide-up"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-white rounded-md mb-4">
                  <img
                    src={maps}
                    alt="Maps Icon"
                    className="w-8 h-8 lg:w-10 lg:h-10 text-primary-600 lg:text-primary-300"
                  />
                </div>
                <h4 className="mb-2 text-xl font-bold">
                  Explore Facilities Nearby
                </h4>
                <div className="mb-2">
                  <img
                    src={underline}
                    alt="underline-2"
                    className="w-18 h-1.5 mt-3"
                  />
                </div>
                <p className="text-accent-1000">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Numquam assumenda illo adipisci modi, dolore totam nam itaque
                  error quibusdam, est quas aliquam. Eos impedit, suscipit
                  quaerat ex perferendis ea nemo eius
                </p>
              </div>

              <div
                className="bg-primary-100 p-6 rounded-lg border-2 border-primary-500"
                data-aos="slide-up"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-white rounded-md mb-4">
                  <img
                    src={complex}
                    alt="complex Icon"
                    className="w-8 h-8 lg:w-11 lg:h-11 text-primary-600 lg:text-primary-300"
                  />
                </div>
                <h4 className="mb-2 text-xl font-bold">
                  Registered Facilities
                </h4>
                <div className="mb-2">
                  <img
                    src={underline}
                    alt="underline-2"
                    className="w-18 h-1.5 mt-3"
                  />
                </div>
                <p className="text-accent-1000">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Numquam assumenda illo adipisci modi, dolore totam nam itaque
                  error quibusdam, est quas aliquam. Eos impedit, suscipit
                  quaerat ex perferendis ea nemo eius
                </p>
              </div>
              <div
                className="bg-primary-100 p-6 rounded-lg border-2 border-primary-500"
                data-aos="slide-up"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-white rounded-md mb-4">
                  <img
                    src={booking}
                    alt="booking icon"
                    className="w-8 h-8 lg:w-10 lg:h-10 text-primary-600 lg:text-primary-300"
                  />
                </div>
                <h4 className="mb-2 text-xl font-bold">Online Booking</h4>
                <div className="mb-4">
                  <img
                    src={underline}
                    alt="underline-2"
                    className="w-18 h-1.5 mt-3"
                  />
                </div>
                <p className="text-accent-1000">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Numquam assumenda illo adipisci modi, dolore totam nam itaque
                  error quibusdam, est quas aliquam. Eos impedit, suscipit
                  quaerat ex perferendis ea nemo eius
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingPage;
