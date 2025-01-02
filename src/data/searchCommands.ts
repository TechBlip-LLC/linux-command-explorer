import { LinuxCommand } from './commands';

export const searchCommands: LinuxCommand[] = [
  {
    name: "find",
    description: "Search for files in directory hierarchy",
    examples: [
      { description: "Find by name", command: "find . -name '*.txt'" },
      { description: "Find by type", command: "find . -type f" },
      { description: "Find modified files", command: "find . -mtime -7" },
      { description: "Find by size", command: "find . -size +1M" },
      { description: "Find and delete", command: "find . -name '*.tmp' -delete" },
      { description: "Find empty files", command: "find . -empty" },
      { description: "Find and execute", command: "find . -name '*.jpg' -exec chmod 644 {} \\;" },
      { description: "Find by permission", command: "find . -perm 644" },
      { description: "Find case insensitive", command: "find . -iname '*.TXT'" },
      { description: "Find newer than file", command: "find . -newer reference_file" },
      { description: "Find by owner", command: "find . -user username" },
      { description: "Find by group", command: "find . -group groupname" },
      { description: "Find and print", command: "find . -name '*.conf' -print" },
      { description: "Find multiple patterns", command: "find . -name '*.jpg' -o -name '*.png'" },
      { description: "Find max depth", command: "find . -maxdepth 2 -name '*.txt'" }
    ]
  },
  {
    name: "locate",
    description: "Find files by name",
    examples: [
      { description: "Basic search", command: "locate filename" },
      { description: "Case insensitive", command: "locate -i filename" },
      { description: "Show existing files only", command: "locate -e filename" },
      { description: "Count matches", command: "locate -c filename" },
      { description: "Limit results", command: "locate -n 10 filename" },
      { description: "Show statistics", command: "locate -S" },
      { description: "Regular expression", command: "locate -r 'pattern'" },
      { description: "Base name only", command: "locate -b filename" },
      { description: "Update database", command: "sudo updatedb" },
      { description: "Show version", command: "locate --version" },
      { description: "Ignore case", command: "locate --ignore-case filename" },
      { description: "Follow symlinks", command: "locate -L filename" },
      { description: "Quiet mode", command: "locate -q filename" },
      { description: "Show all matches", command: "locate -A filename" },
      { description: "Wholename pattern", command: "locate -w filename" }
    ]
  }
];