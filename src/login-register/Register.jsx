import React, { useState } from 'react';

const ChildAdoptionRegister = () => {
  const [formData, setFormData] = useState({
    fullName: '', dob: '', gender: '', email: '', mobile: '',
    address: '', city: '', state: '', reason: '', agreeTerms: false,
    emailOTP: '', mobileOTP: '', isEmailVerified: false, isMobileVerified: false,
  });

  const [generatedEmailOTP, setGeneratedEmailOTP] = useState('');
  const [generatedMobileOTP, setGeneratedMobileOTP] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  const sendEmailOTP = () => {
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedEmailOTP(otp);
    alert(`Email OTP sent: ${otp}`);
  };

  const verifyEmailOTP = () => {
    if (formData.emailOTP === generatedEmailOTP) {
      setFormData({ ...formData, isEmailVerified: true });
      alert("Email Verified Successfully!");
    } else {
      alert("Invalid Email OTP");
    }
  };

  const sendMobileOTP = () => {
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedMobileOTP(otp);
    alert(`Mobile OTP sent: ${otp}`);
  };

  const verifyMobileOTP = () => {
    if (formData.mobileOTP === generatedMobileOTP) {
      setFormData({ ...formData, isMobileVerified: true });
      alert("Mobile Verified Successfully!");
    } else {
      alert("Invalid Mobile OTP");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.isEmailVerified || !formData.isMobileVerified) {
      alert("Please verify Email and Mobile before submitting!");
      return;
    }
    console.log("Form Submitted:", formData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-10 rounded-xl shadow-lg w-full max-w-3xl">
        <h2 className="text-3xl font-semibold text-center text-gray-700 mb-6">Child Adoption Registration</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input type="text" name="fullName" placeholder="Full Name" className="input-field" onChange={handleChange} required />
            <input type="date" name="dob" className="input-field" onChange={handleChange} required />
            <select name="gender" className="input-field" onChange={handleChange} required>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <input type="text" name="city" placeholder="City" className="input-field" onChange={handleChange} required />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input type="email" name="email" placeholder="Email" className="input-field" onChange={handleChange} required />
            <button type="button" className="btn-blue" onClick={sendEmailOTP}>Send OTP</button>
            <input type="text" name="emailOTP" placeholder="Enter OTP" className="input-field" onChange={handleChange} required />
            <button type="button" className="btn-green" onClick={verifyEmailOTP}>Verify</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input type="text" name="mobile" placeholder="Mobile Number" className="input-field" onChange={handleChange} required />
            <button type="button" className="btn-blue" onClick={sendMobileOTP}>Send OTP</button>
            <input type="text" name="mobileOTP" placeholder="Enter OTP" className="input-field" onChange={handleChange} required />
            <button type="button" className="btn-green" onClick={verifyMobileOTP}>Verify</button>
          </div>

          <textarea name="reason" placeholder="Why do you want to adopt?" className="input-field" onChange={handleChange} required />

          <div className="flex items-center space-x-3">
            <input type="checkbox" name="agreeTerms" className="w-5 h-5" onChange={handleChange} required />
            <label className="text-gray-600">I agree to the terms and conditions</label>
          </div>

          <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition">Register</button>
        </form>
      </div>
    </div>
  );
};

export default ChildAdoptionRegister;

/* Tailwind Styles */
const styles = `
  .input-field {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 6px;
    outline: none;
    transition: border 0.2s;
  }
  .input-field:focus {
    border-color: #4a90e2;
  }
  .btn-blue {
    background-color: #3498db;
    color: white;
    padding: 10px;
    border-radius: 6px;
    font-weight: 600;
  }
  .btn-green {
    background-color: #2ecc71;
    color: white;
    padding: 10px;
    border-radius: 6px;
    font-weight: 600;
  }
`;
export const globalStyles = <style>{styles}</style>;
