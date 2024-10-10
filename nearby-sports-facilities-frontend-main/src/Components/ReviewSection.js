import React, { useEffect, useState } from "react";
import ReactModal from "react-modal";
import RattingComp from "./RattingComp";
import { useTranslation } from "react-i18next";
import axios from "axios";

const ReviewSection = ({ open, onClose, handleOpen, id }) => {
  const { t } = useTranslation();
  const [reviews, setReviews] = useState({});
  const [loading, setLoading] = useState(false);
  const [review, setReview] = useState("");
  const [ratting, setRatting] = useState(0);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(`/reviews/${id}`);
        if (data) {
          setReviews(data);
        }
      } catch (e) {
      } finally {
        setLoading(false);
      }
    })();
  }, [id]);

  const addReview = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { data } = await axios.post(`/reviews`, {
        facility: id,
        message: review,
        rating: ratting,
      });
      if (data) {
        setReviews((prevData) => [...prevData, data]);
        onClose();
      }
    } catch (e) {
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="py-10 relative" id="reviews">
        {!loading ? (
          <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
            {reviews.length ? (
              <>
                <h2 className="font-manrope font-bold text-4xl text-accent-600 text-center mb-11">
                  {t("reviews.heading")}
                </h2>
                <div className="grid grid-cols-1 gap-8">
                  {reviews.map((data) => (
                    <>
                      <div className="grid grid-cols-12 max-w-sm sm:max-w-full">
                        <div className="col-span-12">
                          <div className="sm:flex gap-6">
                            <div className="text">
                              <RattingComp ratting={data?.rating ?? 0} />

                              <p className="font-medium text-lg leading-8 text-accent-600 mb-2">
                                {data.user?.first_name} {data.user?.last_name}
                              </p>

                              <p className="font-normal text-base leading-7 text-accent-500 mb-4 lg:pr-8">
                                {data.message}
                              </p>
                              <div className="flex items-center justify-between">
                                {/* <div className="cursor-pointers flex items-center gap-2">
                        <button
                          onClick={handleOpen}
                          className="font-semibold text-lg cursor-pointer leading-8 text-primary-500 whitespace-nowrap"
                        >
                          Add Yours
                        </button>
                      </div> */}
                                {/* <p className="lg:hidden font-medium text-sm leading-7 text-accent-500 lg:text-center whitespace-nowrap">
                                  Nov 01, 2023
                                </p> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="pb-4 border-b border-primary-100 w-full"></div>
                    </>
                  ))}
                </div>
                <div className="cursor-pointers flex items-center gap-2 mt-5">
                  <button
                    onClick={handleOpen}
                    className="font-semibold text-lg p-4 py-2 cursor-pointer leading-8 text-primary-500 hover:text-[#ffffff] whitespace-nowrap border rounded-md border-primary-500 hover:bg-primary-500"
                  >
                    {t("reviews.add_btn")}
                  </button>
                </div>
              </>
            ) : (
              <>There are no reviews.</>
            )}
          </div>
        ) : (
          <>Loading......</>
        )}
      </section>
      <ReactModal
        isOpen={open}
        onRequestClose={onClose}
        className="flex items-center justify-center mt-200px"
        contentLabel="Feedback Form"
        overlayClassName="flex justify-center fixed inset-0 bg-white/75 z-[200]"
      >
        <div className="bg-white rounded-lg px-8 py-12 shadow-lg relative min-w-[300px] md:min-w-[500px] mx-auto">
          <div className="flex">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Add Feedback
            </h2>

            <button
              className="bg-primary-500 text-accent-100 rounded-full shadow-lg hover:text-accent-600 hover:bg-transparent hover:border-primary-500 border-2 border-solid transition-all duration-300 w-10 h-10 absolute top-5 right-5 flex items-center justify-center"
              onClick={onClose}
            >
              X
            </button>
          </div>

          <form className="mt-8" onSubmit={addReview}>
            <div className="mb-4">
              <RattingComp ratting={ratting} setRatting={setRatting} />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-600 font-medium mb-1"
              >
                Review:
              </label>
              <textarea
                rows={5}
                id="card"
                value={review}
                onChange={(e) => setReview(e.target.value)}
                className="mt-1 p-3 border border-gray-300 rounded w-full focus:ring-2 focus:ring-accent-1000 focus:outline-none"
                required
              />
            </div>

            <button
              type="submit"
              className="bg-primary-500 text-accent-100 px-6 py-3 rounded-md shadow-md hover:bg-transparent hover:border-primary-500 border-2 border-solid transition-all duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </ReactModal>
    </>
  );
};

export default ReviewSection;
