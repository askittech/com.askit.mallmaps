import { User } from './user';

export interface Contact {
  id: number;
  user: User;
  last_seen: string;
}

export interface ConnectedContact extends Contact {
  distance: number;
}
