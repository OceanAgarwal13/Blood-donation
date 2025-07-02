import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ForgotPasswordPrototype() {
  const [step, setStep] = useState(1);
  const [mobile, setMobile] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');
  const [generatedOtp, setGeneratedOtp] = useState('');

  const sendOtp = () => {
    const randomOtp = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOtp(randomOtp);
    setStep(2);
    setMessage(`🔐 OTP sent: ${randomOtp} (Simulated)`);
  };

  const verifyOtp = () => {
    if (otp === generatedOtp) {
      setStep(3);
      setMessage('✅ OTP verified. Please enter your new password.');
    } else {
      setMessage('❌ Invalid OTP. Please try again.');
    }
  };

  const resetPassword = () => {
    setMessage(`✅ Password changed successfully for ${mobile} (Simulated)`);
    setStep(1);
    setMobile('');
    setOtp('');
    setNewPassword('');
    setGeneratedOtp('');
  };

  return (
    <div
      className="container d-flex justify-content-center align-items-center mt-5"
      style={{
        minHeight: '80vh',
        background: 'linear-gradient(to bottom right, #5f0f40, #9a031e),',
        color: 'white',
      }}
    >
      <div
        className="p-5 rounded"
        style={{
          background: 'rgba(255, 255, 255, 0.1)',
          width: '100%',
          maxWidth: '450px',
          boxShadow: '0 0 20px rgba(255,255,255,0.2)',
        }}
      >
        <h3 className="text-center mb-4">🔐 Forgot Password</h3>
        {message && (
          <div className="alert alert-light text-dark text-center fw-bold">
            {message}
          </div>
        )}

        {step === 1 && (
          <>
            <label>📱 Enter Mobile Number</label>
            <input
              className="form-control mb-3"
              placeholder="+91XXXXXXXXXX"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              style={{ background: '#fff' }}
            />
            <button className="btn btn-warning w-100 fw-bold" onClick={sendOtp}>
              Send OTP
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <label>🔢 Enter OTP</label>
            <input
              className="form-control mb-3"
              placeholder="Enter 6-digit OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              style={{ background: '#fff' }}
            />
            <button className="btn btn-success w-100 fw-bold" onClick={verifyOtp}>
              Verify OTP
            </button>
          </>
        )}

        {step === 3 && (
          <>
            <label>🔒 New Password</label>
            <input
              className="form-control mb-3"
              placeholder="Enter new password"
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              style={{ background: '#fff' }}
            />
            <button className="btn btn-primary w-100 fw-bold" onClick={resetPassword}>
              Reset Password
            </button>
          </>
        )}
        <div className="text-center mt-4">
          <Link to="/login" className=" text-decoration-underline fw-bold text-primary">
             Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
}
