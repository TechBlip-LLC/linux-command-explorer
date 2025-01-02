import { LinuxCommand } from './commands';

export const fileCommands: LinuxCommand[] = [
  {
    name: "cp",
    description: "Copy files and directories",
    examples: [
      { description: "Copy a file", command: "cp file.txt destination/" },
      { description: "Copy multiple files", command: "cp file1.txt file2.txt destination/" },
      { description: "Copy recursively", command: "cp -r source_dir/ destination/" },
      { description: "Preserve attributes", command: "cp -p file.txt destination/" },
      { description: "Interactive copy", command: "cp -i file.txt destination/" },
      { description: "Force copy", command: "cp -f file.txt destination/" },
      { description: "Copy with backup", command: "cp -b file.txt destination/" },
      { description: "Copy symbolic links", command: "cp -d link destination/" },
      { description: "Copy and update", command: "cp -u file.txt destination/" },
      { description: "Copy with verbose output", command: "cp -v file.txt destination/" },
      { description: "Copy directory contents", command: "cp -a source/. destination/" },
      { description: "Copy while preserving links", command: "cp -P link destination/" },
      { description: "Copy with progress", command: "cp -g file.txt destination/" },
      { description: "Copy without overwriting", command: "cp -n file.txt destination/" },
      { description: "Copy with target directory", command: "cp -t destination/ file.txt" }
    ]
  },
  {
    name: "mv",
    description: "Move or rename files and directories",
    examples: [
      { description: "Move a file", command: "mv file.txt destination/" },
      { description: "Rename a file", command: "mv oldname.txt newname.txt" },
      { description: "Move multiple files", command: "mv file1.txt file2.txt destination/" },
      { description: "Interactive move", command: "mv -i file.txt destination/" },
      { description: "Force move", command: "mv -f file.txt destination/" },
      { description: "Move with backup", command: "mv -b file.txt destination/" },
      { description: "Move with verbose output", command: "mv -v file.txt destination/" },
      { description: "Move without overwriting", command: "mv -n file.txt destination/" },
      { description: "Move only if newer", command: "mv -u file.txt destination/" },
      { description: "Move directory", command: "mv directory/ new_location/" },
      { description: "Move with target directory", command: "mv -t destination/ file.txt" },
      { description: "Move and strip directory", command: "mv directory/* destination/" },
      { description: "Move hidden files", command: "mv .* destination/" },
      { description: "Move with pattern", command: "mv *.txt destination/" },
      { description: "Move with confirmation", command: "mv -iv file.txt destination/" }
    ]
  }
];