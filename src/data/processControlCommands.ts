import { LinuxCommand } from './commands';

export const processControlCommands: LinuxCommand[] = [
  {
    name: "nohup",
    description: "Run command immune to hangups",
    examples: [/* existing examples */]
  },
  {
    name: "screen",
    description: "Terminal multiplexer",
    examples: [/* existing examples */]
  },
  {
    name: "tmux",
    description: "Terminal multiplexer with advanced features",
    examples: [
      { description: "New session", command: "tmux new -s mysession" },
      { description: "List sessions", command: "tmux ls" },
      { description: "Attach session", command: "tmux attach -t mysession" },
      { description: "Split vertically", command: "tmux split-window -v" },
      { description: "Split horizontally", command: "tmux split-window -h" },
      { description: "New window", command: "tmux new-window" },
      { description: "Kill session", command: "tmux kill-session -t mysession" },
      { description: "Detach", command: "tmux detach" },
      { description: "List windows", command: "tmux list-windows" },
      { description: "Rename session", command: "tmux rename-session -t old new" }
    ]
  },
  {
    name: "bg",
    description: "Send processes to background",
    examples: [
      { description: "Background last job", command: "bg" },
      { description: "Background specific job", command: "bg %1" },
      { description: "List background jobs", command: "jobs" },
      { description: "Background with output", command: "command & > output.log" },
      { description: "Multiple jobs", command: "bg %1 %2" },
      { description: "Background group", command: "bg %+" },
      { description: "Previous job", command: "bg %-" },
      { description: "With priority", command: "nice command &" },
      { description: "Check status", command: "jobs -l" },
      { description: "Kill background job", command: "kill %1" }
    ]
  },
  {
    name: "fg",
    description: "Bring processes to foreground",
    examples: [
      { description: "Foreground last job", command: "fg" },
      { description: "Foreground specific job", command: "fg %1" },
      { description: "List jobs", command: "jobs" },
      { description: "Foreground by name", command: "fg %command" },
      { description: "Multiple jobs", command: "fg %1; fg %2" },
      { description: "Current job", command: "fg %+" },
      { description: "Previous job", command: "fg %-" },
      { description: "With job control", command: "set -m; fg" },
      { description: "Check job status", command: "jobs -l" },
      { description: "Suspend foreground", command: "Ctrl-Z" }
    ]
  }
];