import React from 'react';
import { ChevronRight, Terminal, Home } from 'lucide-react';
import { commandCategories } from '../data/categories';
import { findCommandCategory, findCommand } from '../utils/breadcrumbUtils';

interface BreadcrumbsProps {
  selectedCommand: string | null;
  onSelectCommand: (command: string | null) => void;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ 
  selectedCommand, 
  onSelectCommand 
}) => {
  const category = findCommandCategory(commandCategories, selectedCommand);
  const command = findCommand(commandCategories, selectedCommand);

  return (
    <nav className="nav-container">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 h-12 text-sm">
          <button 
            onClick={() => onSelectCommand(null)}
            className="breadcrumb-item flex items-center text-gray-400 hover:text-gray-600 transition-all p-1.5 rounded-lg hover:bg-white/50"
            title="Home"
          >
            <Home size={16} />
          </button>
          
          <ChevronRight size={16} className="text-gray-300" />
          
          <button
            onClick={() => onSelectCommand(null)}
            className="breadcrumb-item text-gray-600 hover:text-blue-600 transition-all px-2 py-1 rounded-lg hover:bg-white/50"
          >
            Commands
          </button>
          
          {category && (
            <>
              <ChevronRight size={16} className="text-gray-300" />
              <button
                onClick={() => {
                  // Clear command selection but keep category expanded
                  onSelectCommand(null);
                }}
                className="breadcrumb-item text-gray-600 hover:text-blue-600 transition-all px-2 py-1 rounded-lg hover:bg-white/50"
              >
                {category.name}
              </button>
            </>
          )}
          
          {command && (
            <>
              <ChevronRight size={16} className="text-gray-300" />
              <div className="flex items-center gap-2 px-2 py-1 bg-blue-50/50 rounded-lg">
                <Terminal size={16} className="text-blue-500" />
                <span className="font-medium text-gray-900">{command.name}</span>
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};