"use client";

import { CustomButtonProps } from "@/types/index";

const CustomButton = ({
  title,
  btnType,
  containerStyles = "",
  handleClick,
}: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      onClick={handleClick}
      type={btnType || "button"}
      className={`custom-btn ${containerStyles}`}
    >
      <span className={`flex-1`}>{title}</span>
    </button>
  );
};

export default CustomButton;
