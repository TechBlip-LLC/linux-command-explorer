import { LinuxCommand } from './commands';

export const systemAdminCommands: LinuxCommand[] = [
  {
    name: "crontab",
    description: "Schedule periodic tasks",
    examples: [
      { description: "Edit crontab", command: "crontab -e" },
      { description: "List jobs", command: "crontab -l" },
      { description: "Remove crontab", command: "crontab -r" },
      { description: "Edit user crontab", command: "crontab -u username -e" },
      { description: "List user jobs", command: "crontab -u username -l" },
      { description: "Install from file", command: "crontab file" },
      { description: "Show current user", command: "crontab -i" },
      { description: "Backup crontab", command: "crontab -l > backup.txt" },
      { description: "Restore crontab", command: "crontab backup.txt" },
      { description: "Remove with prompt", command: "crontab -i -r" },
      { description: "Show all users", command: "for user in $(cut -f1 -d: /etc/passwd); do echo $user; crontab -u $user -l; done" },
      { description: "Check syntax", command: "crontab -T file" },
      { description: "Show help", command: "crontab -h" },
      { description: "Show version", command: "crontab -V" },
      { description: "Edit with editor", command: "EDITOR=nano crontab -e" }
    ]
  },
  {
    name: "systemctl",
    description: "Control the systemd system and service manager",
    examples: [
      { description: "Start service", command: "systemctl start service" },
      { description: "Stop service", command: "systemctl stop service" },
      { description: "Restart service", command: "systemctl restart service" },
      { description: "Enable service", command: "systemctl enable service" },
      { description: "Disable service", command: "systemctl disable service" },
      { description: "Check status", command: "systemctl status service" },
      { description: "List units", command: "systemctl list-units" },
      { description: "List services", command: "systemctl list-units --type=service" },
      { description: "Show dependencies", command: "systemctl list-dependencies service" },
      { description: "Reload daemon", command: "systemctl daemon-reload" },
      { description: "Show logs", command: "systemctl -l status service" },
      { description: "Mask service", command: "systemctl mask service" },
      { description: "Unmask service", command: "systemctl unmask service" },
      { description: "Show failed", command: "systemctl --failed" },
      { description: "Power off system", command: "systemctl poweroff" }
    ]
  }
];