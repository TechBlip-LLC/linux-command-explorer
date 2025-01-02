// Map of commands to their correct manual sections
const SECTION_OVERRIDES: Record<string, string> = {
  // System calls (section 2)
  'umount': '2',
  
  // Library functions (section 3)
  'printf': '3',
  'scanf': '3',
  
  // Special files (section 4)
  'null': '4',
  'random': '4',
  
  // File formats (section 5)
  'passwd': '5',
  'fstab': '5',
  
  // Games (section 6)
  // Add any game commands here
  
  // Miscellaneous (section 7)
  'regex': '7',
  
  // System administration (section 8)
  'fdisk': '8',
  'ifconfig': '8',
  'mount': '8', // Moved mount to section 8 only
  'useradd': '8',
  'usermod': '8',
  'groupadd': '8',
  'systemctl': '8'
};

// Alternative manual page URLs if man7.org is unavailable
const ALTERNATIVE_URLS: Record<string, string> = {
  'systemctl': 'https://www.freedesktop.org/software/systemd/man/systemctl.html',
  'journalctl': 'https://www.freedesktop.org/software/systemd/man/journalctl.html'
};

export const getManPageUrl = (command: string): string => {
  // Check for alternative URLs first
  if (ALTERNATIVE_URLS[command]) {
    return ALTERNATIVE_URLS[command];
  }

  // Get the correct section, defaulting to section 1
  const section = SECTION_OVERRIDES[command] || '1';
  
  // Build the man7.org URL with the correct section
  return `https://man7.org/linux/man-pages/man${section}/${command}.${section}.html`;
};