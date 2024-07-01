'use client'

import React, { useState, useEffect } from 'react';
import { quiz } from "@/actions/quiz";
import { quizDataType } from '@/types/quizType';

export default function Quiz() {
  const [questions, setQuestions] = useState<quizDataType[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [showScore, setShowScore] = useState<boolean>(false);
  const [isQuizStarted, setIsQuizStarted] = useState<boolean>(false);
  const [showComment, setShowComment] = useState<boolean>(false);

  useEffect(() => {
    if (isQuizStarted) {
      fetchQuiz();
    }
  }, [isQuizStarted]);

  const fetchQuiz = async () => {
    const res = await quiz();
    if (res?.isSuccess && res?.data?.length > 0) {
      setQuestions(shuffleArray(res?.data));
      setScore(0);
      setCurrentQuestionIndex(0);
      setShowScore(false);
    }
  };

  const shuffleArray = (array: quizDataType[]): quizDataType[] => {
    return array.sort(() => Math.random() - 0.5);
  };

  const handleAnswer = (answer: string) => {
    setShowComment(true);
    if (answer === questions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }

    setTimeout(() => {
      setShowComment(false);
      const nextQuestionIndex = currentQuestionIndex + 1;
      if (nextQuestionIndex < questions?.length) {
        setCurrentQuestionIndex(nextQuestionIndex);
      } else {
        setShowScore(true);
      }
    }, 3000); // 3초 후에 다음 질문으로 이동
  };

  const startQuiz = () => {
    setIsQuizStarted(true);
  };

  const restartQuiz = () => {
    setIsQuizStarted(false);
    setTimeout(() => {
      setIsQuizStarted(true);
    }, 100); // 약간의 지연 후 퀴즈 다시 시작
  };

  return (
    <div className="w-11/12 mx-auto h-52 bg-gradient-to-br from-[#42C0F8] to-[#B081F4] rounded-md my-8">
      {!isQuizStarted ? (
        <div className="text-white text-xl font-bold text-center pt-10">
          <p>주식 O/X 퀴즈</p>
          <p className="mt-3 text-sm">주식에 대한 지식을 테스트해보세요!</p>
          <button
            className="w-32 h-12 bg-white text-[#42C0F8] rounded-md mt-10 mx-auto block text-lg"
            onClick={startQuiz}
          >
            퀴즈 시작
          </button>
        </div>
      ) : showScore ? (
        <div className="text-white text-xl font-bold text-center pt-10">
          <p>퀴즈 완료!</p>
          <p className="mt-3">총 점수: {score} / {questions?.length}</p>
          <button
            className="w-32 h-10 bg-white text-[#42C0F8] rounded-md mt-8 text-lg mx-auto block"
            onClick={restartQuiz}
          >
            퀴즈 다시 시작
          </button>
        </div>
      ) : questions?.length > 0 ? (
        <div className="text-white text-lg font-bold text-center pt-10 px-4">
          <p>{questions[currentQuestionIndex]?.question}</p>
          {showComment ? (
            <div className="mt-3 text-center text-md px-4">
              <p>해설 : {questions[currentQuestionIndex]?.comment}</p>
            </div>
          ) : (
            <div className="mt-8">
              <button
                className="w-20 h-10 bg-white text-[#42C0F8] rounded-md mx-2"
                onClick={() => {handleAnswer('O');}}
              >
                O
              </button>
              <button
                className="w-20 h-10 bg-white text-[#42C0F8] rounded-md mx-2"
                onClick={() => {handleAnswer('X');}}
              >
                X
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="text-white text-xl font-bold text-center pt-10">
          <p>퀴즈 데이터를 불러오는 중...</p>
        </div>
      )}
    </div>
  );
}
