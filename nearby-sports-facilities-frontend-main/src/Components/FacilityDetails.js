import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import ReviewSection from "./ReviewSection";
import { useTranslation } from "react-i18next";
import axios from "axios";
import BookingModal from "./BookingModal";

const FacilityDetails = () => {
  const { t } = useTranslation();

  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalReview, setModalReview] = useState(false);

  const [facility, setFacility] = useState({});
  const [loading, setLoading] = useState(false);

  const { id } = useParams();

  const location = useLocation();
  const locationData = location.state?.data;

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(`/facilities/${id}`);
        if (data) {
          setFacility(data);
        }
      } catch (e) {
      } finally {
        setLoading(false);
      }
    })();
  }, [id]);

  if (!facility && !loading) {
    return (
      <div className="text-center text-xl text-primary-500 mt-4">
        Facility Not Available.
      </div>
    );
  }

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const openReview = () => {
    setModalReview(true);
  };

  const closeReview = () => {
    setModalReview(false);
  };

  return (
    <div>
      <Header />
      {!loading ? (
        <div
          className={`bg-primary-100 flex md:flex-row flex-col flex-wrap ${
            locationData ? "justify-start" : "justify-center"
          } items-start`}
        >
          <div className="min-h-[calc(100vh-356px)]  py-8 px-4 mx-auto max-w-screen-xl container sm:py-8 lg:px-6 flex flex-col lg:flex-row items-center space-y-8">
            <div className="home-content lg:w-3/4 lg:p-20 lg:pl-0">
              <div className="title">
                <h2 className="text-xl lg:text-3xl font-semibold text-accent-600">
                  <span className="lg:text-4xl text-primary-500">
                    {facility?.name}
                  </span>
                </h2>
                <div className="mt-2">
                  <h3 className="text-lg text-accent-600">
                    <span className="font-semibold">Category: </span>
                    {facility.category}
                  </h3>
                </div>
              </div>
              <div className="description mt-4 lg:mt-6">
                <p className="mt-2 text-gray-600">{facility?.description}</p>
                <div className="mt-4">
                  {" "}
                  <span className="text-lg font-medium text-accent-600 t">
                    € {facility?.price + `/${facility.period}`}
                  </span>
                </div>
                <div className="mt-2">
                  <h3 className="text-lg text-accent-600">
                    <span className="font-semibold">Location: </span>
                    {`${facility?.address}, ${facility?.city}, ${facility?.state}, ${facility?.country}`}
                  </h3>
                </div>
                <div className="mt-2">
                  <h3 className="text-lg text-accent-600">
                    <span className="font-semibold">Trainer: </span>
                    Yes
                  </h3>
                </div>
              </div>
              {locationData ? (
                <div className="mt-5 flex  gap-5">
                  <Link
                    to="/online-booking"
                    className="bg-primary-500 text-accent-100 px-6 py-3 rounded-md shadow-md hover:bg-transparent hover:border-primary-500 border-2 border-solid transition-all duration-300 hover:text-primary-500"
                  >
                    {t("global.explore_btn")}
                  </Link>
                  <button
                    onClick={openModal}
                    className="bg-primary-500 text-accent-100 px-6 py-3 rounded-md shadow-md hover:bg-transparent hover:border-primary-500 border-2 border-solid transition-all duration-300 hover:text-primary-500"
                  >
                    {t("global.book_now")}
                  </button>
                </div>
              ) : (
                <div className="mt-5 flex">
                  <button
                    onClick={openReview}
                    className="bg-primary-500 text-accent-100 px-6 py-3 rounded-md shadow-md hover:bg-transparent hover:border-primary-500 border-2 border-solid transition-all duration-300 hover:text-primary-500"
                  >
                    {t("reviews.btn_text")}
                  </button>
                </div>
              )}
            </div>
            <div className="w-full md:w-6/12 h-auto">
              <img
                src={facility.image}
                alt={facility?.name}
                className="w-full h-auto rounded-xl"
              />
            </div>
          </div>
        </div>
      ) : (
        <>Loading.......</>
      )}
      <BookingModal
        closeModal={closeModal}
        facility={facility}
        modalIsOpen={modalIsOpen}
      />
      <ReviewSection
        handleOpen={openReview}
        onClose={closeReview}
        open={modalReview}
        id={id}
      />
      <Footer />
    </div>
  );
};

export default FacilityDetails;
