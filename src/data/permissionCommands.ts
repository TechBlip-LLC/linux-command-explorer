import { LinuxCommand } from './commands';

export const permissionCommands: LinuxCommand[] = [
  {
    name: "chmod",
    description: "Change file permissions",
    examples: [
      { description: "Give execute permission", command: "chmod +x script.sh" },
      { description: "Set full permissions", command: "chmod 777 file.txt" },
      { description: "Remove write permission", command: "chmod -w file.txt" },
      { description: "Recursive change", command: "chmod -R 755 directory/" },
      { description: "Set user permission", command: "chmod u=rwx file.txt" },
      { description: "Set group permission", command: "chmod g=rx file.txt" },
      { description: "Set others permission", command: "chmod o=r file.txt" },
      { description: "Add sticky bit", command: "chmod +t directory/" },
      { description: "Add SGID", command: "chmod g+s directory/" },
      { description: "Add SUID", command: "chmod u+s file" },
      { description: "Copy permissions", command: "chmod --reference=ref_file target_file" },
      { description: "Preserve root", command: "chmod --preserve-root 644 /path" },
      { description: "Verbose output", command: "chmod -v 644 file.txt" },
      { description: "Change symbolic links", command: "chmod -h 644 symlink" },
      { description: "Set default permissions", command: "chmod 644 `find . -type f`" }
    ]
  },
  {
    name: "chown",
    description: "Change file owner and group",
    examples: [
      { description: "Change owner", command: "chown user file.txt" },
      { description: "Change owner and group", command: "chown user:group file.txt" },
      { description: "Recursive change", command: "chown -R user:group directory/" },
      { description: "Change symbolic links", command: "chown -h user:group symlink" },
      { description: "Reference file", command: "chown --reference=ref_file target_file" },
      { description: "Preserve root", command: "chown --preserve-root user /path" },
      { description: "Verbose output", command: "chown -v user file.txt" },
      { description: "Change only user", command: "chown user: file.txt" },
      { description: "Change only group", command: "chown :group file.txt" },
      { description: "No dereference", command: "chown -P user:group symlink" },
      { description: "Dereference", command: "chown -L user:group symlink" },
      { description: "From file", command: "chown --from=old_user new_user file.txt" },
      { description: "Silent mode", command: "chown -f user file.txt" },
      { description: "Change directory only", command: "chown user:group directory/" },
      { description: "Show version", command: "chown --version" }
    ]
  }
];