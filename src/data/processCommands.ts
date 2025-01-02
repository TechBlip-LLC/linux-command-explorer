import { LinuxCommand } from './commands';

export const processCommands: LinuxCommand[] = [
  {
    name: "ps",
    description: "Report process status",
    examples: [
      { description: "Show all processes", command: "ps aux" },
      { description: "Show process tree", command: "ps -ejH" },
      { description: "Show current user processes", command: "ps -u $(whoami)" },
      { description: "Show process by PID", command: "ps -fp 1234" },
      { description: "Sort by memory usage", command: "ps aux --sort=-%mem" },
      { description: "Sort by CPU usage", command: "ps aux --sort=-%cpu" },
      { description: "Show specific columns", command: "ps -eo pid,ppid,cmd" },
      { description: "Show threads", command: "ps -eLf" },
      { description: "Show security info", command: "ps -eM" },
      { description: "Real-time process view", command: "ps aux --forest" },
      { description: "Show process group", command: "ps -jax" },
      { description: "Show timing info", command: "ps -eo pid,cmd,etime" },
      { description: "Show with headers", command: "ps -H" },
      { description: "Show without headers", command: "ps --no-headers" },
      { description: "Show with custom format", command: "ps -o pid,user,%cpu,command" }
    ]
  },
  {
    name: "kill",
    description: "Terminate processes",
    examples: [
      { description: "Kill by PID", command: "kill 1234" },
      { description: "Force kill", command: "kill -9 1234" },
      { description: "Kill multiple processes", command: "kill 1234 5678" },
      { description: "List signal names", command: "kill -l" },
      { description: "Terminate gracefully", command: "kill -15 1234" },
      { description: "Kill by process name", command: "killall process_name" },
      { description: "Interactive kill", command: "kill -i 1234" },
      { description: "Kill process group", command: "kill -TERM -1234" },
      { description: "Kill with confirmation", command: "killall -i process_name" },
      { description: "Kill older than time", command: "killall -o 1h process_name" },
      { description: "Kill younger than time", command: "killall -y 1h process_name" },
      { description: "Kill with signal name", command: "kill -SIGTERM 1234" },
      { description: "Kill all user processes", command: "killall -u username" },
      { description: "Kill with quiet mode", command: "kill -q 1234" },
      { description: "Kill with verbose mode", command: "killall -v process_name" }
    ]
  }
];