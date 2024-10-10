import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import SignInPage from "../Components/SignIn";
// import LandingPage from "../Components/LandingPage";
import SignUpPage from "../Components/SignUpPage";
import ForgetPassword from "../Components/ForgetPassword";
import Otp from "../Components/Otp";
import ResetPassword from "../Components/ResetPassword";
import MainPage from "../Components/MainPage";
import RegisteredFacilitiesPage from "../Components/RegisteredFacilitiesPage";
import NearbyFacilitiesPage from "../Components/NearbyFacilitiesPage";
import OnlineBookingPage from "../Components/OnlineBookingPage";
import ExcercisesPage from "../Components/ExcercisesPage";
import ContactPage from "../Components/ContactPage";
import FacilityDetails from "../Components/FacilityDetails";
import AuthGuard from "../Components/AuthGuard";

const Routing = () => {
  // const location = useLocation();
  // const isLoggedIn = localStorage.getItem("isLoggedin");

  // if (
  //   (location.pathname === "/signin" || location.pathname === "/signup") &&
  //   isLoggedIn
  // ) {
  //   return <Navigate to="/blogcreation" />;
  // }

  return (
    <Routes>
      <Route path="/" element={<Navigate to="main" />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/forget-password" element={<ForgetPassword />} />
      <Route path="/otp" element={<Otp />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/main" element={<MainPage />} />

      <Route
        path="/registered-facilities"
        element={
          <AuthGuard>
            <RegisteredFacilitiesPage />
          </AuthGuard>
        }
      />
      <Route
        path="/registered-facilities/:id"
        element={
          <AuthGuard>
            <FacilityDetails />
          </AuthGuard>
        }
      />
      <Route
        path="/nearby-facilities"
        element={
          <AuthGuard>
            <NearbyFacilitiesPage />
          </AuthGuard>
        }
      />
      <Route
        path="/online-booking"
        element={
          <AuthGuard>
            <OnlineBookingPage />
          </AuthGuard>
        }
      />
      <Route
        path="/online-booking/:id"
        element={
          <AuthGuard>
            <FacilityDetails />
          </AuthGuard>
        }
      />
      <Route
        path="/excercises"
        element={
          <AuthGuard>
            <ExcercisesPage />
          </AuthGuard>
        }
      />
      <Route
        path="/contact"
        element={
          <AuthGuard>
            <ContactPage />
          </AuthGuard>
        }
      />
    </Routes>
  );
};

export default Routing;
