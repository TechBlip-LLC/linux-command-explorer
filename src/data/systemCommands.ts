import { LinuxCommand } from './commands';

export const systemCommands: LinuxCommand[] = [
  {
    name: "pushd",
    description: "Push directory onto stack and change to it",
    examples: [
      { description: "Push and change directory", command: "pushd /path/to/directory" },
      { description: "Push home directory", command: "pushd ~" },
      { description: "Swap top two directories", command: "pushd" },
      { description: "Push with quiet mode", command: "pushd -n /path/to/directory" },
      { description: "Push relative path", command: "pushd ../sibling_directory" },
      { description: "Push and show stack", command: "pushd /path && dirs -v" },
      { description: "Push multiple directories", command: "pushd /path1 && pushd /path2" },
      { description: "Push without changing", command: "pushd -n ." },
      { description: "Push parent directory", command: "pushd .." },
      { description: "Push and rotate stack", command: "pushd +1" },
      { description: "Push with numbered stack", command: "pushd -0" },
      { description: "Push with expansion", command: "pushd $HOME/projects" },
      { description: "Push temporary directory", command: "pushd $(mktemp -d)" },
      { description: "Push and verify", command: "pushd /path && pwd" },
      { description: "Push with error handling", command: "pushd /path || echo 'Failed'" }
    ]
  }
  // ... other existing system commands
];