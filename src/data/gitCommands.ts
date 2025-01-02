import { LinuxCommand } from './commands';

export const gitCommands: LinuxCommand[] = [
  {
    name: "git",
    description: "Version control system",
    examples: [
      { description: "Initialize repository", command: "git init" },
      { description: "Clone repository", command: "git clone url" },
      { description: "Add files", command: "git add ." },
      { description: "Commit changes", command: "git commit -m 'message'" },
      { description: "Push changes", command: "git push origin main" },
      { description: "Pull changes", command: "git pull origin main" },
      { description: "Create branch", command: "git checkout -b branch-name" },
      { description: "Switch branch", command: "git checkout branch-name" },
      { description: "Show status", command: "git status" },
      { description: "Show log", command: "git log" },
      { description: "Show differences", command: "git diff" },
      { description: "Merge branch", command: "git merge branch-name" },
      { description: "Stash changes", command: "git stash" },
      { description: "Apply stash", command: "git stash pop" },
      { description: "Reset changes", command: "git reset --hard HEAD" }
    ]
  }
];