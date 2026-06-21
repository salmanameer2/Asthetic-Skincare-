export interface Service {
  id: string;
  name: string;
  category: string;
  shortDescription: string;
  description: string;
  duration: string;
  price: string;
  benefits: string[];
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  concern: string;
  testimonial: string;
  treatmentRecieved: string;
  rating: number;
}

export interface Doctor {
  id: string;
  name: string;
  title: string;
  role: string;
  bio: string;
  education: string[];
  specialty: string[];
  image: string;
}

export interface ValueItem {
  title: string;
  description: string;
}

export interface BeforeAfterItem {
  id: string;
  title: string;
  concern: string;
  timeline: string;
  beforeImg: string;
  afterImg: string;
}
