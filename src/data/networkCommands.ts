import { LinuxCommand } from './commands';

export const networkCommands: LinuxCommand[] = [
  // ... existing commands ...
  {
    name: "nc",
    description: "Netcat - networking utility for reading/writing network connections",
    examples: [
      { description: "Listen on port", command: "nc -l 8080" },
      { description: "Connect to port", command: "nc hostname 8080" },
      { description: "Port scanning", command: "nc -zv hostname 20-30" },
      { description: "Transfer file", command: "nc -l 8080 > file.txt" },
      { description: "Chat server", command: "nc -l 8080" },
      { description: "Banner grabbing", command: "nc -v hostname 80" }
    ]
  },
  {
    name: "nmap",
    description: "Network exploration and security scanning",
    examples: [
      { description: "Scan single host", command: "nmap hostname" },
      { description: "Scan network range", command: "nmap 192.168.1.0/24" },
      { description: "Fast scan", command: "nmap -F hostname" },
      { description: "Service version", command: "nmap -sV hostname" },
      { description: "OS detection", command: "nmap -O hostname" },
      { description: "Aggressive scan", command: "nmap -A hostname" }
    ]
  }
];