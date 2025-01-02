import { LinuxCommand } from './commands';

export const debugCommands: LinuxCommand[] = [
  {
    name: "strace",
    description: "Trace system calls and signals",
    examples: [/* existing examples */]
  },
  {
    name: "ltrace",
    description: "Library call tracer",
    examples: [/* existing examples */]
  },
  {
    name: "gdb",
    description: "GNU debugger",
    examples: [
      { description: "Debug program", command: "gdb program" },
      { description: "Attach to process", command: "gdb -p PID" },
      { description: "Set breakpoint", command: "break function_name" },
      { description: "Run program", command: "run" },
      { description: "Show backtrace", command: "bt" },
      { description: "Step into", command: "step" },
      { description: "Next line", command: "next" },
      { description: "Continue execution", command: "continue" },
      { description: "Print variable", command: "print variable" },
      { description: "Quit debugger", command: "quit" }
    ]
  },
  {
    name: "valgrind",
    description: "Memory debugger and profiler",
    examples: [
      { description: "Check memory leaks", command: "valgrind --leak-check=yes program" },
      { description: "Profile program", command: "valgrind --tool=callgrind program" },
      { description: "Check heap usage", command: "valgrind --tool=massif program" },
      { description: "Track origins", command: "valgrind --track-origins=yes program" },
      { description: "Show reachable", command: "valgrind --show-reachable=yes program" },
      { description: "Debug child processes", command: "valgrind --trace-children=yes program" },
      { description: "Generate suppressions", command: "valgrind --gen-suppressions=all program" },
      { description: "With log file", command: "valgrind --log-file=valgrind.log program" },
      { description: "Check file descriptors", command: "valgrind --track-fds=yes program" },
      { description: "Detailed leaks", command: "valgrind --leak-check=full program" }
    ]
  },
  {
    name: "objdump",
    description: "Display information from object files",
    examples: [
      { description: "Show headers", command: "objdump -f executable" },
      { description: "Disassemble", command: "objdump -d executable" },
      { description: "Show sections", command: "objdump -h executable" },
      { description: "Show symbols", command: "objdump -t executable" },
      { description: "Show dynamic symbols", command: "objdump -T executable" },
      { description: "Show relocations", command: "objdump -r executable" },
      { description: "Show source", command: "objdump -S executable" },
      { description: "Show all headers", command: "objdump -x executable" },
      { description: "Intel syntax", command: "objdump -M intel -d executable" },
      { description: "Show private headers", command: "objdump -p executable" }
    ]
  }
];