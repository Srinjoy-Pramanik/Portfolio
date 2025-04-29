export interface Project {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  category: 'Directing' | 'Videography' | 'Editing' | 'Short Film';
  year: number;
  videoUrl?: string;
}

export interface Skill {
  id: number;
  name: string;
  icon: string;
  description: string;
}