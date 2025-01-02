import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Terminal, Search } from 'lucide-react';
import { CommandCategory } from '../types';

interface CommandListProps {
  categories: CommandCategory[];
  selectedCommand: string | null;
  onSelectCommand: (commandName: string) => void;
}

const CommandList: React.FC<CommandListProps> = ({
  categories,
  selectedCommand,
  onSelectCommand,
}) => {
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleCategory = (categoryName: string) => {
    setExpandedCategories(prev =>
      prev.includes(categoryName)
        ? prev.filter(name => name !== categoryName)
        : [...prev, categoryName]
    );
  };

  const filteredCategories = categories.map(category => ({
    ...category,
    commands: category.commands.filter(cmd =>
      cmd.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cmd.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.commands.length > 0);

  return (
    <div className="h-full flex flex-col">
      <div className="p-4 border-b border-gray-200 sticky top-0 bg-gray-50 z-10">
        <div className="relative">
          <input
            type="text"
            placeholder="Search commands..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
          />
          <Search size={18} className="absolute left-3 top-2.5 text-gray-400" />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="space-y-2 p-4">
          {filteredCategories.map((category) => (
            <div key={category.name} className="rounded-xl bg-white shadow-sm border border-gray-100">
              <button
                className={`category-button flex items-center gap-2 font-medium ${
                  expandedCategories.includes(category.name) ? 'active' : ''
                }`}
                onClick={() => toggleCategory(category.name)}
              >
                {expandedCategories.includes(category.name) ? (
                  <ChevronDown size={18} className="text-blue-600" />
                ) : (
                  <ChevronRight size={18} className="text-gray-400" />
                )}
                <span className="flex-1 text-left">{category.name}</span>
                <span className="text-xs text-gray-400 px-2 py-1 rounded-full bg-gray-50">
                  {category.commands.length}
                </span>
              </button>
              
              <div className={`command-list-animation overflow-hidden ${
                expandedCategories.includes(category.name) ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-2 py-1">
                  {category.commands.map((command) => (
                    <button
                      key={command.name}
                      className={`command-button flex items-center gap-2 ${
                        selectedCommand === command.name ? 'active' : ''
                      }`}
                      onClick={() => onSelectCommand(command.name)}
                    >
                      <Terminal size={16} className="text-gray-400" />
                      <span className="flex-1 text-left">{command.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommandList;