import React from "react";
import PrimaryButtonProps from "./PrimaryButtonProps.types";

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ children, onClick, ...props }) => {
  return (
    <button
    className="w-full bg-neutral-800 text-white font-medium px-6 py-4 rounded-xl hover:bg-neutral-900"
    onClick={onClick} {...props}
  >
    {children}
  </button>
  );
};

export default PrimaryButton;
