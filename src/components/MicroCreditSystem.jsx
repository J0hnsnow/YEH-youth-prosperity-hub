import React from 'react';
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';

const MicroCreditSystem = () => {
  const navigate = useNavigate();

  const handleApply = () => {
    navigate('/apply-micro-credit');
  };

  return (
    <div>
      <p className="mb-4">Build your credit score and access micro-loans.</p>
      <Button onClick={handleApply}>Apply for Micro-Credit</Button>
    </div>
  );
};

export default MicroCreditSystem;