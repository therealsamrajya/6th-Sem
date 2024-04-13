import React from "react";
import { bgphoto } from "../assets/assets";

const Background = ({ children }) => {
  const backgroundStyle = {
    backgroundImage: `url(${bgphoto})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "200vh",
  };

  return <div style={backgroundStyle}>{children}</div>;
};

export default Background;
