import { LinuxCommand } from './commands';

export const shellCommands: LinuxCommand[] = [
  {
    name: "alias",
    description: "Create command aliases",
    examples: [/* existing examples */]
  },
  {
    name: "history",
    description: "Command history management",
    examples: [/* existing examples */]
  },
  {
    name: "source",
    description: "Execute commands from a file",
    examples: [
      { description: "Source script", command: "source script.sh" },
      { description: "Source with dot", command: ". ~/.bashrc" },
      { description: "Source with variables", command: "source <(echo 'export VAR=value')" },
      { description: "Source profile", command: "source /etc/profile" },
      { description: "Source with error check", command: "source script.sh || echo 'Failed'" },
      { description: "Source multiple files", command: "source file1.sh file2.sh" },
      { description: "Source with debug", command: "bash -x script.sh" },
      { description: "Source in subshell", command: "(source script.sh)" },
      { description: "Source with environment", command: "env VAR=value source script.sh" },
      { description: "Source and export", command: "source <(export PATH=$PATH:/new/path)" }
    ]
  },
  {
    name: "eval",
    description: "Execute arguments as shell command",
    examples: [
      { description: "Basic eval", command: "eval \"ls -l\"" },
      { description: "With variables", command: "eval \"echo $VAR\"" },
      { description: "Multiple commands", command: "eval \"cd /tmp && ls\"" },
      { description: "With backticks", command: "eval \`echo 'ls -l'\`" },
      { description: "Dynamic command", command: "eval \"$COMMAND\"" },
      { description: "With quotes", command: "eval 'echo \"Hello\"'" },
      { description: "Error handling", command: "eval \"command\" || echo 'Failed'" },
      { description: "With environment", command: "eval \"PATH=$PATH:/new/path\"" },
      { description: "Complex command", command: "eval \"for i in {1..3}; do echo $i; done\"" },
      { description: "With redirection", command: "eval \"echo test > file.txt\"" }
    ]
  },
  {
    name: "set",
    description: "Set/unset shell options and positional parameters",
    examples: [
      { description: "Show variables", command: "set" },
      { description: "Enable error exit", command: "set -e" },
      { description: "Enable debug mode", command: "set -x" },
      { description: "Disable glob", command: "set -f" },
      { description: "Set positional params", command: "set -- arg1 arg2" },
      { description: "Combine options", command: "set -ex" },
      { description: "Disable options", command: "set +x" },
      { description: "Show shell options", command: "set -o" },
      { description: "Enable vi mode", command: "set -o vi" },
      { description: "Enable verbose", command: "set -v" }
    ]
  }
];