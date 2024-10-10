import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Routing from "./route/routing";
import axiosInstance from "./utils/axios";

axiosInstance.initialize();

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
      <Toaster position="top-right" />
    </>
  );
};

export default App;
