import { LucideIcon } from 'lucide-react';

export interface Service {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  features: string[];
  image: string;
  icon: LucideIcon;
}

export interface Product {
    id: number;
    title: string;
    description: string;
    fullDescription: string;
    features: string[];
    benefits: string[];
    image: string;
    icon: LucideIcon;
    price: string;
    category: string;
  }