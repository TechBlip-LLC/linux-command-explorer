import { LinuxCommand } from './commands';

export const diskCommands: LinuxCommand[] = [
  {
    name: "fdisk",
    description: "Manipulate disk partition table",
    examples: [
      { description: "List partitions", command: "fdisk -l" },
      { description: "Open specific disk", command: "fdisk /dev/sda" },
      { description: "Show partition sizes", command: "fdisk -s /dev/sda1" },
      { description: "Show units", command: "fdisk -u /dev/sda" },
      { description: "Show version", command: "fdisk -v" },
      { description: "List all devices", command: "fdisk -l /dev/sd*" },
      { description: "Show sector size", command: "fdisk -b 512 /dev/sda" },
      { description: "Compatible mode", command: "fdisk -c=dos /dev/sda" },
      { description: "Show cylinder units", command: "fdisk -C /dev/sda" },
      { description: "Show heads", command: "fdisk -H 255 /dev/sda" },
      { description: "Show sectors", command: "fdisk -S 63 /dev/sda" },
      { description: "List in raw mode", command: "fdisk -x /dev/sda" },
      { description: "List free space", command: "fdisk -F /dev/sda" },
      { description: "List with size", command: "fdisk -s /dev/sda" },
      { description: "Show help", command: "fdisk -h" }
    ]
  },
  {
    name: "mount",
    description: "Mount a filesystem",
    examples: [
      { description: "Show mounted filesystems", command: "mount" },
      { description: "Mount device", command: "mount /dev/sda1 /mnt" },
      { description: "Mount with type", command: "mount -t ext4 /dev/sda1 /mnt" },
      { description: "Mount read-only", command: "mount -r /dev/sda1 /mnt" },
      { description: "Mount with options", command: "mount -o rw,users /dev/sda1 /mnt" },
      { description: "Bind mount", command: "mount --bind /source /target" },
      { description: "Mount all in fstab", command: "mount -a" },
      { description: "Show filesystem type", command: "mount -v" },
      { description: "Mount with label", command: "mount LABEL=disk /mnt" },
      { description: "Mount with UUID", command: "mount UUID=uuid-string /mnt" },
      { description: "Remount filesystem", command: "mount -o remount /mnt" },
      { description: "Move mount point", command: "mount --move /old /new" },
      { description: "Mount with permissions", command: "mount -o uid=1000,gid=1000 /dev/sda1 /mnt" },
      { description: "Mount with charset", command: "mount -o iocharset=utf8 /dev/sda1 /mnt" },
      { description: "Show help", command: "mount --help" }
    ]
  }
];