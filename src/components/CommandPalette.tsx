import React, { useState, useEffect } from 'react';
import { Search, Command } from 'lucide-react';
import { LinuxCommand } from '../types';
import { commandCategories } from '../data/categories';

interface CommandPaletteProps {
  onSelectCommand: (command: string) => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({ onSelectCommand }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);

  const allCommands = commandCategories.flatMap(category => 
    category.commands.map(cmd => ({
      ...cmd,
      category: category.name
    }))
  );

  const filteredCommands = allCommands.filter(cmd =>
    cmd.name.toLowerCase().includes(search.toLowerCase()) ||
    cmd.description.toLowerCase().includes(search.toLowerCase()) ||
    cmd.category.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.metaKey && e.key === 'k') {
        e.preventDefault();
        setIsOpen(true);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    setSelectedIndex(0);
  }, [search]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(i => Math.min(i + 1, filteredCommands.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(i => Math.max(i - 1, 0));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      const selected = filteredCommands[selectedIndex];
      if (selected) {
        onSelectCommand(selected.name);
        setIsOpen(false);
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-start justify-center pt-[20vh] z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl overflow-hidden">
        <div className="p-4 border-b relative">
          <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            className="w-full pl-12 pr-4 py-2 bg-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search commands... (↑↓ to navigate, ↵ to select)"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleKeyDown}
            autoFocus
          />
        </div>
        <div className="max-h-[60vh] overflow-y-auto">
          {filteredCommands.map((command, index) => (
            <button
              key={command.name}
              className={`w-full px-4 py-3 flex items-start gap-3 hover:bg-gray-50 text-left ${
                index === selectedIndex ? 'bg-blue-50' : ''
              }`}
              onClick={() => {
                onSelectCommand(command.name);
                setIsOpen(false);
              }}
            >
              <Command size={18} className="mt-0.5 text-gray-400" />
              <div>
                <div className="font-medium text-gray-900">{command.name}</div>
                <div className="text-sm text-gray-500">{command.description}</div>
                <div className="text-xs text-gray-400 mt-1">{command.category}</div>
              </div>
            </button>
          ))}
          {filteredCommands.length === 0 && (
            <div className="px-4 py-8 text-center text-gray-500">
              No commands found matching "{search}"
            </div>
          )}
        </div>
      </div>
    </div>
  );
};