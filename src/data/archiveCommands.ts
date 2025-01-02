import { LinuxCommand } from './commands';

export const archiveCommands: LinuxCommand[] = [
  {
    name: "tar",
    description: "Archive files",
    examples: [
      { description: "Create archive", command: "tar -cf archive.tar files" },
      { description: "Extract archive", command: "tar -xf archive.tar" },
      { description: "Create compressed archive", command: "tar -czf archive.tar.gz files" },
      { description: "List contents", command: "tar -tvf archive.tar" },
      { description: "Extract specific file", command: "tar -xf archive.tar file.txt" },
      { description: "Append to archive", command: "tar -rf archive.tar file.txt" },
      { description: "Use bzip2 compression", command: "tar -cjf archive.tar.bz2 files" },
      { description: "Extract to directory", command: "tar -xf archive.tar -C /path" },
      { description: "Exclude files", command: "tar -cf archive.tar --exclude='*.txt' files" },
      { description: "Preserve permissions", command: "tar -pxf archive.tar" },
      { description: "Show progress", command: "tar -cf archive.tar -v files" },
      { description: "Create from directory", command: "tar -cf archive.tar directory/" },
      { description: "Use xz compression", command: "tar -cJf archive.tar.xz files" },
      { description: "Keep old files", command: "tar -kxf archive.tar" },
      { description: "Update archive", command: "tar -uf archive.tar file.txt" }
    ]
  },
  {
    name: "zip",
    description: "Package and compress files",
    examples: [
      { description: "Create zip archive", command: "zip archive.zip files" },
      { description: "Extract zip archive", command: "unzip archive.zip" },
      { description: "Add to zip archive", command: "zip -r archive.zip directory/" },
      { description: "Update files in zip", command: "zip -u archive.zip file.txt" },
      { description: "Delete from zip", command: "zip -d archive.zip file.txt" },
      { description: "Test zip archive", command: "unzip -t archive.zip" },
      { description: "List contents", command: "unzip -l archive.zip" },
      { description: "Create encrypted zip", command: "zip -e archive.zip files" },
      { description: "Set compression level", command: "zip -9 archive.zip files" },
      { description: "Exclude files", command: "zip -x '*.txt' archive.zip files" },
      { description: "Extract to directory", command: "unzip archive.zip -d /path" },
      { description: "Quiet mode", command: "zip -q archive.zip files" },
      { description: "Show progress", command: "zip -v archive.zip files" },
      { description: "Store only", command: "zip -0 archive.zip files" },
      { description: "Freshen zip archive", command: "zip -f archive.zip" }
    ]
  }
];