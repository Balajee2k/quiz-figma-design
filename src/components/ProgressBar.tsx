"use client";

import React from "react";
import { motion } from "framer-motion";

interface ProgressBarProps {
  currentQuestion: number;
  totalQuestions: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  currentQuestion,
  totalQuestions,
}) => {
  return (
    <div
      className="flex gap-3 w-full max-w-[600px] mb-8"
      role="progressbar"
      aria-valuenow={currentQuestion}
      aria-valuemin={1}
      aria-valuemax={totalQuestions}
      aria-label={`Question ${currentQuestion} of ${totalQuestions}`}
    >
      {Array.from({ length: totalQuestions }).map((_, index) => (
        <div
          key={index}
          className="flex-1 h-1 rounded-full overflow-hidden bg-gray-200"
        >
          <motion.div
            className="h-full bg-[#1a3a47] rounded-full"
            initial={{ width: 0 }}
            animate={{
              width: index < currentQuestion ? "100%" : "0%",
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          />
        </div>
      ))}
    </div>
  );
};

export default ProgressBar;
