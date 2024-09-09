import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const courses = [
  // ... (same course list as in FinancialEducationCourses.jsx)
];

const questions = [
  {
    id: 1,
    question: "What is blockchain?",
    options: [
      "A type of cryptocurrency",
      "A distributed ledger technology",
      "A centralized database",
      "A programming language"
    ],
    correctAnswer: 1
  },
  // ... (add 14 more questions for each course)
];

const CourseDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const course = courses.find(c => c.id === parseInt(id));
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleStartQuiz = () => {
    setShowQuiz(true);
  };

  const handleAnswer = (selectedAnswer) => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 10);
    }

    if (currentQuestion < 14) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleMintNFT = () => {
    if (score >= 100) {
      toast.success("Congratulations! You've minted your course completion NFT.");
      // Here you would integrate with your blockchain to actually mint the NFT
    } else {
      toast.error("You need a score of at least 100 to mint the NFT. Please retake the course.");
    }
  };

  const handleRetakeCourse = () => {
    setScore(0);
    setCurrentQuestion(0);
    setQuizCompleted(false);
    setShowQuiz(false);
  };

  if (!course) return <div>Course not found</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">{course.title}</h1>
      <p className="mb-4">Level: {course.level}</p>
      
      {!showQuiz && !quizCompleted && (
        <Button onClick={handleStartQuiz}>Start Quiz</Button>
      )}

      {showQuiz && !quizCompleted && (
        <div>
          <h2 className="text-xl font-semibold mb-4">Question {currentQuestion + 1}</h2>
          <p className="mb-4">{questions[currentQuestion].question}</p>
          {questions[currentQuestion].options.map((option, index) => (
            <Button
              key={index}
              onClick={() => handleAnswer(index)}
              className="mr-2 mb-2"
            >
              {option}
            </Button>
          ))}
        </div>
      )}

      {quizCompleted && (
        <div>
          <h2 className="text-xl font-semibold mb-4">Quiz Completed</h2>
          <p className="mb-4">Your score: {score} / 150</p>
          {score >= 100 ? (
            <Button onClick={handleMintNFT}>Mint NFT</Button>
          ) : (
            <Button onClick={handleRetakeCourse}>Retake Course</Button>
          )}
        </div>
      )}

      <Button onClick={() => navigate('/courses')} className="mt-4">Back to Courses</Button>
    </div>
  );
};

export default CourseDetails;