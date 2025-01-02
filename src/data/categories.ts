import { CommandCategory } from '../types';
import { fileCommands } from './fileCommands';
import { systemCommands } from './systemCommands';
import { textCommands } from './textCommands';
import { processCommands } from './processCommands';
import { networkCommands } from './networkCommands';
import { permissionCommands } from './permissionCommands';
import { archiveCommands } from './archiveCommands';
import { searchCommands } from './searchCommands';
import { monitoringCommands } from './monitoringCommands';
import { userCommands } from './userCommands';
import { systemInfoCommands } from './systemInfoCommands';
import { networkingCommands } from './networkingCommands';
import { diskCommands } from './diskCommands';
import { packageCommands } from './packageCommands';
import { securityCommands } from './securityCommands';
import { processManagementCommands } from './processManagementCommands';
import { systemAdminCommands } from './systemAdminCommands';
import { shellCommands } from './shellCommands';
import { processControlCommands } from './processControlCommands';
import { timeCommands } from './timeCommands';
import { debugCommands } from './debugCommands';
import { gitCommands } from './gitCommands';
import { dockerCommands } from './dockerCommands';
import { developmentCommands } from './developmentCommands';
import { databaseCommands } from './databaseCommands';
import { webCommands } from './webCommands';

export const commandCategories: CommandCategory[] = [
  {
    name: "File Operations",
    commands: fileCommands
  },
  {
    name: "System Management",
    commands: [...systemCommands, ...systemInfoCommands, ...systemAdminCommands]
  },
  {
    name: "Text Processing",
    commands: textCommands
  },
  {
    name: "Process Management",
    commands: [...processCommands, ...processManagementCommands, ...processControlCommands]
  },
  {
    name: "Network & Connectivity",
    commands: [...networkCommands, ...networkingCommands]
  },
  {
    name: "Security & Permissions",
    commands: [...permissionCommands, ...securityCommands]
  },
  {
    name: "Development Tools",
    commands: [...gitCommands, ...dockerCommands, ...developmentCommands]
  },
  {
    name: "Database Tools",
    commands: databaseCommands
  },
  {
    name: "Web Tools",
    commands: webCommands
  },
  {
    name: "Archives & Compression",
    commands: archiveCommands
  },
  {
    name: "Search & Find",
    commands: searchCommands
  },
  {
    name: "System Monitoring",
    commands: monitoringCommands
  },
  {
    name: "User Management",
    commands: userCommands
  },
  {
    name: "Disk & Storage",
    commands: diskCommands
  },
  {
    name: "Shell & History",
    commands: shellCommands
  },
  {
    name: "Time & Scheduling",
    commands: timeCommands
  },
  {
    name: "Debugging & Tracing",
    commands: debugCommands
  }
];