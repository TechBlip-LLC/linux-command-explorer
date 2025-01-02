import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Terminal, Search, Star, BookOpen, FolderOpen } from 'lucide-react';
import { CommandCategory } from '../types';
import { useCommandFavorites } from '../hooks/useCommandFavorites';

interface SidebarProps {
  categories: CommandCategory[];
  selectedCommand: string | null;
  onSelectCommand: (commandName: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  categories,
  selectedCommand,
  onSelectCommand,
}) => {
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [view, setView] = useState<'categories' | 'favorites'>('categories');
  const { favorites } = useCommandFavorites();

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

  const favoriteCommands = categories
    .flatMap(cat => cat.commands)
    .filter(cmd => favorites.includes(cmd.name));

  return (
    <div className="h-full flex flex-col glass-morphism">
      <div className="p-4 border-b border-white/20 sticky top-0 bg-white/80 backdrop-blur-lg z-10 space-y-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search commands..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input w-full pl-10 pr-4 py-2 rounded-lg"
          />
          <Search size={18} className="absolute left-3 top-2.5 text-gray-400" />
        </div>
        
        <div className="flex rounded-lg p-1 glass-morphism">
          <button
            className={`tab-button flex-1 ${view === 'categories' ? 'active' : ''}`}
            onClick={() => setView('categories')}
          >
            <FolderOpen size={16} />
            Categories
          </button>
          <button
            className={`tab-button flex-1 ${view === 'favorites' ? 'active' : ''}`}
            onClick={() => setView('favorites')}
          >
            <Star size={16} />
            Favorites
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        <div className="space-y-2">
          {view === 'categories' ? (
            filteredCategories.map((category) => (
              <div key={category.name} className="glass-morphism rounded-xl">
                <button
                  className={`category-button ${
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
                  <span className="text-xs px-2 py-1 rounded-full glass-morphism">
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
                        className={`command-button ${
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
            ))
          ) : (
            <div className="glass-morphism rounded-xl">
              <div className="px-2 py-1">
                {favoriteCommands.length > 0 ? (
                  favoriteCommands.map((command) => (
                    <button
                      key={command.name}
                      className={`command-button ${
                        selectedCommand === command.name ? 'active' : ''
                      }`}
                      onClick={() => onSelectCommand(command.name)}
                    >
                      <Star size={16} className="text-yellow-400" />
                      <span className="flex-1 text-left">{command.name}</span>
                    </button>
                  ))
                ) : (
                  <div className="text-center py-12 text-gray-500">
                    <div className="p-4 rounded-full bg-gray-50/50 w-fit mx-auto mb-4">
                      <Star size={32} className="text-gray-400" />
                    </div>
                    <p className="font-medium">No favorite commands yet</p>
                    <p className="text-sm mt-2 text-gray-400">
                      Click the star icon on any command to add it to favorites
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;