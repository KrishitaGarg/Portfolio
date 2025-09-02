import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

const ThankYou = () => {
  const navigate = useNavigate();

  // Auto-redirect after 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 10000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="thankyou-container">
      <div className="thankyou-card">
        <FaCheckCircle className="thankyou-icon" />
        <h1>Thank You!</h1>
        <p>
          Your message has been sent successfully. I'll get back to you soon.
        </p>
        <button className="back-btn" onClick={() => navigate("/")}>
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default ThankYou;
