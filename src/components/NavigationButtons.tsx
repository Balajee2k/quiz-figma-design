"use client";

import React from "react";
import { motion } from "framer-motion";

interface NavigationButtonsProps {
  onPrevious: () => void;
  onNext: () => void;
  canGoPrevious: boolean;
  canGoNext: boolean;
  isLastQuestion: boolean;
  hasSelectedAnswer: boolean;
}

const NavigationButtons: React.FC<NavigationButtonsProps> = ({
  onPrevious,
  onNext,
  canGoPrevious,
  canGoNext,
  isLastQuestion,
  hasSelectedAnswer,
}) => {
  return (
    <div className="flex justify-end gap-3 mt-8">
      <motion.button
        onClick={onPrevious}
        disabled={!canGoPrevious}
        className={`
          w-10 h-10 rounded-lg flex items-center justify-center
          border-2 transition-all duration-200
          focus:outline-none focus-visible:ring-4 focus-visible:ring-[#6bc5d8] focus-visible:ring-offset-2
          ${
            canGoPrevious
              ? "bg-white border-gray-200 text-[#1a3a47] hover:border-[#6bc5d8] hover:bg-[#f8fcfd] cursor-pointer"
              : "bg-gray-100 border-gray-200 text-gray-400 cursor-not-allowed"
          }
        `}
        whileHover={canGoPrevious ? { scale: 1.05 } : {}}
        whileTap={canGoPrevious ? { scale: 0.95 } : {}}
        aria-label="Previous question"
        aria-disabled={!canGoPrevious}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </motion.button>

      <motion.button
        onClick={onNext}
        disabled={!hasSelectedAnswer}
        className={`
          w-10 h-10 rounded-lg flex items-center justify-center
          border-2 transition-all duration-200
          focus:outline-none focus-visible:ring-4 focus-visible:ring-[#6bc5d8] focus-visible:ring-offset-2
          ${
            hasSelectedAnswer
              ? "bg-[#e8f4f8] border-[#6bc5d8] text-[#1a3a47] hover:bg-[#d4eaf0] cursor-pointer"
              : "bg-gray-100 border-gray-200 text-gray-400 cursor-not-allowed"
          }
        `}
        whileHover={hasSelectedAnswer ? { scale: 1.05 } : {}}
        whileTap={hasSelectedAnswer ? { scale: 0.95 } : {}}
        aria-label={isLastQuestion ? "Submit quiz" : "Next question"}
        aria-disabled={!hasSelectedAnswer}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </motion.button>
    </div>
  );
};

export default NavigationButtons;
