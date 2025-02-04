import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Animate.css';

const ChildAdoptionLogin = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [otp, setOtp] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
  });

  const handleLoginClick = () => {
    setIsLogin(false);
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    console.log('OTP Submitted:', otp);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 bg-cover bg-center p-4 sm:p-8" style={{ backgroundImage: 'url(https://example.com/your-image.jpg)' }}>
      <div className="flex flex-col sm:flex-row justify-between w-full max-w-4xl bg-white bg-opacity-90 p-6 sm:p-10 rounded-lg shadow-xl animate__animated animate__fadeIn">
        
        {/* Side Content */}
        <div className="w-full sm:w-1/2 mb-6 sm:mb-0 sm:pr-6 text-center sm:text-left">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 animate__animated animate__fadeInLeft">Child Adoption</h2>
          <p className="text-gray-700 text-lg mb-4 animate__animated animate__fadeInLeft animate__delay-1s">
            Adopting a child brings joy and a new beginning for both the child and the parents.
            Start your adoption journey today!
          </p>
          <img
            alt="Child Adoption"
            src="https://precisionadvisory.com.au/wp-content/uploads/2015/12/happy-family-with-grandparents-children-1200x800.jpg"
            className="rounded-lg shadow-lg w-full transform hover:scale-105 transition duration-300"
          />
        </div>

        {/* Login or OTP Form */}
        <div className="w-full sm:w-1/2 bg-white p-6 rounded-lg shadow-lg animate__animated animate__fadeInRight">
          <h2 className="text-2xl font-bold text-center mb-6">Login to Adopt</h2>

          {isLogin ? (
            <form action="#" method="POST">
              <div className="mb-4">
                <label htmlFor="full-name" className="block text-gray-700">Full Name</label>
                <input
                  type="text"
                  id="full-name"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="mobile-number" className="block text-gray-700">Mobile Number</label>
                <input
                  type="text"
                  id="mobile-number"
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>

              <div className="flex flex-col items-center">
                <button
                  type="button"
                  className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300 hover:scale-105"
                  onClick={handleLoginClick}
                >
                  Login
                </button>

                {/* Register Page Link */}
                <p className="mt-4 text-gray-700">
                  Don't have an account?{' '}
                  <Link to="/register" className="text-blue-600 hover:underline">
                    Register here
                  </Link>
                </p>
              </div>
            </form>
          ) : (
            <form onSubmit={handleOtpSubmit}>
              <div className="mb-4">
                <label htmlFor="otp" className="block text-gray-700">Enter OTP</label>
                <input
                  type="text"
                  id="otp"
                  name="otp"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  required
                />
              </div>

              <div className="flex justify-center">
                <button type="submit" className="w-full py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-300 hover:scale-105">
                  Submit OTP
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChildAdoptionLogin;
