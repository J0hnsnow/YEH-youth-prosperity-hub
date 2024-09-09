import React from 'react';
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';

const HealthcareInsurance = () => {
  const navigate = useNavigate();

  const handleApply = () => {
    navigate('/apply-healthcare-insurance');
  };

  return (
    <div>
      <p className="mb-4">Join our community-based micro-insurance pool.</p>
      <Button onClick={handleApply}>Apply for Healthcare Insurance</Button>
    </div>
  );
};

export default HealthcareInsurance;