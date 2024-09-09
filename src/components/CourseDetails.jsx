import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const courses = [
  {
    id: 1,
    title: "Introduction to Blockchain",
    level: "Beginner",
    content: "This course covers the fundamental concepts of blockchain technology, including its history, how it works, and its potential applications. You'll learn about decentralization, consensus mechanisms, and the basic structure of a blockchain.",
    questions: [
      {
        question: "What is blockchain?",
        options: [
          "A type of cryptocurrency",
          "A distributed ledger technology",
          "A centralized database",
          "A programming language"
        ],
        correctAnswer: 1
      },
      // ... (Add 14 more questions for this course)
    ]
  },
  // ... (Add the remaining 49 courses with their respective questions)
];

const CourseDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const course = courses.find(c => c.id === parseInt(id));
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  useEffect(() => {
    if (!course) {
      navigate('/courses');
    }
  }, [course, navigate]);

  const handleStartQuiz = () => {
    setShowQuiz(true);
    setScore(0);
    setCurrentQuestion(0);
    setQuizCompleted(false);
  };

  const handleAnswer = () => {
    if (selectedAnswer === course.questions[currentQuestion].correctAnswer) {
      setScore(score + 10);
    }

    if (currentQuestion < 14) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
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
    setSelectedAnswer(null);
  };

  if (!course) return null;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">{course.title}</h1>
      <p className="mb-4">Level: {course.level}</p>
      <p className="mb-6">{course.content}</p>
      
      {!showQuiz && !quizCompleted && (
        <Button onClick={handleStartQuiz}>Start Quiz</Button>
      )}

      {showQuiz && !quizCompleted && (
        <div>
          <h2 className="text-xl font-semibold mb-4">Question {currentQuestion + 1}</h2>
          <p className="mb-4">{course.questions[currentQuestion].question}</p>
          {course.questions[currentQuestion].options.map((option, index) => (
            <Button
              key={index}
              onClick={() => setSelectedAnswer(index)}
              className={`mr-2 mb-2 ${selectedAnswer === index ? 'bg-blue-500' : ''}`}
            >
              {option}
            </Button>
          ))}
          <Button
            onClick={handleAnswer}
            disabled={selectedAnswer === null}
            className="mt-4"
          >
            Submit Answer
          </Button>
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

      <div className="mt-8 flex justify-between">
        <Button onClick={() => navigate('/courses')}>Back to Courses</Button>
        <Button onClick={() => navigate(`/course/${parseInt(id) - 1}`)}>Previous Course</Button>
        <Button onClick={() => navigate(`/course/${parseInt(id) + 1}`)}>Next Course</Button>
      </div>
    </div>
  );
};

export default CourseDetails;