"use client";

import React, { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { quizData, Question } from "@/data/quizData";
import ProgressBar from "./ProgressBar";
import QuestionCard from "./QuestionCard";
import NavigationButtons from "./NavigationButtons";
import ResultsScreen from "./ResultsScreen";
import CatPawMascot from "./CatPawMascot";

const Quiz: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(
    new Array(quizData.length).fill(null)
  );
  const [showResults, setShowResults] = useState(false);

  const currentQuestion: Question = quizData[currentQuestionIndex];
  const selectedAnswer = answers[currentQuestionIndex];
  const isFirstQuestion = currentQuestionIndex === 0;
  const isLastQuestion = currentQuestionIndex === quizData.length - 1;

  const handleSelectAnswer = useCallback((index: number) => {
    setAnswers((prev) => {
      const newAnswers = [...prev];
      newAnswers[currentQuestionIndex] = index;
      return newAnswers;
    });
  }, [currentQuestionIndex]);

  const handlePrevious = useCallback(() => {
    if (!isFirstQuestion) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  }, [isFirstQuestion]);

  const handleNext = useCallback(() => {
    if (isLastQuestion) {
      setShowResults(true);
    } else {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  }, [isLastQuestion]);

  const handleRestart = useCallback(() => {
    setCurrentQuestionIndex(0);
    setAnswers(new Array(quizData.length).fill(null));
    setShowResults(false);
  }, []);

  // Calculate score
  const calculateScore = useCallback((): number => {
    return answers.reduce((score: number, answer, index) => {
      if (answer === quizData[index].correctAnswer) {
        return score + 1;
      }
      return score;
    }, 0);
  }, [answers]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (showResults) {
        if (e.key === "Enter" || e.key === " ") {
          handleRestart();
        }
        return;
      }

      switch (e.key) {
        case "ArrowLeft":
          handlePrevious();
          break;
        case "ArrowRight":
          if (selectedAnswer !== null) {
            handleNext();
          }
          break;
        case "1":
        case "2":
        case "3":
          const optionIndex = parseInt(e.key) - 1;
          if (optionIndex < currentQuestion.options.length) {
            handleSelectAnswer(optionIndex);
          }
          break;
        case "Enter":
          if (selectedAnswer !== null) {
            handleNext();
          }
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [showResults, selectedAnswer, currentQuestion.options.length, handlePrevious, handleNext, handleSelectAnswer, handleRestart]);

  if (showResults) {
    return (
      <ResultsScreen
        score={calculateScore()}
        totalQuestions={quizData.length}
        onRestart={handleRestart}
      />
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 md:p-8 relative overflow-hidden">
      {/* Background gradient layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#a8d8ea] via-[#e8f4f8] to-[#b8e0ed]" />
      <div className="absolute inset-0 bg-gradient-to-tl from-[#cce5ef]/50 via-transparent to-[#a8d8ea]/30" />
      
      {/* Main Quiz Card */}
      <motion.main
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative bg-white rounded-3xl shadow-2xl p-8 md:p-12 w-full max-w-[800px] min-h-[600px] z-10"
        role="main"
        aria-label="Quiz container"
      >
        {/* Decorative border glow */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#6bc5d8]/20 via-transparent to-[#6bc5d8]/20 pointer-events-none" />
        
        {/* Header */}
        <header className="text-center mb-8">
          <h1
            className="text-4xl md:text-5xl font-playfair mb-3"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            <span className="italic text-[#1a5568]">Test Your</span>{" "}
            <span className="text-[#3d8fa3] font-semibold">Knowledge</span>
          </h1>
          <p className="text-[#6b8a93] text-sm">
            Answer all questions to see your results
          </p>
        </header>

        {/* Progress Bar */}
        <div className="flex justify-center">
          <ProgressBar
            currentQuestion={currentQuestionIndex + 1}
            totalQuestions={quizData.length}
          />
        </div>

        {/* Question Content */}
        <AnimatePresence mode="wait">
          <QuestionCard
            key={currentQuestion.id}
            question={currentQuestion}
            selectedAnswer={selectedAnswer}
            onSelectAnswer={handleSelectAnswer}
          />
        </AnimatePresence>

        {/* Navigation */}
        <NavigationButtons
          onPrevious={handlePrevious}
          onNext={handleNext}
          canGoPrevious={!isFirstQuestion}
          canGoNext={selectedAnswer !== null}
          isLastQuestion={isLastQuestion}
          hasSelectedAnswer={selectedAnswer !== null}
        />

        {/* Screen reader instructions */}
        <div className="sr-only" aria-live="polite">
          Question {currentQuestionIndex + 1} of {quizData.length}. 
          {currentQuestion.question}
          Use number keys 1-3 to select an answer, arrow keys to navigate, Enter to proceed.
        </div>

        {/* Cat Paw Mascot - Only on first question */}
        {isFirstQuestion && <CatPawMascot />}
      </motion.main>
    </div>
  );
};

export default Quiz;
