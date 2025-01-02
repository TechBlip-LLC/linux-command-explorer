import { LinuxCommand } from './commands';

export const monitoringCommands: LinuxCommand[] = [
  // ... existing commands ...
  {
    name: "htop",
    description: "Interactive process viewer",
    examples: [
      { description: "Start htop", command: "htop" },
      { description: "Tree view", command: "htop -t" },
      { description: "Sort by CPU", command: "htop -s CPU%" },
      { description: "Sort by memory", command: "htop -s MEM%" },
      { description: "Show specific user", command: "htop -u username" },
      { description: "No color", command: "htop -C" }
    ]
  },
  {
    name: "iotop",
    description: "Simple top-like I/O monitor",
    examples: [
      { description: "Monitor I/O", command: "iotop" },
      { description: "Only show processes", command: "iotop -o" },
      { description: "Non-interactive mode", command: "iotop -b" },
      { description: "Show specific PID", command: "iotop -p 1234" },
      { description: "Batch mode", command: "iotop -b -n 5" },
      { description: "Accumulated view", command: "iotop -a" }
    ]
  }
];