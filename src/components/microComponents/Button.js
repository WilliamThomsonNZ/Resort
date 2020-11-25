import React from "react";

const Button = ({ children, styles }) => {
  return <button className={`btn ${styles}`}>{children}</button>;
};

export default Button;
