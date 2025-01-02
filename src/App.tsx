import React, { useState, useEffect } from 'react';
import { Terminal, Menu, X, Command } from 'lucide-react';
import { commandCategories } from './data/categories';
import Sidebar from './components/Sidebar';
import CommandDetails from './components/CommandDetails';
import { CommandPalette } from './components/CommandPalette';
import { Breadcrumbs } from './components/Breadcrumbs';
import { Footer } from './components/Footer';
import { findCommandCategory } from './utils/breadcrumbUtils';

function App() {
  const [selectedCommand, setSelectedCommand] = useState<string | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);

  // Close sidebar on command selection for mobile
  const handleCommandSelect = (commandName: string | null) => {
    setSelectedCommand(commandName);
    if (window.innerWidth < 1024) {
      setIsSidebarOpen(false);
    }
  };

  // Auto-expand category when command is selected
  useEffect(() => {
    if (selectedCommand) {
      const category = findCommandCategory(commandCategories, selectedCommand);
      if (category && !expandedCategories.includes(category.name)) {
        setExpandedCategories(prev => [...prev, category.name]);
      }
    }
  }, [selectedCommand, expandedCategories]);

  // Show sidebar by default on large screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsSidebarOpen(true);
      } else {
        setIsSidebarOpen(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const currentCommand = commandCategories
    .flatMap(category => category.commands)
    .find(cmd => cmd.name === selectedCommand);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <nav className="nav-container">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="p-2 rounded-lg hover:bg-white/50 lg:hidden"
                aria-label={isSidebarOpen ? 'Close sidebar' : 'Open sidebar'}
              >
                {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
              <div className="flex items-center gap-2">
                <Terminal size={24} className="text-blue-600" />
                <span className="font-semibold text-xl text-gray-900 hidden sm:inline">
                  Linux Command Explorer
                </span>
                <span className="font-semibold text-xl text-gray-900 sm:hidden">
                  Commands
                </span>
              </div>
            </div>
            <button
              onClick={() => document.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', metaKey: true }))}
              className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-500 glass-morphism rounded-lg hover:bg-white/50 transition-all"
              aria-label="Quick search"
            >
              <Command size={16} />
              <span className="hidden sm:inline">Quick Search</span>
              <kbd className="hidden sm:inline px-2 py-1 text-xs bg-white/50 rounded shadow">⌘K</kbd>
            </button>
          </div>
        </div>
      </nav>

      <Breadcrumbs 
        selectedCommand={selectedCommand} 
        onSelectCommand={handleCommandSelect}
      />

      <div className="flex flex-1">
        {/* Overlay for mobile sidebar */}
        {isSidebarOpen && (
          <div 
            className="fixed inset-0 bg-black/20 backdrop-blur-sm lg:hidden z-20"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        <aside className={`
          fixed lg:relative w-80 h-[calc(100vh-8rem)] 
          transform transition-transform duration-300 ease-in-out
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          bg-white/70 backdrop-blur-lg border-r border-white/20
          z-30 lg:z-auto
        `}>
          <Sidebar
            categories={commandCategories}
            selectedCommand={selectedCommand}
            onSelectCommand={handleCommandSelect}
            expandedCategories={expandedCategories}
            setExpandedCategories={setExpandedCategories}
          />
        </aside>

        <main className="flex-1 w-full lg:w-auto min-h-[calc(100vh-8rem)] flex flex-col">
          <div className="flex-1 flex items-center justify-center">
            <div className="max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8">
              {currentCommand ? (
                <CommandDetails command={currentCommand} />
              ) : (
                <div className="flex items-center justify-center p-4">
                  <div className="text-center">
                    <div className="bg-blue-100/50 rounded-full p-4 mx-auto w-fit mb-4">
                      <Terminal size={48} className="text-blue-600" />
                    </div>
                    <h3 className="text-xl font-medium text-gray-700">
                      Select a command to view details
                    </h3>
                    <p className="text-gray-500 mt-2">
                      Choose from the categories on the left or press ⌘K to search
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
          <Footer />
        </main>
      </div>

      <CommandPalette onSelectCommand={handleCommandSelect} />
    </div>
  );
}

export default App;