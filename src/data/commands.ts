import { LinuxCommand } from './commands';

export interface CommandExample {
  description: string;
  command: string;
}

export interface LinuxCommand {
  name: string;
  description: string;
  examples: CommandExample[];
}

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

export const linuxCommands: LinuxCommand[] = [
  ...fileCommands,
  ...systemCommands,
  ...textCommands,
  ...processCommands,
  ...networkCommands,
  ...permissionCommands,
  ...archiveCommands,
  ...searchCommands,
  ...monitoringCommands,
  ...userCommands,
  ...systemInfoCommands,
  ...networkingCommands,
  ...diskCommands,
  ...packageCommands,
  ...securityCommands,
  ...processManagementCommands,
  ...systemAdminCommands
];