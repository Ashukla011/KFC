import { useState } from "react";
import axios from "axios";
import { auth } from "../config/firebase";
import { signInWithPhoneNumber, RecaptchaVerifier } from "firebase/auth";

export const PhoneLogin =()=> {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState("phone");

  // ✅ Correct reCAPTCHA setup
  const setupRecaptcha = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
          callback: () => {
            console.log("reCAPTCHA verified");
          },
        },
        auth,
        "+911234567890"
      );
    }
  };

  const sendOtp = async () => {
    try {
      setupRecaptcha();

      const confirmationResult = await signInWithPhoneNumber(
        auth,
        `+91${phone}`,
        window.recaptchaVerifier
      );

      window.confirmationResult = confirmationResult;
      setStep("otp");
    } catch (error) {
      alert(error.message);
      console.error(error);
    }
  };

  const verifyOtp = async () => {
    try {
      const result = await window.confirmationResult.confirm(otp);
      const token = await result.user.getIdToken(true);

      const res = await axios.post(
        "http://localhost:3500/userApi/login",
        { token }
      );

      localStorage.setItem("token", res.data.token);
      alert("Login successful");
    } catch (error) {
      alert("Invalid OTP");
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f4f6f8",
      }}
    >
      <div
        style={{
          width: "320px",
          padding: "20px",
          borderRadius: "10px",
          background: "#fff",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          textAlign: "center",
        }}
      >
        <h2>Phone Login</h2>

        <div id="recaptcha-container"></div>

        {step === "phone" ? (
          <>
            <input
              style={{
                width: "100%",
                padding: "10px",
                marginBottom: "10px",
              }}
              placeholder="Enter mobile number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <button
              style={{
                width: "100%",
                padding: "10px",
                background: "#4f46e5",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
              }}
              onClick={sendOtp}
            >
              Send OTP
            </button>
          </>
        ) : (
          <>
            <input
              style={{
                width: "100%",
                padding: "10px",
                marginBottom: "10px",
              }}
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
            <button
              style={{
                width: "100%",
                padding: "10px",
                background: "#16a34a",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
              }}
              onClick={verifyOtp}
            >
              Verify OTP
            </button>
          </>
        )}
      </div>
    </div>
  );
}
