import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useQuery } from '@tanstack/react-query';

const fetchProjects = async () => {
  // Simulating API call
  return [
    { id: 1, name: "Community Recycling Drive", description: "Collect and recycle plastic waste in your local area", target: 1000, current: 750, reward: 50 },
    { id: 2, name: "Solar Panel Installation", description: "Install solar panels in your home or business", target: 500, current: 200, reward: 100 },
    { id: 3, name: "Reforestation Initiative", description: "Plant trees in deforested areas", target: 5000, current: 3000, reward: 75 },
  ];
};

const SustainabilityProject = ({ project }) => {
  const progress = (project.current / project.target) * 100;

  return (
    <Card className="mb-4">
      <CardHeader>
        <CardTitle>{project.name}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Progress value={progress} className="mb-2" />
        <p className="text-sm text-gray-600 mb-2">Progress: {project.current} / {project.target}</p>
        <p className="text-sm text-green-600 mb-4">Reward: {project.reward} tokens</p>
        <Button>Participate</Button>
      </CardContent>
    </Card>
  );
};

const SustainabilityRewards = () => {
  const navigate = useNavigate();
  const { data: projects, isLoading, error } = useQuery({
    queryKey: ['sustainabilityProjects'],
    queryFn: fetchProjects,
  });

  if (isLoading) return <div>Loading projects...</div>;
  if (error) return <div>Error loading projects: {error.message}</div>;

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Sustainability Rewards</h2>
      <p className="mb-4">Participate in sustainability projects and earn rewards.</p>
      {projects.map(project => (
        <SustainabilityProject key={project.id} project={project} />
      ))}
      <Button variant="outline" className="mt-4" onClick={() => navigate('/')}>Back to Home</Button>
    </div>
  );
};

export default SustainabilityRewards;