'use client'

import React, { useState, useEffect } from 'react'
import { quiz } from '@/actions/quiz'
import { quizDataType } from '@/types/quizType'
import { motion } from 'framer-motion'

export default function Quiz() {
  const [questions, setQuestions] = useState<quizDataType[]>([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0)
  const [score, setScore] = useState<number>(0)
  const [showScore, setShowScore] = useState<boolean>(false)
  const [isQuizStarted, setIsQuizStarted] = useState<boolean>(false)
  const [showComment, setShowComment] = useState<boolean>(false)
  const [lastAnswer, setLastAnswer] = useState<{
    answer: string
    isCorrect: boolean
  } | null>(null)

  useEffect(() => {
    if (isQuizStarted) {
      fetchQuiz()
    }
  }, [isQuizStarted])

  //     {
  //         "question": "주식 시장은 항상 상승한다.",
  //         "answer": "X",
  //         "comment": "주식 시장은 상승과 하락을 반복합니다."
  //     },
  //     {
  //         "question": "정부 채권은 회사 채권보다 안전하다.",
  //         "answer": "O",
  //         "comment": "일반적으로 정부 채권은 회사 채권보다 안전합니다."
  //     },
  //     {
  //         "question": "ETF는 주식처럼 거래되는 투자 펀드이다.",
  //         "answer": "O",
  //         "comment": "ETF는 거래소에서 주식처럼 거래됩니다."
  //     },
  //     {
  //         "question": "뮤추얼 펀드는 항상 높은 수익을 낸다.",
  //         "answer": "X",
  //         "comment": "뮤추얼 펀드도 시장 상황에 따라 수익이 변동될 수 있습니다."
  //     },
  //     {
  //         "question": "기본적 분석은 회사의 재무제표와 경제 상황을 분석하여 주식의 가치를 평가하는 방법이다.",
  //         "answer": "O",
  //         "comment": "기본적 분석은 회사의 재무제표와 경제 상황을 분석합니다."
  //     }

  const fetchQuiz = async () => {
    const res = await quiz()
    if (res?.isSuccess && res?.data?.length > 0) {
      setQuestions(res?.data)
      setScore(0)
      setCurrentQuestionIndex(0)
      setShowScore(false)
    }
  }
  const handleAnswer = (answer: string) => {
    const isCorrect = answer === questions[currentQuestionIndex].answer
    setShowComment(true)
    setLastAnswer({ answer, isCorrect })
    if (isCorrect) {
      setScore(score + 1)
    }

    setTimeout(() => {
      setShowComment(false)
      setLastAnswer(null)
      const nextQuestionIndex = currentQuestionIndex + 1
      if (nextQuestionIndex < questions?.length) {
        setCurrentQuestionIndex(nextQuestionIndex)
      } else {
        setShowScore(true)
      }
    }, 3000) // 3초 후에 다음 질문으로 이동
  }

  const startQuiz = () => {
    setIsQuizStarted(true)
  }

  const restartQuiz = () => {
    setIsQuizStarted(false)
    setTimeout(() => {
      setIsQuizStarted(true)
    }, 100) // 약간의 지연 후 퀴즈 다시 시작
  }

  return (
    <motion.div
      initial={{ opacity: 0, translateY: '-10px' }}
      animate={{ opacity: 1, translateY: '0px' }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative w-11/12 mx-auto min-h-52 h-auto bg-gradient-to-br from-[#42C0F8] to-[#B081F4] rounded-md my-8">
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
            <p className="mt-3">
              총 점수: {score} / {questions?.length}
            </p>
            <button
              className="w-32 h-10 bg-white text-[#42C0F8] rounded-md mt-8 text-lg mx-auto block"
              onClick={restartQuiz}
            >
              퀴즈 다시 시작
            </button>
          </div>
        ) : questions?.length > 0 ? (
          <div className="text-white text-lg font-bold text-center pt-10 px-4">
            {lastAnswer && (
              <div
                className={`absolute top-[20%] left-[35%]  text-9xl font-extrabold ${lastAnswer.isCorrect ? 'correct-animation' : 'wrong-animation'}`}
              >
                {lastAnswer.isCorrect ? 'O' : 'X'}
              </div>
            )}
            <p>{questions[currentQuestionIndex]?.question}</p>
            {showComment ? (
              <div className="mt-3 text-center text-md px-4">
                <p> {questions[currentQuestionIndex]?.answer}</p>
                <p>해설 : {questions[currentQuestionIndex]?.comment}</p>
              </div>
            ) : (
              <div className="mt-8">
                <button
                  className="w-20 h-10 bg-white text-[#42C0F8] rounded-md mx-2"
                  onClick={() => {
                    handleAnswer('O')
                  }}
                >
                  O
                </button>
                <button
                  className="w-20 h-10 bg-white text-[#42C0F8] rounded-md mx-2"
                  onClick={() => {
                    handleAnswer('X')
                  }}
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
    </motion.div>
  )
}
