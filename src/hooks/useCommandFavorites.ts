import { useState, useEffect } from 'react';

export const useCommandFavorites = () => {
  const [favorites, setFavorites] = useState<string[]>(() => {
    const saved = localStorage.getItem('commandFavorites');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('commandFavorites', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (commandName: string) => {
    setFavorites(prev =>
      prev.includes(commandName)
        ? prev.filter(name => name !== commandName)
        : [...prev, commandName]
    );
  };

  const isFavorite = (commandName: string) => favorites.includes(commandName);

  return { favorites, toggleFavorite, isFavorite };
};