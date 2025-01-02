import { LinuxCommand } from './commands';

export const timeCommands: LinuxCommand[] = [
  {
    name: "date",
    description: "Display or set system date and time",
    examples: [
      { description: "Show current date", command: "date" },
      { description: "Set system date", command: "date -s '2024-03-20 15:30:00'" },
      { description: "Show UTC time", command: "date -u" },
      { description: "Custom format", command: "date '+%Y-%m-%d %H:%M:%S'" },
      { description: "Show timestamp", command: "date +%s" },
      { description: "Convert timestamp", command: "date -d @1234567890" },
      { description: "Show calendar date", command: "date '+%A, %B %d, %Y'" },
      { description: "Relative date", command: "date -d 'next Thursday'" },
      { description: "RFC format", command: "date -R" },
      { description: "ISO format", command: "date -I" },
      { description: "Set hardware clock", command: "date --set='2024-03-20 15:30:00'" },
      { description: "Show last month", command: "date -d 'last month'" },
      { description: "Show next week", command: "date -d 'next week'" },
      { description: "Different timezone", command: "TZ='America/New_York' date" },
      { description: "File timestamp", command: "date -r file.txt" }
    ]
  },
  {
    name: "at",
    description: "Schedule commands for later execution",
    examples: [
      { description: "Schedule command", command: "at 5:00 PM" },
      { description: "Schedule for tomorrow", command: "at 10:00 AM tomorrow" },
      { description: "Schedule with date", command: "at 2:00 PM July 25" },
      { description: "List pending jobs", command: "atq" },
      { description: "Remove job", command: "atrm 1" },
      { description: "Schedule from file", command: "at -f script.sh 3:00 PM" },
      { description: "Schedule next week", command: "at 1:00 PM next week" },
      { description: "Show job details", command: "at -c 1" },
      { description: "Schedule with batch", command: "at -b 23:00" },
      { description: "Schedule with now", command: "at now + 1 hour" },
      { description: "Schedule with minutes", command: "at now + 30 minutes" },
      { description: "Schedule with days", command: "at now + 3 days" },
      { description: "Schedule with weeks", command: "at now + 2 weeks" },
      { description: "Schedule with months", command: "at now + 1 month" },
      { description: "Schedule with years", command: "at now + 1 year" }
    ]
  }
];