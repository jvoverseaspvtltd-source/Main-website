import React from "react";

const Loader = ({ size = "md", className = "" }) => {
  // We use a simplified map for common sizes, but the base animation 
  // is defined in globals.css under .hourglass-loader
  const sizeMap = {
    sm: "scale-75",
    md: "scale-100",
    lg: "scale-125",
  };

  return (
    <div className={`flex items-center justify-center min-h-[100px] w-full ${className}`}>
      <div className={`hourglass-loader ${sizeMap[size] || sizeMap.md}`}></div>
    </div>
  );
};

export default Loader;