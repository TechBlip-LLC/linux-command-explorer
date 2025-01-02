import React from 'react';
import CommandCard from './CommandCard';
import { LinuxCommand } from '../types';

interface CommandDetailsProps {
  command: LinuxCommand;
}

const CommandDetails: React.FC<CommandDetailsProps> = ({ command }) => {
  return (
    <div className="p-6 animate-fadeIn">
      <CommandCard command={command} />
    </div>
  );
};

export default CommandDetails;