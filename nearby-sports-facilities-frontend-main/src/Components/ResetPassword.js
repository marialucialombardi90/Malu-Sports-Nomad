import React from "react";
import logo1 from "../Images/logo1.png";
import bgauth from "../Images/bg-auth.jpg";
import { useNavigate } from "react-router-dom";
// import { toast } from "react-hot-toast";
// import { Link } from "react-router-dom";

const ResetPassword = () => {
  // const [formData, setFormData] = useState({
  //   email: "",
  //   password: "",
  // });

  const navigate = useNavigate();

  const handleResetPassword = () => {
    navigate("/signin");
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
        <form className="space-y-4">
          <div>
            <label className="block mb-2 font-semibold text-accent-100">
              Password: <span className="text-accent-100">*</span>
            </label>
            <input
              type="password"
              name="password"
              // value={formData.password}
              // onChange={handleChange}
              className="border border-gray-300 rounded px-3 py-2 w-full focus:ring-primary-500 focus:ring-2"
              required
            />
          </div>
          <div>
            <label className="block mb-2 font-semibold text-accent-100">
              Confirm Password: <span className="text-accent-100">*</span>
            </label>
            <input
              type="password"
              name="password"
              // value={formData.password}
              // onChange={handleChange}
              className="border border-gray-300 rounded px-3 py-2 w-full focus:ring-primary-500 focus:ring-2"
              required
            />
          </div>
          <div className="flex justify-center text-accent-100">
            <button
              type="submit"
              onClick={handleResetPassword}
              className="mt-2 bg-primary-500 text-accent-100 px-5 py-2 rounded-md shadow-md hover:bg-transparent hover:border-primary-500 border-2 border-solid transition-all duration-300"
            >
              Reset Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
