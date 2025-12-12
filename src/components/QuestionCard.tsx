"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Question } from "@/data/quizData";
import OptionButton from "./OptionButton";

interface QuestionCardProps {
  question: Question;
  selectedAnswer: number | null;
  onSelectAnswer: (index: number) => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  selectedAnswer,
  onSelectAnswer,
}) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={question.id}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.3 }}
        className="w-full"
      >
        {/* Question */}
        <div
          className="bg-[#e8f4f8] rounded-xl py-4 px-6 mb-6"
          role="heading"
          aria-level={2}
        >
          <p className="text-center text-[#1a3a47] text-base font-medium">
            {question.id}. {question.question}
          </p>
        </div>

        {/* Options */}
        <div
          className="space-y-3"
          role="radiogroup"
          aria-label={`Options for question ${question.id}`}
        >
          {question.options.map((option, index) => (
            <OptionButton
              key={index}
              option={option}
              index={index}
              isSelected={selectedAnswer === index}
              onClick={() => onSelectAnswer(index)}
            />
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default QuestionCard;
