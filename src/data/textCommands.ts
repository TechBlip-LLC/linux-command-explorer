import { LinuxCommand } from './commands';

export const textCommands: LinuxCommand[] = [
  {
    name: "cat",
    description: "Concatenate and display files",
    examples: [
      { description: "Display file contents", command: "cat file.txt" },
      { description: "Display multiple files", command: "cat file1.txt file2.txt" },
      { description: "Show line numbers", command: "cat -n file.txt" },
      { description: "Show non-printing characters", command: "cat -v file.txt" },
      { description: "Squeeze blank lines", command: "cat -s file.txt" },
      { description: "Show tabs", command: "cat -T file.txt" },
      { description: "Show line ends", command: "cat -E file.txt" },
      { description: "Show all special chars", command: "cat -A file.txt" },
      { description: "Create file with input", command: "cat > newfile.txt" },
      { description: "Append to file", command: "cat >> file.txt" },
      { description: "Number non-blank lines", command: "cat -b file.txt" },
      { description: "Copy file", command: "cat file1.txt > file2.txt" },
      { description: "Combine files", command: "cat *.txt > combined.txt" },
      { description: "Show file with pager", command: "cat file.txt | less" },
      { description: "Show with line numbers", command: "cat -n file.txt | less" }
    ]
  },
  {
    name: "grep",
    description: "Search text using patterns",
    examples: [
      { description: "Search in file", command: "grep pattern file.txt" },
      { description: "Case insensitive search", command: "grep -i pattern file.txt" },
      { description: "Recursive search", command: "grep -r pattern directory/" },
      { description: "Show line numbers", command: "grep -n pattern file.txt" },
      { description: "Count matches", command: "grep -c pattern file.txt" },
      { description: "Show only matching", command: "grep -o pattern file.txt" },
      { description: "Invert match", command: "grep -v pattern file.txt" },
      { description: "Extended regex", command: "grep -E 'pattern1|pattern2' file.txt" },
      { description: "Whole word match", command: "grep -w word file.txt" },
      { description: "Multiple patterns", command: "grep -e pattern1 -e pattern2 file.txt" },
      { description: "Search compressed files", command: "grep -z pattern file.gz" },
      { description: "Show context", command: "grep -C 2 pattern file.txt" },
      { description: "Quiet mode", command: "grep -q pattern file.txt" },
      { description: "Search binary files", command: "grep -a pattern file.bin" },
      { description: "Show filename only", command: "grep -l pattern *.txt" }
    ]
  }
];