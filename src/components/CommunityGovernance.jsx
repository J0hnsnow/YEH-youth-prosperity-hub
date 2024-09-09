import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import GovernanceProposal from './GovernanceProposal';

const CommunityGovernance = () => {
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
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Community Governance</h2>
      <div className="space-y-4">
        {proposals.map((proposal) => (
          <GovernanceProposal key={proposal.id} proposal={proposal} onVote={handleVote} />
        ))}
      </div>
      <div className="mt-8">
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
    </div>
  );
};

export default CommunityGovernance;