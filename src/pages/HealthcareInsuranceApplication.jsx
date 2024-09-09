import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

const HealthcareInsuranceApplication = () => {
  const navigate = useNavigate();
  const [premium, setPremium] = useState(10);
  const [coverageType, setCoverageType] = useState('basic');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically interact with a smart contract
    // For now, we'll just simulate the process
    toast.success("Healthcare insurance application submitted successfully!");
    setTimeout(() => navigate('/'), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-green-100 p-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-8">
        <h2 className="text-2xl font-bold text-center mb-6">Healthcare Insurance Application</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <Label htmlFor="premium">Monthly Premium (ADA)</Label>
            <Input
              id="premium"
              type="number"
              value={premium}
              onChange={(e) => setPremium(Number(e.target.value))}
              min={5}
              max={50}
              className="mt-1"
            />
          </div>
          <div className="mb-4">
            <Label htmlFor="coverageType">Coverage Type</Label>
            <Select value={coverageType} onValueChange={setCoverageType}>
              <SelectTrigger className="w-full mt-1">
                <SelectValue placeholder="Select coverage type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="basic">Basic (Checkups & Emergency)</SelectItem>
                <SelectItem value="standard">Standard (Basic + Hospitalization)</SelectItem>
                <SelectItem value="comprehensive">Comprehensive (All Services)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button type="submit" className="w-full mb-4">Submit Application</Button>
          <Button variant="outline" className="w-full" onClick={() => navigate('/')}>Back to Home</Button>
        </form>
      </div>
    </div>
  );
};

export default HealthcareInsuranceApplication;