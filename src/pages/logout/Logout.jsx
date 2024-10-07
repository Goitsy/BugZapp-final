import React from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");

    navigate("/");
  };

  return (
    <div>
      <h2>You have been logged out</h2>
      <button onClick={handleLogout}>Return to Login</button>
    </div>
  );
};

export default Logout;
