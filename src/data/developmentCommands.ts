import { LinuxCommand } from './commands';

export const developmentCommands: LinuxCommand[] = [
  // ... existing commands ...
  {
    name: "yarn",
    description: "Fast, reliable, and secure package manager",
    examples: [
      { description: "Install dependencies", command: "yarn install" },
      { description: "Add package", command: "yarn add package-name" },
      { description: "Remove package", command: "yarn remove package-name" },
      { description: "Run script", command: "yarn run script-name" },
      { description: "Upgrade packages", command: "yarn upgrade" },
      { description: "Clean cache", command: "yarn cache clean" }
    ]
  },
  {
    name: "python",
    description: "Python interpreter and package management",
    examples: [
      { description: "Run script", command: "python script.py" },
      { description: "Install package", command: "pip install package-name" },
      { description: "Create virtual env", command: "python -m venv env" },
      { description: "Activate virtual env", command: "source env/bin/activate" },
      { description: "Install requirements", command: "pip install -r requirements.txt" },
      { description: "Freeze dependencies", command: "pip freeze > requirements.txt" }
    ]
  }
];