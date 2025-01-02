import { LinuxCommand } from './commands';

export const dockerCommands: LinuxCommand[] = [
  {
    name: "docker",
    description: "Container management system",
    examples: [
      { description: "List containers", command: "docker ps" },
      { description: "List images", command: "docker images" },
      { description: "Pull image", command: "docker pull image-name" },
      { description: "Run container", command: "docker run image-name" },
      { description: "Stop container", command: "docker stop container-id" },
      { description: "Remove container", command: "docker rm container-id" },
      { description: "Remove image", command: "docker rmi image-id" },
      { description: "Build image", command: "docker build -t name ." },
      { description: "Execute command", command: "docker exec -it container-id command" },
      { description: "Show logs", command: "docker logs container-id" },
      { description: "Container stats", command: "docker stats" },
      { description: "Network list", command: "docker network ls" },
      { description: "Volume list", command: "docker volume ls" },
      { description: "System info", command: "docker info" },
      { description: "Clean system", command: "docker system prune" }
    ]
  }
];