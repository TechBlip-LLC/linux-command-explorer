import { LinuxCommand } from './commands';

export const securityCommands: LinuxCommand[] = [
  {
    name: "sudo",
    description: "Execute command as superuser",
    examples: [
      { description: "Run as root", command: "sudo command" },
      { description: "Edit file as root", command: "sudo -e filename" },
      { description: "Switch to root shell", command: "sudo -i" },
      { description: "Run as different user", command: "sudo -u username command" },
      { description: "Preserve environment", command: "sudo -E command" },
      { description: "List allowed commands", command: "sudo -l" },
      { description: "Validate credentials", command: "sudo -v" },
      { description: "Kill command", command: "sudo -k" },
      { description: "Show version", command: "sudo -V" },
      { description: "Edit sudoers", command: "sudo visudo" },
      { description: "Run shell as user", command: "sudo -s -u username" },
      { description: "Show real user", command: "sudo whoami" },
      { description: "Set timeout", command: "sudo -t 300 command" },
      { description: "Non-interactive", command: "sudo -n command" },
      { description: "Show help", command: "sudo -h" }
    ]
  },
  {
    name: "ssh",
    description: "Secure shell client",
    examples: [
      { description: "Connect to host", command: "ssh user@hostname" },
      { description: "Specify port", command: "ssh -p 2222 user@hostname" },
      { description: "Use key file", command: "ssh -i key.pem user@hostname" },
      { description: "Enable X11", command: "ssh -X user@hostname" },
      { description: "Verbose mode", command: "ssh -v user@hostname" },
      { description: "Run command", command: "ssh user@hostname command" },
      { description: "Forward port", command: "ssh -L 8080:localhost:80 user@hostname" },
      { description: "Compress data", command: "ssh -C user@hostname" },
      { description: "Use config", command: "ssh -F config_file hostname" },
      { description: "Quiet mode", command: "ssh -q user@hostname" },
      { description: "Force password", command: "ssh -o PreferredAuthentications=password user@host" },
      { description: "Check host key", command: "ssh-keygen -F hostname" },
      { description: "Agent forwarding", command: "ssh -A user@hostname" },
      { description: "Keep alive", command: "ssh -o ServerAliveInterval=60 user@host" },
      { description: "Show version", command: "ssh -V" }
    ]
  }
];