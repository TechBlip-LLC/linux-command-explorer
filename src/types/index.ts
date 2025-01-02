export interface CommandExample {
  description: string;
  command: string;
}

export interface LinuxCommand {
  name: string;
  description: string;
  examples: CommandExample[];
}

export interface CommandCategory {
  name: string;
  commands: LinuxCommand[];
}