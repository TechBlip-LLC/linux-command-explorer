import { LinuxCommand } from './commands';

export const processManagementCommands: LinuxCommand[] = [
  {
    name: "nice",
    description: "Run command with modified scheduling priority",
    examples: [
      { description: "Run with priority", command: "nice -n 10 command" },
      { description: "Lowest priority", command: "nice -n 19 command" },
      { description: "Highest priority", command: "nice -n -20 command" },
      { description: "Default nice value", command: "nice command" },
      { description: "Show current nice", command: "nice -n 0 command" },
      { description: "Run in background", command: "nice command &" },
      { description: "Multiple commands", command: "nice -n 10 command1 command2" },
      { description: "Show process nice", command: "nice -n 0 ps -l" },
      { description: "Nice shell", command: "nice -n 10 sh -c 'command'" },
      { description: "Adjust running", command: "renice -n 10 -p PID" },
      { description: "Nice process group", command: "nice -n 10 -p PGID" },
      { description: "Show help", command: "nice --help" },
      { description: "Show version", command: "nice --version" },
      { description: "Run script", command: "nice -n 10 ./script.sh" },
      { description: "Run with output", command: "nice -n 10 command > output.txt" }
    ]
  },
  {
    name: "renice",
    description: "Alter priority of running processes",
    examples: [
      { description: "Change process priority", command: "renice -n 10 -p 1234" },
      { description: "Multiple processes", command: "renice -n 10 -p 1234 5678" },
      { description: "Process group", command: "renice -n 10 -g group" },
      { description: "User processes", command: "renice -n 10 -u username" },
      { description: "Absolute priority", command: "renice -n 19 -p 1234" },
      { description: "Increase priority", command: "renice -n -10 -p 1234" },
      { description: "All user processes", command: "renice -n 10 -u $(whoami)" },
      { description: "Show current", command: "renice -n 0 -p 1234" },
      { description: "Multiple users", command: "renice -n 10 -u user1 user2" },
      { description: "Process tree", command: "renice -n 10 $(pgrep -P 1234)" },
      { description: "System process", command: "renice -n -20 -p 1" },
      { description: "Background jobs", command: "renice -n 10 $(jobs -p)" },
      { description: "Show help", command: "renice --help" },
      { description: "Show version", command: "renice --version" },
      { description: "Verbose mode", command: "renice -v -n 10 -p 1234" }
    ]
  }
];