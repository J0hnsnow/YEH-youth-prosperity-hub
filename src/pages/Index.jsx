import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { useNavigate } from 'react-router-dom';
import MicroCreditSystem from '../components/MicroCreditSystem';
import FinancialEducation from '../components/FinancialEducation';
import HealthcareInsurance from '../components/HealthcareInsurance';
import SustainabilityRewards from '../components/SustainabilityRewards';
import DataPrivacyTools from '../components/DataPrivacyTools';
import CommunityGovernance from '../components/CommunityGovernance';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-green-100 p-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-800 mb-4">Youth Empowerment Hub (YEH)</h1>
        <p className="text-xl text-gray-600">Blockchain for Prosperity in Africa</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Micro-Credit System</CardTitle>
            <CardDescription>Access small loans and build your credit score</CardDescription>
          </CardHeader>
          <CardContent>
            <MicroCreditSystem />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Financial Education</CardTitle>
            <CardDescription>Learn and earn certificates</CardDescription>
          </CardHeader>
          <CardContent>
            <FinancialEducation />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Healthcare Insurance</CardTitle>
            <CardDescription>Community-based micro-insurance</CardDescription>
          </CardHeader>
          <CardContent>
            <HealthcareInsurance />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Sustainability Rewards</CardTitle>
            <CardDescription>Contribute and earn rewards</CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={() => navigate('/sustainability-rewards')}>View Projects</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Data Privacy Tools</CardTitle>
            <CardDescription>Control your personal information</CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={() => navigate('/data-privacy-tools')}>Manage Data Privacy</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Community Governance</CardTitle>
            <CardDescription>Participate in decision-making</CardDescription>
          </CardHeader>
          <CardContent>
            <CommunityGovernance />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;