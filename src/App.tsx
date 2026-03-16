/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, CheckCircle2, XCircle, Trophy, RefreshCcw, ExternalLink, ChevronRight, HeartPulse } from "lucide-react";
import { questions, Question } from "./types";

export default function App() {
  const [gameState, setGameState] = useState<"start" | "quiz" | "result">("start");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState(0);
  const [attempted, setAttempted] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([]);

  // Initialize quiz
  const startQuiz = () => {
    // Shuffle questions for better experience
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    setShuffledQuestions(shuffled);
    setCurrentQuestionIndex(0);
    setScore(0);
    setWrongAnswers(0);
    setAttempted(0);
    setGameState("quiz");
    setIsAnswered(false);
    setSelectedOption(null);
  };

  const handleOptionClick = (index: number) => {
    if (isAnswered) return;

    setSelectedOption(index);
    setIsAnswered(true);
    setAttempted((prev) => prev + 1);

    const currentQuestion = shuffledQuestions[currentQuestionIndex];
    const correctLetter = currentQuestion.answer; // "A", "B", "C", "D"
    const correctIndex = correctLetter.charCodeAt(0) - 65; // A=0, B=1, etc.

    if (index === correctIndex) {
      setScore((prev) => prev + 1);
    } else {
      setWrongAnswers((prev) => prev + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < shuffledQuestions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setIsAnswered(false);
      setSelectedOption(null);
    } else {
      setGameState("result");
    }
  };

  const currentQuestion = shuffledQuestions[currentQuestionIndex];
  const correctIndex = currentQuestion ? currentQuestion.answer.charCodeAt(0) - 65 : -1;

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans selection:bg-emerald-100">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-200 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-emerald-600 p-2 rounded-lg text-white">
            <HeartPulse size={24} />
          </div>
          <h1 className="text-xl font-bold tracking-tight text-stone-800 hidden sm:block">
            Tibbiy Quiz
          </h1>
        </div>
        <a
          href="https://t.me/thesodiqjon"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-sky-500 hover:bg-sky-600 text-white rounded-full transition-all shadow-sm hover:shadow-md active:scale-95"
        >
          <Send size={18} />
          <span className="text-sm font-medium">Telegram</span>
          <ExternalLink size={14} className="opacity-70" />
        </a>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-12 min-h-[calc(100vh-160px)] flex flex-col justify-center">
        <AnimatePresence mode="wait">
          {gameState === "start" && (
            <motion.div
              key="start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-center space-y-8"
            >
              <div className="space-y-4">
                <h2 className="text-4xl sm:text-5xl font-extrabold text-stone-900 leading-tight">
                  Tibbiy bilimingizni <br />
                  <span className="text-emerald-600 italic">sinovdan o'tkazing</span>
                </h2>
                <p className="text-stone-500 text-lg max-w-lg mx-auto">
                  300 dan ortiq professional tibbiy savollar to'plami. O'z mahoratingizni oshiring va xatolaringizdan o'rganing.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
                <div className="bg-white p-4 rounded-2xl border border-stone-200 shadow-sm">
                  <div className="text-2xl font-bold text-emerald-600">{questions.length}</div>
                  <div className="text-xs text-stone-400 uppercase tracking-widest font-semibold">Savollar</div>
                </div>
                <div className="bg-white p-4 rounded-2xl border border-stone-200 shadow-sm">
                  <div className="text-2xl font-bold text-emerald-600">100%</div>
                  <div className="text-xs text-stone-400 uppercase tracking-widest font-semibold">Bepul</div>
                </div>
              </div>

              <button
                onClick={startQuiz}
                className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-emerald-600 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-600 hover:bg-emerald-700 active:scale-95 shadow-lg shadow-emerald-200"
              >
                Testni Boshlash
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          )}

          {gameState === "quiz" && currentQuestion && (
            <motion.div
              key="quiz"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-8"
            >
              {/* Progress */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm font-medium text-stone-400">
                  <span>Savol {currentQuestionIndex + 1} / {shuffledQuestions.length}</span>
                  <span>To'g'ri: {score}</span>
                </div>
                <div className="w-full h-2 bg-stone-200 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-emerald-500"
                    initial={{ width: 0 }}
                    animate={{ width: `${((currentQuestionIndex + 1) / shuffledQuestions.length) * 100}%` }}
                  />
                </div>
              </div>

              {/* Question Card */}
              <div className="bg-white p-8 rounded-3xl border border-stone-200 shadow-xl shadow-stone-200/50 space-y-8">
                <h3 className="text-xl sm:text-2xl font-bold text-stone-800 leading-relaxed">
                  {currentQuestion.question}
                </h3>

                <div className="grid gap-3">
                  {currentQuestion.options.map((option, idx) => {
                    const isCorrect = idx === correctIndex;
                    const isSelected = idx === selectedOption;
                    
                    let variantClass = "border-stone-200 hover:border-emerald-200 hover:bg-emerald-50/30";
                    let icon = null;

                    if (isAnswered) {
                      if (isCorrect) {
                        variantClass = "border-emerald-500 bg-emerald-50 text-emerald-700 ring-1 ring-emerald-500";
                        icon = <CheckCircle2 className="text-emerald-500" size={20} />;
                      } else if (isSelected && !isCorrect) {
                        variantClass = "border-rose-500 bg-rose-50 text-rose-700 ring-1 ring-rose-500";
                        icon = <XCircle className="text-rose-500" size={20} />;
                      } else {
                        variantClass = "border-stone-100 opacity-50";
                      }
                    }

                    return (
                      <button
                        key={idx}
                        onClick={() => handleOptionClick(idx)}
                        disabled={isAnswered}
                        className={`group flex items-center justify-between p-5 rounded-2xl border-2 text-left transition-all duration-200 ${variantClass} ${!isAnswered && "active:scale-[0.98]"}`}
                      >
                        <div className="flex items-center gap-4">
                          <span className={`flex items-center justify-center w-8 h-8 rounded-lg text-sm font-bold transition-colors ${
                            isAnswered && isCorrect ? "bg-emerald-500 text-white" : 
                            isAnswered && isSelected && !isCorrect ? "bg-rose-500 text-white" :
                            "bg-stone-100 text-stone-500 group-hover:bg-emerald-100 group-hover:text-emerald-600"
                          }`}>
                            {String.fromCharCode(65 + idx)}
                          </span>
                          <span className="font-medium">{option}</span>
                        </div>
                        {icon}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Controls */}
              <div className="flex justify-between items-center h-12">
                <button
                  onClick={() => setGameState("result")}
                  className="text-stone-400 hover:text-rose-500 font-medium transition-colors"
                >
                  Testni yakunlash
                </button>
                {isAnswered && (
                  <motion.button
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    onClick={nextQuestion}
                    className="flex items-center gap-2 px-8 py-3 bg-stone-900 text-white rounded-xl font-bold hover:bg-stone-800 transition-all active:scale-95 shadow-lg shadow-stone-300"
                  >
                    Keyingisi
                    <ChevronRight size={20} />
                  </motion.button>
                )}
              </div>
            </motion.div>
          )}

          {gameState === "result" && (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center space-y-8"
            >
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-emerald-500 blur-3xl opacity-20 rounded-full" />
                <Trophy size={100} className="mx-auto text-amber-400 relative z-10" />
              </div>

              <div className="space-y-2">
                <h2 className="text-4xl font-black text-stone-900">Natija!</h2>
                <p className="text-stone-500 font-medium">Siz barcha savollarga javob berdingiz.</p>
              </div>

              <div className="grid grid-cols-2 gap-6 max-w-sm mx-auto">
                <div className="bg-white p-6 rounded-3xl border border-stone-200 shadow-sm">
                  <div className="text-4xl font-black text-emerald-600">{score}</div>
                  <div className="text-xs text-stone-400 uppercase tracking-widest font-bold mt-1">To'g'ri</div>
                </div>
                <div className="bg-white p-6 rounded-3xl border border-stone-200 shadow-sm">
                  <div className="text-4xl font-black text-rose-500">{wrongAnswers}</div>
                  <div className="text-xs text-stone-400 uppercase tracking-widest font-bold mt-1">Xato</div>
                </div>
              </div>

              <div className="bg-emerald-50 p-6 rounded-3xl border border-emerald-100 max-w-sm mx-auto">
                <div className="text-sm text-emerald-700 font-semibold mb-1">Muvaffaqiyat ko'rsatkichi</div>
                <div className="text-3xl font-black text-emerald-800">
                  {attempted > 0 ? Math.round((score / attempted) * 100) : 0}%
                </div>
                <div className="text-xs text-emerald-600 mt-1">
                  {attempted} ta savoldan {score} tasi to'g'ri
                </div>
              </div>

              <button
                onClick={startQuiz}
                className="flex items-center gap-2 mx-auto px-8 py-4 bg-emerald-600 text-white rounded-2xl font-bold hover:bg-emerald-700 transition-all active:scale-95 shadow-xl shadow-emerald-200"
              >
                <RefreshCcw size={20} />
                Qayta urinish
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-stone-200 text-center space-y-2">
        <p className="text-stone-400 text-sm font-medium tracking-widest uppercase">
          YARATUVCHI: <span className="text-stone-600 font-bold">Sodiqjon Mukhtorov</span>
        </p>
        <p className="text-stone-300 text-xs">© 2026 Barcha huquqlar himoyalangan</p>
      </footer>
    </div>
  );
}

