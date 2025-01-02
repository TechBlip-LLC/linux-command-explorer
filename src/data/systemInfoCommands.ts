import { LinuxCommand } from './commands';

export const systemInfoCommands: LinuxCommand[] = [
  {
    name: "uname",
    description: "Print system information",
    examples: [
      { description: "Print all info", command: "uname -a" },
      { description: "Print kernel name", command: "uname -s" },
      { description: "Print node name", command: "uname -n" },
      { description: "Print kernel release", command: "uname -r" },
      { description: "Print kernel version", command: "uname -v" },
      { description: "Print machine hardware", command: "uname -m" },
      { description: "Print processor", command: "uname -p" },
      { description: "Print hardware platform", command: "uname -i" },
      { description: "Print operating system", command: "uname -o" },
      { description: "Print kernel version", command: "uname --kernel-version" },
      { description: "Print network node", command: "uname --nodename" },
      { description: "Print kernel release", command: "uname --kernel-release" },
      { description: "Print machine", command: "uname --machine" },
      { description: "Print processor type", command: "uname --processor" },
      { description: "Print help", command: "uname --help" }
    ]
  },
  {
    name: "free",
    description: "Display memory usage",
    examples: [
      { description: "Show memory info", command: "free" },
      { description: "Human readable", command: "free -h" },
      { description: "Show in bytes", command: "free -b" },
      { description: "Show in kilobytes", command: "free -k" },
      { description: "Show in megabytes", command: "free -m" },
      { description: "Show in gigabytes", command: "free -g" },
      { description: "Wide output", command: "free -w" },
      { description: "Show total", command: "free -t" },
      { description: "Continuous display", command: "free -s 1" },
      { description: "Low/High memory", command: "free -l" },
      { description: "Show version", command: "free -V" },
      { description: "Show help", command: "free --help" },
      { description: "Count in units", command: "free --si" },
      { description: "Old style output", command: "free -o" },
      { description: "Repeat display", command: "free -c 5" }
    ]
  }
];