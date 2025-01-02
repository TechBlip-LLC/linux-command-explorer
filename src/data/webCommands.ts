import { LinuxCommand } from './commands';

export const webCommands: LinuxCommand[] = [
  {
    name: "curl",
    description: "Transfer data from or to a server",
    examples: [
      { description: "GET request", command: "curl https://api.example.com" },
      { description: "POST request", command: "curl -X POST -d 'data' https://api.example.com" },
      { description: "With headers", command: "curl -H 'Content-Type: application/json' https://api.example.com" },
      { description: "Download file", command: "curl -O https://example.com/file.zip" },
      { description: "Follow redirects", command: "curl -L https://example.com" },
      { description: "Show response headers", command: "curl -I https://example.com" }
    ]
  },
  {
    name: "ab",
    description: "Apache HTTP server benchmarking tool",
    examples: [
      { description: "Basic benchmark", command: "ab -n 1000 -c 10 https://example.com/" },
      { description: "POST benchmark", command: "ab -p data.json -T application/json -n 100 https://api.example.com/" },
      { description: "With keep-alive", command: "ab -k -n 1000 -c 10 https://example.com/" },
      { description: "Custom timeout", command: "ab -t 60 https://example.com/" },
      { description: "Detailed output", command: "ab -v 2 -n 100 -c 10 https://example.com/" },
      { description: "Basic auth", command: "ab -A user:pass -n 100 https://example.com/" }
    ]
  }
];