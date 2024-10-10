import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AuthGuard({ children }) {
  const navigate = useNavigate();
  const accessToken = localStorage.getItem("token");

  useEffect(() => {
    if (!accessToken) {
      localStorage.clear();
      navigate("/signin");
    }
  }, [navigate, accessToken]);

  return accessToken ? children : null;
  // return children;
}

export default AuthGuard;
