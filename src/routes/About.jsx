import React from 'react';
import AboutImage from '../assets/aboutimg.jpg'; // Replace with your image path

const About = () => {
  return (
    <div className="flex flex-col md:flex-row items-center p-6 bg-[#1e293b] text-white  shadow-lg  ">




      {/* Right Side - Image */}
      <div className="mt-6 md:mt-0 flex-shrink-0">
        <img src={AboutImage} alt="About Us" className="w-full h-auto max-w-md rounded-lg shadow-md" />
      </div>


      {/* Left Side - Description */}
      <div className="flex-1 text-center md:text-left md:pr-6">
        <h2 className="text-3xl font-semibold mb-4">About Us</h2>
        <p className="text-lg">
          Welcome to our website! We are dedicated to providing the best service and experience for our users. Our team is committed to excellence and ensuring that you have all the information you need at your fingertips.
        </p>
        <p className="text-lg  mt-4">
          We offer a wide range of features to help you easily find what you're looking for. Our platform is designed to be user-friendly and intuitive, so you can focus on what matters most to you.
        </p>
      </div>

    </div>
  );
};

export default About;
