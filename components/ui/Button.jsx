"use client";
import React from "react";
import { useFormStatus } from "react-dom";
import clsx from "clsx";

const Button = ({ children, type, onClick, fullWidth }) => {
  const {pending} = useFormStatus()
  return(
    <button
    type={type}
    disabled={pending}
    onClick={onClick}
    className={clsx(
      `bg-purple-600 px-4 py-1 rounded-md text-white h-full transition duration-300 hover:bg-purple-600/75`,
      fullWidth && `w-full`,
      // marginTop && "mt-5"
    )}
  >
    {children}
  </button>
  )
};

export default Button;
