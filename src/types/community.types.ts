export interface Community {
  id: string;
  name: string;
  description: string;
  category: string;
  members: number;
  image: string;
  isJoined: boolean;
  featured: boolean;
}