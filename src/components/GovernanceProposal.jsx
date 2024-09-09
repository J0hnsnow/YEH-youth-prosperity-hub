import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";

const GovernanceProposal = ({ proposal, onVote }) => {
  return (
    <Card>
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

export default GovernanceProposal;