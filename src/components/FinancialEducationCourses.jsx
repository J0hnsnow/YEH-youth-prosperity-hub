import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const courses = [
  { id: 1, title: "Introduction to Blockchain", level: "Beginner" },
  { id: 2, title: "Cryptocurrency Basics", level: "Beginner" },
  { id: 3, title: "Understanding Smart Contracts", level: "Intermediate" },
  { id: 4, title: "Decentralized Finance (DeFi) Fundamentals", level: "Intermediate" },
  { id: 5, title: "Non-Fungible Tokens (NFTs) Explained", level: "Beginner" },
  { id: 6, title: "Blockchain Scalability Solutions", level: "Advanced" },
  { id: 7, title: "Cryptographic Principles in Blockchain", level: "Intermediate" },
  { id: 8, title: "Consensus Mechanisms Deep Dive", level: "Advanced" },
  { id: 9, title: "Tokenomics and Crypto Economics", level: "Intermediate" },
  { id: 10, title: "Blockchain Governance Models", level: "Advanced" },
  { id: 11, title: "Web3 Development Introduction", level: "Intermediate" },
  { id: 12, title: "Decentralized Applications (dApps) Architecture", level: "Advanced" },
  { id: 13, title: "Interoperability in Blockchain Networks", level: "Advanced" },
  { id: 14, title: "Privacy and Security in Blockchain", level: "Intermediate" },
  { id: 15, title: "Blockchain in Supply Chain Management", level: "Intermediate" },
  { id: 16, title: "Digital Identity on the Blockchain", level: "Intermediate" },
  { id: 17, title: "Blockchain for Social Impact", level: "Beginner" },
  { id: 18, title: "Crypto Trading Strategies", level: "Intermediate" },
  { id: 19, title: "Decentralized Autonomous Organizations (DAOs)", level: "Advanced" },
  { id: 20, title: "Layer 2 Scaling Solutions", level: "Advanced" },
  { id: 21, title: "Blockchain in Healthcare", level: "Intermediate" },
  { id: 22, title: "Smart Contract Auditing", level: "Advanced" },
  { id: 23, title: "Blockchain for Voting Systems", level: "Intermediate" },
  { id: 24, title: "Crypto Wallets and Key Management", level: "Beginner" },
  { id: 25, title: "Decentralized Storage Solutions", level: "Intermediate" },
  { id: 26, title: "Zero-Knowledge Proofs in Blockchain", level: "Advanced" },
  { id: 27, title: "Blockchain Oracles and Data Feeds", level: "Intermediate" },
  { id: 28, title: "Cross-Chain Communication Protocols", level: "Advanced" },
  { id: 29, title: "Blockchain in Gaming and Virtual Worlds", level: "Intermediate" },
  { id: 30, title: "Regulatory Landscape of Cryptocurrencies", level: "Intermediate" },
  { id: 31, title: "Decentralized Exchanges (DEXs) Architecture", level: "Advanced" },
  { id: 32, title: "Blockchain Forensics and Analytics", level: "Advanced" },
  { id: 33, title: "Sustainable Blockchain and Green Crypto", level: "Intermediate" },
  { id: 34, title: "Asset Tokenization on Blockchain", level: "Intermediate" },
  { id: 35, title: "Blockchain in Real Estate", level: "Intermediate" },
  { id: 36, title: "Crypto Portfolio Management", level: "Intermediate" },
  { id: 37, title: "Decentralized Identity Systems", level: "Advanced" },
  { id: 38, title: "Blockchain Interoperability Protocols", level: "Advanced" },
  { id: 39, title: "Smart Contract Design Patterns", level: "Advanced" },
  { id: 40, title: "Blockchain in IoT and Edge Computing", level: "Advanced" },
  { id: 41, title: "Crypto Economic Security Models", level: "Advanced" },
  { id: 42, title: "Decentralized Social Media Platforms", level: "Intermediate" },
  { id: 43, title: "Blockchain Scalability Trilemma", level: "Advanced" },
  { id: 44, title: "Privacy Coins and Anonymous Transactions", level: "Advanced" },
  { id: 45, title: "Blockchain in Energy Markets", level: "Intermediate" },
  { id: 46, title: "Decentralized Insurance Protocols", level: "Advanced" },
  { id: 47, title: "Blockchain in Art and Collectibles", level: "Intermediate" },
  { id: 48, title: "Quantum Computing and Blockchain", level: "Advanced" },
  { id: 49, title: "Blockchain Governance and Voting Mechanisms", level: "Advanced" },
  { id: 50, title: "Future of Web3 and Decentralized Internet", level: "Advanced" },
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
            <p className="text-gray-600 mb-4">Level: {course.level}</p>
            <Button onClick={() => navigate(`/course/${course.id}`)}>Start Course</Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FinancialEducationCourses;