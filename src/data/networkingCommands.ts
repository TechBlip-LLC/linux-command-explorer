import { LinuxCommand } from './commands';

export const networkingCommands: LinuxCommand[] = [
  {
    name: "netstat",
    description: "Network statistics",
    examples: [
      { description: "List all ports", command: "netstat -a" },
      { description: "Show listening ports", command: "netstat -l" },
      { description: "Show TCP ports", command: "netstat -t" },
      { description: "Show UDP ports", command: "netstat -u" },
      { description: "Show processes", command: "netstat -p" },
      { description: "Don't resolve names", command: "netstat -n" },
      { description: "Show statistics", command: "netstat -s" },
      { description: "Continuous display", command: "netstat -c" },
      { description: "Show routing table", command: "netstat -r" },
      { description: "Show interfaces", command: "netstat -i" },
      { description: "Show kernel routing", command: "netstat -K" },
      { description: "Show masquerade", command: "netstat -M" },
      { description: "Extended info", command: "netstat -e" },
      { description: "Wide output", command: "netstat -W" },
      { description: "Numeric ports", command: "netstat --numeric-ports" }
    ]
  },
  {
    name: "ifconfig",
    description: "Configure network interface",
    examples: [
      { description: "Show all interfaces", command: "ifconfig" },
      { description: "Show specific interface", command: "ifconfig eth0" },
      { description: "Set IP address", command: "ifconfig eth0 192.168.1.1" },
      { description: "Set netmask", command: "ifconfig eth0 netmask 255.255.255.0" },
      { description: "Set broadcast", command: "ifconfig eth0 broadcast 192.168.1.255" },
      { description: "Enable interface", command: "ifconfig eth0 up" },
      { description: "Disable interface", command: "ifconfig eth0 down" },
      { description: "Set promiscuous mode", command: "ifconfig eth0 promisc" },
      { description: "Set MTU", command: "ifconfig eth0 mtu 1500" },
      { description: "Set hardware address", command: "ifconfig eth0 hw ether 00:11:22:33:44:55" },
      { description: "Add IPv6 address", command: "ifconfig eth0 add 2001:db8::1/64" },
      { description: "Delete IPv6 address", command: "ifconfig eth0 del 2001:db8::1/64" },
      { description: "Set point-to-point", command: "ifconfig eth0 pointopoint 192.168.1.2" },
      { description: "Show all interfaces", command: "ifconfig -a" },
      { description: "Short list", command: "ifconfig -s" }
    ]
  }
];