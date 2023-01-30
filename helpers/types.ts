export type EventCategories = {
  id: string;
  title: string;
  description: string;
  image: string;
};

export type AllEvents = {
  id: string;
  title: string;
  city: string;
  description: string;
  image: string;
  emails_registered: string[];
};
