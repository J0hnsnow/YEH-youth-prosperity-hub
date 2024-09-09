import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { toast } from "sonner";

const GovernanceProposal = ({ proposal, onVote }) => {
  return (
    <Card className="mb-4">
      <CardHeader>
        <CardTitle>{proposal.title}</CardTitle>
        <CardDescription>Votes: {proposal.votes}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{proposal.description}</p>
      </CardContent>
      <CardFooter>
        <Button onClick={() => onVote(proposal.id)}>Vote</Button>
      </CardFooter>
    </Card>
  );
};

const CommunityGovernance = () => {
  const navigate = useNavigate();
  const [proposals, setProposals] = useState([
    { id: 1, title: "Increase Micro-Credit Limit", description: "Proposal to increase the micro-credit limit from 500 ADA to 1000 ADA", votes: 0 },
    { id: 2, title: "Add New Sustainability Project", description: "Introduce a new project for community solar panel installation", votes: 0 },
    { id: 3, title: "Expand Healthcare Coverage", description: "Expand healthcare insurance to include dental services", votes: 0 },
  ]);
  const [newProposal, setNewProposal] = useState({ title: '', description: '' });

  const handleVote = (id) => {
    setProposals(proposals.map(p => p.id === id ? { ...p, votes: p.votes + 1 } : p));
    toast.success("Vote cast successfully!");
  };

  const handleSubmitProposal = (e) => {
    e.preventDefault();
    if (newProposal.title && newProposal.description) {
      setProposals([...proposals, { ...newProposal, id: proposals.length + 1, votes: 0 }]);
      setNewProposal({ title: '', description: '' });
      toast.success("New proposal submitted successfully!");
    } else {
      toast.error("Please fill in all fields for the new proposal.");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6">Community Governance</h2>
      <div className="space-y-4 mb-8">
        {proposals.map((proposal) => (
          <GovernanceProposal key={proposal.id} proposal={proposal} onVote={handleVote} />
        ))}
      </div>
      <div className="bg-white shadow-md rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-4">Submit a New Proposal</h3>
        <form onSubmit={handleSubmitProposal} className="space-y-4">
          <div>
            <Label htmlFor="proposalTitle">Proposal Title</Label>
            <Input
              id="proposalTitle"
              value={newProposal.title}
              onChange={(e) => setNewProposal({ ...newProposal, title: e.target.value })}
              placeholder="Enter proposal title"
            />
          </div>
          <div>
            <Label htmlFor="proposalDescription">Proposal Description</Label>
            <Textarea
              id="proposalDescription"
              value={newProposal.description}
              onChange={(e) => setNewProposal({ ...newProposal, description: e.target.value })}
              placeholder="Describe your proposal"
              rows={4}
            />
          </div>
          <Button type="submit">Submit Proposal</Button>
        </form>
      </div>
      <Button variant="outline" className="mt-8" onClick={() => navigate('/')}>Back to Home</Button>
    </div>
  );
};

export default CommunityGovernance;