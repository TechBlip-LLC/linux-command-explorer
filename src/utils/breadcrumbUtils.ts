import { CommandCategory } from '../types';

export const findCommandCategory = (
  categories: CommandCategory[],
  commandName: string | null
): CommandCategory | null => {
  if (!commandName) return null;
  return categories.find(cat => 
    cat.commands.some(cmd => cmd.name === commandName)
  ) || null;
};

export const findCommand = (
  categories: CommandCategory[],
  commandName: string | null
) => {
  if (!commandName) return null;
  const category = findCommandCategory(categories, commandName);
  return category?.commands.find(cmd => cmd.name === commandName) || null;
};