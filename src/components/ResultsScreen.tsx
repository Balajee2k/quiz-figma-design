"use client";

import React from "react";
import { motion } from "framer-motion";

interface ResultsScreenProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
}

const ResultsScreen: React.FC<ResultsScreenProps> = ({
  score,
  totalQuestions,
  onRestart,
}) => {
  const percentage = Math.round((score / totalQuestions) * 100);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col items-center justify-center p-8 bg-[#f0f8fa]"
    >
      {/* Keep Learning Badge */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        className="bg-white rounded-xl py-3 px-8 shadow-sm border border-gray-100 mb-8"
      >
        <span className="text-[#1a3a47] text-sm font-medium">Keep Learning!</span>
      </motion.div>

      {/* Score Title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.4 }}
        className="text-4xl md:text-5xl font-playfair mb-4 text-center"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        <span className="italic text-[#1a5568]">Your</span>{" "}
        <span className="text-[#3d8fa3] font-semibold">Final score is</span>
      </motion.h1>

      {/* Score Display */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.5, type: "spring" }}
        className="flex items-baseline mb-10"
      >
        <span
          className="text-8xl md:text-[140px] font-playfair font-bold text-[#1a3a47]"
          style={{ fontFamily: "'Playfair Display', serif" }}
          aria-label={`${percentage} percent`}
        >
          {percentage}
        </span>
        <span className="text-4xl md:text-5xl text-[#6bc5d8] font-light ml-2">%</span>
      </motion.div>

      {/* Score Summary for Screen Readers */}
      <p className="sr-only">
        You scored {score} out of {totalQuestions} questions correctly, which is {percentage}%.
      </p>

      {/* Restart Button */}
      <motion.button
        onClick={onRestart}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.4 }}
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className="bg-[#e8f4f8] text-[#1a3a47] font-medium py-4 px-12 rounded-xl
                   border-2 border-[#6bc5d8] hover:bg-[#d4eaf0] transition-all duration-200
                   focus:outline-none focus-visible:ring-4 focus-visible:ring-[#6bc5d8] focus-visible:ring-offset-2
                   cursor-pointer shadow-sm"
        aria-label="Start the quiz again"
      >
        Start Again
      </motion.button>
    </motion.div>
  );
};

export default ResultsScreen;
