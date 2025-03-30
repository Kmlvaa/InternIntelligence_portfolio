import React from "react";
import './FloatingOrbs.css';

const FloatingOrbs = () => {
  return (
    <div className="1 relative w-screen h-screen overflow-hidden">
      <div className="2 absolute inset-0 z-10 w-full h-full">
        <div className="orb orb1"></div>
        <div className="orb orb2"></div>
        <div className="orb orb3"></div>
        <div className="orb orb4"></div>
        <div className="orb orb5"></div>
      </div>
    </div>
  );
};

export default FloatingOrbs;
