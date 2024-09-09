import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const courses = [
  {
    id: 1,
    title: "Introduction to Blockchain",
    level: "Beginner",
    content: "This course covers the fundamental concepts of blockchain technology, including its history, how it works, and its potential applications. You'll learn about decentralization, consensus mechanisms, and the basic structure of a blockchain."
  },
  {
    id: 2,
    title: "Cryptocurrency Basics",
    level: "Beginner",
    content: "Explore the world of cryptocurrencies, starting with Bitcoin and Ethereum. Learn about wallets, exchanges, and the basics of buying, selling, and storing digital assets. This course also covers the concept of tokenomics and different types of cryptocurrencies."
  },
  {
    id: 3,
    title: "Understanding Smart Contracts",
    level: "Intermediate",
    content: "Dive into the world of smart contracts, self-executing contracts with the terms of the agreement directly written into code. Learn about their functionality, use cases, and how they're revolutionizing various industries."
  },
  {
    id: 4,
    title: "Decentralized Finance (DeFi) Fundamentals",
    level: "Intermediate",
    content: "Explore the basics of DeFi, including lending and borrowing platforms, decentralized exchanges, and yield farming. Understand how DeFi is disrupting traditional financial systems and creating new opportunities."
  },
  {
    id: 5,
    title: "Non-Fungible Tokens (NFTs) Explained",
    level: "Beginner",
    content: "Learn about NFTs, unique digital assets that represent ownership of specific items. Explore their creation, trading, and various use cases in art, gaming, and beyond."
  },
  // ... (Add the remaining 45 courses with similar detailed content)
];

const FinancialEducationCourses = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Financial Education Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {courses.map((course) => (
          <div key={course.id} className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
            <p className="text-gray-600 mb-2">Level: {course.level}</p>
            <p className="text-gray-700 mb-4">{course.content}</p>
            <Button onClick={() => navigate(`/course/${course.id}`)}>Start Course</Button>
          </div>
        ))}
      </div>
      <div className="mt-8 flex justify-between">
        <Button onClick={() => navigate('/')}>Back to Home</Button>
        <Button onClick={() => navigate('/courses', { state: { page: 'prev' } })}>Previous Page</Button>
        <Button onClick={() => navigate('/courses', { state: { page: 'next' } })}>Next Page</Button>
      </div>
    </div>
  );
};

export default FinancialEducationCourses;