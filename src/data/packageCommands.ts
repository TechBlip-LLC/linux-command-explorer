import { LinuxCommand } from './commands';

export const packageCommands: LinuxCommand[] = [
  {
    name: "apt",
    description: "Package management for Debian-based systems",
    examples: [
      { description: "Update package list", command: "apt update" },
      { description: "Upgrade packages", command: "apt upgrade" },
      { description: "Install package", command: "apt install package_name" },
      { description: "Remove package", command: "apt remove package_name" },
      { description: "Search packages", command: "apt search keyword" },
      { description: "Show package info", command: "apt show package_name" },
      { description: "List installed packages", command: "apt list --installed" },
      { description: "Clean package cache", command: "apt clean" },
      { description: "Autoremove unused", command: "apt autoremove" },
      { description: "Fix broken packages", command: "apt --fix-broken install" },
      { description: "Download only", command: "apt download package_name" },
      { description: "Simulate install", command: "apt -s install package_name" },
      { description: "Hold package version", command: "apt-mark hold package_name" },
      { description: "List upgradable", command: "apt list --upgradable" },
      { description: "Edit sources", command: "apt edit-sources" }
    ]
  },
  {
    name: "dpkg",
    description: "Debian package manager",
    examples: [
      { description: "Install package", command: "dpkg -i package.deb" },
      { description: "Remove package", command: "dpkg -r package_name" },
      { description: "List packages", command: "dpkg -l" },
      { description: "Package status", command: "dpkg -s package_name" },
      { description: "List package files", command: "dpkg -L package_name" },
      { description: "Find package owner", command: "dpkg -S /path/to/file" },
      { description: "Configure packages", command: "dpkg --configure -a" },
      { description: "Purge package", command: "dpkg -P package_name" },
      { description: "Extract package", command: "dpkg-deb -x package.deb dir/" },
      { description: "Show package info", command: "dpkg -I package.deb" },
      { description: "List contents", command: "dpkg-deb -c package.deb" },
      { description: "Check dependencies", command: "dpkg -C" },
      { description: "Force install", command: "dpkg -i --force-all package.deb" },
      { description: "Audit packages", command: "dpkg --audit" },
      { description: "Clear selections", command: "dpkg --clear-selections" }
    ]
  }
];