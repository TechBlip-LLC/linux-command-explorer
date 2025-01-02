import React from 'react';
import { Terminal, Copy, Check, ExternalLink, BookOpen, Star, Info } from 'lucide-react';
import { LinuxCommand } from '../types';
import { useCommandFavorites } from '../hooks/useCommandFavorites';
import { getManPageUrl } from '../utils/manpageUtils';

interface CommandCardProps {
  command: LinuxCommand;
}

const CommandCard: React.FC<CommandCardProps> = ({ command }) => {
  const [copiedCommand, setCopiedCommand] = React.useState<string | null>(null);
  const { toggleFavorite, isFavorite } = useCommandFavorites();
  const [selectedExample, setSelectedExample] = React.useState<number | null>(null);

  const copyToClipboard = async (text: string) => {
    await navigator.clipboard.writeText(text);
    setCopiedCommand(text);
    setTimeout(() => setCopiedCommand(null), 2000);
  };

  const manPageUrl = getManPageUrl(command.name);

  return (
    <div className="command-card rounded-xl">
      <div className="p-4 sm:p-6 border-b border-white/20 bg-gradient-to-r from-blue-500/5 via-blue-500/10 to-transparent">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg ring-4 ring-blue-500/10 w-fit">
            <Terminal size={24} className="text-white" />
          </div>
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">{command.name}</h2>
              <div className="flex items-center gap-2">
                <a
                  href={manPageUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="command-action-button"
                  title="View man page"
                >
                  <BookOpen size={16} className="transition-transform" />
                </a>
                <button
                  onClick={() => toggleFavorite(command.name)}
                  className={`command-action-button ${
                    isFavorite(command.name) 
                      ? 'text-yellow-500 bg-yellow-50/50' 
                      : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50/50'
                  }`}
                  title={isFavorite(command.name) ? 'Remove from favorites' : 'Add to favorites'}
                >
                  <Star 
                    size={16} 
                    fill={isFavorite(command.name) ? 'currentColor' : 'none'}
                  />
                </button>
              </div>
            </div>
            <p className="text-gray-600 mt-1">
              {command.description}
            </p>
          </div>
        </div>
      </div>

      <div className="p-4 sm:p-6">
        <div className="grid gap-4">
          {command.examples.map((example, index) => (
            <div
              key={index}
              className={`command-example-container rounded-xl p-4 ${
                selectedExample === index ? 'ring-2 ring-blue-500/20' : ''
              }`}
              onClick={() => setSelectedExample(index)}
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-3">
                <div className="flex items-start gap-3 flex-1">
                  <div className="mt-1">
                    <Info size={16} className="text-blue-500/70" />
                  </div>
                  <p className="text-gray-700 font-medium leading-relaxed">
                    {example.description}
                  </p>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    copyToClipboard(example.command);
                  }}
                  className="command-copy-button sm:opacity-0 group-hover:opacity-100"
                  title="Copy command"
                >
                  {copiedCommand === example.command ? (
                    <Check size={16} className="text-green-600" />
                  ) : (
                    <Copy size={16} className="text-gray-400" />
                  )}
                </button>
              </div>
              <div className="font-mono text-sm bg-gradient-to-r from-gray-900 to-gray-800 text-gray-100 rounded-lg p-4 mt-3 shadow-inner overflow-x-auto">
                <div className="flex items-center gap-2 min-w-max">
                  <span className="text-gray-500">$</span>
                  <span className="flex-1">{example.command}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CommandCard;