import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import VerifyAccount from "./components/VerifyAccount";
import EmailOTPVerification from "./components/EmailOTPVerification";
import EmailSucessVerify from "./components/EmailSucessVerify";
import PhoneOtpverification from "./components/PhoneOTPVerification";
import PhoneVerifiedSuccess from "./components/PhoneVerifiedSuccess";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<VerifyAccount />} />
        <Route
          path="/EmailOTPVerification"
          element={<EmailOTPVerification />}
        />
        <Route
          path="/PhoneOTPVerification"
          element={<PhoneOtpverification />}
        />
        <Route
          path="/PhoneVerifiedSuccess"
          element={<PhoneVerifiedSuccess />}
        />
        <Route path="/EmailSucessVerify" element={<EmailSucessVerify />} />
      </Routes>
    </Router>
  );
};

export default App;
