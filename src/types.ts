export interface CourseModule {
  id: number;
  title: string;
  subtitle: string;
  icon: string;
  duration: string;
  lessons: string[];
}

export interface Review {
  id: number;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  comment: string;
  date: string;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export interface PromptTemplate {
  id: string;
  goal: string;
  niche: string;
  promptText: string;
  description: string;
}
