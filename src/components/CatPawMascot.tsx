"use client";

import React from "react";
import { motion } from "framer-motion";

const CatPawMascot: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="absolute bottom-4 left-4 flex items-end"
      aria-hidden="true"
    >
      {/* Speech Bubble */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.3 }}
        className="relative bg-white rounded-xl px-4 py-2 shadow-md border border-gray-200 mb-12 mr-[-20px] z-10"
      >
        <span className="text-[#1a3a47] text-sm font-medium whitespace-nowrap">
          Best of Luck!
        </span>
        {/* Speech bubble tail */}
        <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white border-r border-b border-gray-200 transform rotate-45" />
      </motion.div>

      {/* Cat Paw SVG */}
      <motion.svg
        width="80"
        height="100"
        viewBox="0 0 80 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        animate={{ rotate: [0, 5, 0, -5, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
      >
        {/* Main paw body */}
        <ellipse cx="40" cy="65" rx="28" ry="35" fill="#FEFEFE" stroke="#E8E8E8" strokeWidth="2" />
        
        {/* Main pad */}
        <ellipse cx="40" cy="70" rx="16" ry="12" fill="#FFB5B5" />
        
        {/* Top pads */}
        <ellipse cx="25" cy="45" rx="10" ry="12" fill="#FEFEFE" stroke="#E8E8E8" strokeWidth="2" />
        <ellipse cx="25" cy="47" rx="6" ry="7" fill="#FFB5B5" />
        
        <ellipse cx="55" cy="45" rx="10" ry="12" fill="#FEFEFE" stroke="#E8E8E8" strokeWidth="2" />
        <ellipse cx="55" cy="47" rx="6" ry="7" fill="#FFB5B5" />
        
        <ellipse cx="40" cy="38" rx="9" ry="11" fill="#FEFEFE" stroke="#E8E8E8" strokeWidth="2" />
        <ellipse cx="40" cy="40" rx="5" ry="6" fill="#FFB5B5" />
      </motion.svg>
    </motion.div>
  );
};

export default CatPawMascot;
