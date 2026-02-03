// src/components/Aboutus/AboutUsLayout.js
import React from 'react';
import { Outlet } from 'react-router-dom';

const AboutUsLayout = () => {
  return (
    <div className="about-us-page">
      {/* Optional: page header, breadcrumb */}
      <Outlet />
    </div>
  );
};

export default AboutUsLayout;
