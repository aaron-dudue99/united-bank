import React from "react";

const Button = ({ children }: any) => {
  return (
    <button className="py-1 px-6 bg-primary text-white w-auto self-start">
      {children}
    </button>
  );
};

export default Button;
