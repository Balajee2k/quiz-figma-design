"use client";

import React from "react";
import { motion } from "framer-motion";

interface OptionButtonProps {
  option: string;
  index: number;
  isSelected: boolean;
  onClick: () => void;
  disabled?: boolean;
}

const OptionButton: React.FC<OptionButtonProps> = ({
  option,
  index,
  isSelected,
  onClick,
  disabled = false,
}) => {
  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      className={`
        w-full py-4 px-6 rounded-xl text-center text-base font-medium
        transition-all duration-200 ease-in-out
        border-2 cursor-pointer
        focus:outline-none focus-visible:ring-4 focus-visible:ring-[#6bc5d8] focus-visible:ring-offset-2
        ${
          isSelected
            ? "bg-[#e8f4f8] border-[#6bc5d8] text-[#1a3a47] shadow-md"
            : "bg-white border-gray-200 text-[#1a3a47] hover:border-[#a8d8ea] hover:bg-[#f8fcfd]"
        }
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
      `}
      whileHover={!disabled ? { scale: 1.02, y: -2 } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.3 }}
      role="radio"
      aria-checked={isSelected}
      aria-label={`Option: ${option}`}
    >
      {option}
    </motion.button>
  );
};

export default OptionButton;
