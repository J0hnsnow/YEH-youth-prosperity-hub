import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";

const DataPrivacyTools = () => {
  const navigate = useNavigate();
  const [dataSharing, setDataSharing] = useState(false);
  const [privacyLevel, setPrivacyLevel] = useState('standard');

  const handleSaveSettings = () => {
    // Here you would typically interact with a smart contract or decentralized storage
    // For now, we'll just simulate the process
    toast.success("Privacy settings updated successfully!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-green-100 p-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-8">
        <h2 className="text-2xl font-bold text-center mb-6">Data Privacy Tools</h2>
        <form onSubmit={(e) => { e.preventDefault(); handleSaveSettings(); }}>
          <div className="mb-4">
            <Label htmlFor="dataSharing" className="flex items-center justify-between">
              Enable Data Sharing
              <Switch
                id="dataSharing"
                checked={dataSharing}
                onCheckedChange={setDataSharing}
              />
            </Label>
          </div>
          <div className="mb-4">
            <Label htmlFor="privacyLevel">Privacy Level</Label>
            <Select value={privacyLevel} onValueChange={setPrivacyLevel}>
              <SelectTrigger className="w-full mt-1">
                <SelectValue placeholder="Select privacy level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="standard">Standard</SelectItem>
                <SelectItem value="enhanced">Enhanced</SelectItem>
                <SelectItem value="maximum">Maximum</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button type="submit" className="w-full mb-4">Save Privacy Settings</Button>
          <Button variant="outline" className="w-full" onClick={() => navigate('/')}>Back to Home</Button>
        </form>
      </div>
    </div>
  );
};

export default DataPrivacyTools;