import { useFormik } from "formik";
import * as Yup from "yup";
import Modal from "react-modal"; // Ensure you have the Modal component imported
import axios from "axios";
import { errorToast, successToast } from "./Toast";

const BookingModal = ({ modalIsOpen, closeModal, facility }) => {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      cardNumber: "",
      cardExpiration: "",
      cvv: "",
      bookingPeriod: "",
      date: "",
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .required("Full name is required")
        .max(50, "Must be 50 characters or less"),
      cardNumber: Yup.string()
        .required("Card number is required")
        .matches(/^[0-9]{16}$/, "Must be exactly 16 digits"),
      cardExpiration: Yup.string()
        .required("Expiration date is required")
        .matches(
          /^(0[1-9]|1[0-2])\/?([0-9]{2}|[0-9]{4})$/,
          "Invalid expiration date format (mm/yy)"
        ),
      cvv: Yup.string()
        .required("CVV is required")
        .matches(/^[0-9]{3}$/, "Must be exactly 3 digits"),
      bookingPeriod: Yup.string().required("Booking period is required"),
      date: Yup.string().required("Date is required"),
    }),
    onSubmit: async (values) => {
      try {
        closeModal();
        await axios.post("/bookings", {
          facility: facility._id,
          booked_for: values.date,
          amount: facility.amount ?? 0,
        });
        successToast("Added Success");
      } catch (e) {
        errorToast(e.message);
      }
    },
  });

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      className="flex items-center justify-center mt-200px "
      contentLabel="Booking Modal"
      overlayClassName="flex justify-center fixed inset-0 bg-white/75 z-[200]"
    >
      <div className="bg-white rounded p-8 shadow-lg relative min-w-[300px]  mx-auto">
        <button
          className="bg-primary-500 text-accent-100 rounded-full shadow-lg hover:text-accent-600 hover:bg-transparent hover:border-primary-500 border-2 border-solid transition-all duration-300 w-10 h-10 absolute top-5 right-5 flex items-center justify-center"
          onClick={closeModal}
        >
          X
        </button>

        <form
          onSubmit={formik.handleSubmit}
          className="w-full p-4 sm:p-6 lg:max-w-xl lg:p-8"
        >
          <div className="mb-6 grid grid-cols-2 gap-4">
            <div className="col-span-2 sm:col-span-1">
              <label
                htmlFor="fullName"
                className="mb-2 block text-sm font-medium text-accent-600"
              >
                Full name (as displayed on card)*
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.fullName}
                className={`block w-full rounded border ${
                  formik.touched.fullName && formik.errors.fullName
                    ? "border-red-500"
                    : "border-accent-400"
                } bg-white p-2.5 text-sm text-accent-600 focus:border-primary-500 focus:ring-primary-500`}
                placeholder="Bonnie Green"
                required
              />
              {formik.touched.fullName && formik.errors.fullName ? (
                <div className="text-red-500 text-sm">
                  {formik.errors.fullName}
                </div>
              ) : null}
            </div>

            <div className="col-span-2 sm:col-span-1">
              <label
                htmlFor="cardNumber"
                className="mb-2 block text-sm font-medium text-accent-600"
              >
                Card number*
              </label>
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.cardNumber}
                className={`block w-full rounded border ${
                  formik.touched.cardNumber && formik.errors.cardNumber
                    ? "border-red-500"
                    : "border-accent-400"
                } bg-white p-2.5 pe-10 text-sm text-accent-600 focus:border-primary-500 focus:ring-primary-500`}
                placeholder="xxxx-xxxx-xxxx-xxxx"
                required
              />
              {formik.touched.cardNumber && formik.errors.cardNumber ? (
                <div className="text-red-500 text-sm">
                  {formik.errors.cardNumber}
                </div>
              ) : null}
            </div>

            <div>
              <label
                htmlFor="cardExpiration"
                className="mb-2 block text-sm font-medium text-accent-600"
              >
                Card expiration*
              </label>
              <div className="relative">
                <input
                  id="cardExpiration"
                  name="cardExpiration"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.cardExpiration}
                  className={`block w-full rounded border ${
                    formik.touched.cardExpiration &&
                    formik.errors.cardExpiration
                      ? "border-red-500"
                      : "border-accent-400"
                  } bg-white p-2.5 ps-9 text-sm text-accent-600 focus:border-primary-500 focus:ring-primary-500`}
                  placeholder="MM/YY"
                  required
                />
                {formik.touched.cardExpiration &&
                formik.errors.cardExpiration ? (
                  <div className="text-red-500 text-sm">
                    {formik.errors.cardExpiration}
                  </div>
                ) : null}
              </div>
            </div>

            <div>
              <label
                htmlFor="cvv"
                className="mb-2 flex items-center gap-1 text-sm font-medium text-accent-600"
              >
                CVV*
                <button
                  type="button"
                  className="text-gray-400 hover:text-accent-600"
                >
                  {/* Your tooltip icon can be placed here */}
                </button>
              </label>
              <input
                type="number"
                id="cvv"
                name="cvv"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.cvv}
                className={`block w-full rounded border ${
                  formik.touched.cvv && formik.errors.cvv
                    ? "border-red-500"
                    : "border-accent-400"
                } bg-white p-2.5 text-sm text-accent-600 focus:border-primary-500 focus:ring-primary-500`}
                placeholder="•••"
                required
              />
              {formik.touched.cvv && formik.errors.cvv ? (
                <div className="text-red-500 text-sm">{formik.errors.cvv}</div>
              ) : null}
            </div>

            <div>
              <label
                htmlFor="bookingPeriod"
                className="block mb-2 text-sm font-medium text-accent-600"
              >
                Select Period of Booking*
              </label>
              <select
                id="bookingPeriod"
                name="bookingPeriod"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.bookingPeriod}
                className={`bg-white border ${
                  formik.touched.bookingPeriod && formik.errors.bookingPeriod
                    ? "border-red-500"
                    : "border-accent-400"
                } text-accent-600 text-sm rounded focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5`}
              >
                <option value="">Select Period of Booking</option>
                <option value="day">120/Day</option>
                <option value="month">400/Month</option>
                <option value="session">100/Session</option>
              </select>
              {formik.touched.bookingPeriod && formik.errors.bookingPeriod ? (
                <div className="text-red-500 text-sm">
                  {formik.errors.bookingPeriod}
                </div>
              ) : null}
            </div>

            <div>
              <label
                htmlFor="date"
                className="mb-2 block text-sm font-medium text-accent-600"
              >
                For Date*
              </label>
              <input
                id="date"
                name="date"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.date}
                className={`block w-full rounded border ${
                  formik.touched.date && formik.errors.date
                    ? "border-red-500"
                    : "border-accent-400"
                } bg-white p-2.5 text-sm text-accent-600 focus:border-primary-500 focus:ring-primary-500`}
                placeholder="MM/DD/YYYY"
                required
              />
              {formik.touched.date && formik.errors.date ? (
                <div className="text-red-500 text-sm">{formik.errors.date}</div>
              ) : null}
            </div>
          </div>

          <button
            type="submit"
            className="flex w-full bg-primary-500 items-center justify-center rounded px-5 py-2.5 text-sm font-medium text-accent-100 hover:bg-primary-800 focus:outline-none"
          >
            Pay now (€ {facility?.price + `/${facility.period}`})
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default BookingModal;
