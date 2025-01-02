import { LinuxCommand } from './commands';

export const databaseCommands: LinuxCommand[] = [
  {
    name: "mysql",
    description: "MySQL database client",
    examples: [
      { description: "Connect to database", command: "mysql -u user -p database_name" },
      { description: "Execute SQL file", command: "mysql -u user -p database_name < file.sql" },
      { description: "Backup database", command: "mysqldump -u user -p database_name > backup.sql" },
      { description: "Show databases", command: "mysql -u user -p -e 'SHOW DATABASES'" },
      { description: "Import database", command: "mysql -u user -p database_name < import.sql" },
      { description: "Show tables", command: "mysql -u user -p -e 'SHOW TABLES' database_name" }
    ]
  },
  {
    name: "psql",
    description: "PostgreSQL database client",
    examples: [
      { description: "Connect to database", command: "psql -U user -d database_name" },
      { description: "Execute SQL file", command: "psql -U user -d database_name -f file.sql" },
      { description: "Backup database", command: "pg_dump -U user database_name > backup.sql" },
      { description: "List databases", command: "psql -U user -l" },
      { description: "Import database", command: "psql -U user -d database_name < import.sql" },
      { description: "Show tables", command: "psql -U user -d database_name -c '\\dt'" }
    ]
  }
];