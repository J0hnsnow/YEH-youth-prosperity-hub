import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { toast } from "sonner";

const MicroCreditApplication = () => {
  const navigate = useNavigate();
  const [loanAmount, setLoanAmount] = useState(100);
  const [purpose, setPurpose] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically interact with a smart contract
    // For now, we'll just simulate the process
    toast.success("Application submitted successfully!");
    setTimeout(() => navigate('/'), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-green-100 p-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-8">
        <h2 className="text-2xl font-bold text-center mb-6">Micro-Credit Application</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <Label htmlFor="loanAmount">Loan Amount (ADA)</Label>
            <Slider
              id="loanAmount"
              min={50}
              max={500}
              step={10}
              value={[loanAmount]}
              onValueChange={(value) => setLoanAmount(value[0])}
              className="mb-2"
            />
            <div className="text-center">{loanAmount} ADA</div>
          </div>
          <div className="mb-4">
            <Label htmlFor="purpose">Loan Purpose</Label>
            <Input
              id="purpose"
              value={purpose}
              onChange={(e) => setPurpose(e.target.value)}
              placeholder="e.g., Starting a small business"
              className="mt-1"
            />
          </div>
          <Button type="submit" className="w-full mb-4">Submit Application</Button>
          <Button variant="outline" className="w-full" onClick={() => navigate('/')}>Back to Home</Button>
        </form>
      </div>
    </div>
  );
};

export default MicroCreditApplication;