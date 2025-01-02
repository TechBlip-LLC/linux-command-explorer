import { LinuxCommand } from './commands';

export const userCommands: LinuxCommand[] = [
  {
    name: "useradd",
    description: "Create a new user",
    examples: [
      { description: "Create basic user", command: "useradd username" },
      { description: "Create with home directory", command: "useradd -m username" },
      { description: "Set shell", command: "useradd -s /bin/bash username" },
      { description: "Set groups", command: "useradd -G group1,group2 username" },
      { description: "Set user ID", command: "useradd -u 1500 username" },
      { description: "Set comment", command: "useradd -c 'Full Name' username" },
      { description: "Set expiry date", command: "useradd -e 2024-12-31 username" },
      { description: "Set password expiry", command: "useradd -f 30 username" },
      { description: "Create system account", command: "useradd -r username" },
      { description: "Set home directory", command: "useradd -d /path/to/home username" },
      { description: "Set primary group", command: "useradd -g groupname username" },
      { description: "No create group", command: "useradd -N username" },
      { description: "Set base directory", command: "useradd -b /base/dir username" },
      { description: "Create with skeleton", command: "useradd -k /etc/skel username" },
      { description: "Set inactive days", command: "useradd -I 30 username" }
    ]
  },
  {
    name: "passwd",
    description: "Change user password",
    examples: [
      { description: "Change own password", command: "passwd" },
      { description: "Change user password", command: "passwd username" },
      { description: "Delete password", command: "passwd -d username" },
      { description: "Lock account", command: "passwd -l username" },
      { description: "Unlock account", command: "passwd -u username" },
      { description: "Set expiry date", command: "passwd -x 90 username" },
      { description: "Show status", command: "passwd -S username" },
      { description: "Force change", command: "passwd -e username" },
      { description: "Set minimum days", command: "passwd -n 7 username" },
      { description: "Set warning days", command: "passwd -w 7 username" },
      { description: "Show all status", command: "passwd -a -S" },
      { description: "Quiet mode", command: "passwd -q username" },
      { description: "Read from stdin", command: "echo 'password' | passwd --stdin username" },
      { description: "Show version", command: "passwd --version" },
      { description: "Show help", command: "passwd --help" }
    ]
  }
];