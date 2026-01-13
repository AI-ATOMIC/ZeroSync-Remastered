
export interface ServerInfo {
  ip: string;
  playersOnline: number;
  maxPlayers: number;
  status: 'online' | 'offline' | 'maintenance';
}

export interface Rule {
  id: string;
  category: string;
  title: string;
  description: string;
}

export interface StaffMember {
  id: string;
  name: string;
  role: 'Owner' | 'Developer' | 'Head Admin' | 'Admin' | 'Moderator';
  avatar: string;
  discordId: string;
}

export interface StoreItem {
  id: string;
  name: string;
  price: number;
  description: string;
  benefits: string[];
  image: string;
}
