"use client";

import { CustomButtonProps } from "@/types/index";
import Image from "next/image";

const CustomButton = ({
  title,
  btnType,
  containerStyles = "",
  handleClick,
  textStyles,
  rightIcon,
}: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      onClick={handleClick}
      type={btnType || "button"}
      className={`custom-btn ${containerStyles}`}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image
            src={rightIcon}
            alt="right icon"
            fill
            className="object-contain"
          />
        </div>
      )}
    </button>
  );
};

export default CustomButton;
