import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const FinancialEducation = () => {
  const navigate = useNavigate();

  return (
    <div>
      <p className="mb-4">Take courses and earn verifiable certificates.</p>
      <Button onClick={() => navigate('/courses')}>View Courses</Button>
    </div>
  );
};

export default FinancialEducation;