import { 
    Code2, Database, Globe2, Smartphone, Cloud, Shield, 
    LineChart, Cpu, MessagesSquare 
  } from 'lucide-react';
  import { Service } from './types';
  
  export const services: Service[] = [
    {
      id: 1,
      title: "Web Development",
      description: "Custom web solutions built with cutting-edge technologies for optimal performance and user experience.",
      fullDescription: "Our web development services deliver sophisticated, scalable, and high-performance solutions tailored to your business needs. We combine modern frameworks with best practices to create websites that not only look stunning but also drive results.",
      features: [
        "Custom website development using React, Angular, or Vue.js",
        "Responsive design for all devices",
        "Performance optimization and SEO-friendly architecture",
        "Progressive Web Apps (PWA) development",
        "E-commerce solutions and payment gateway integration"
      ],
      image: "/web-development.jpg",
      icon: Code2
    },
    {
      id: 2,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
      fullDescription: "Transform your ideas into powerful mobile applications that engage users and drive business growth. Our expert team develops native and cross-platform solutions that combine functionality with stunning design.",
      features: [
        "iOS and Android native app development",
        "Cross-platform development using React Native",
        "UI/UX design and prototyping",
        "App store optimization and deployment",
        "Ongoing maintenance and support"
      ],
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80",
      icon: Smartphone
    },
    {
      id: 3,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and services to modernize your business operations.",
      fullDescription: "Leverage the power of cloud computing to transform your business. We provide comprehensive cloud solutions that enhance scalability, security, and efficiency while reducing operational costs.",
      features: [
        "Cloud migration and infrastructure setup",
        "AWS, Azure, and Google Cloud expertise",
        "Serverless architecture implementation",
        "Cloud security and compliance",
        "24/7 monitoring and maintenance"
      ],
      image: "/cloud-solutions.jpg",
      icon: Cloud
    },
    {
      id: 4,
      title: "Data Analytics",
      description: "Transform your data into actionable insights with our advanced analytics solutions.",
      fullDescription: "Unlock the power of your data with our advanced analytics services. We help you make data-driven decisions by implementing sophisticated analytics solutions that provide meaningful insights.",
      features: [
        "Big data processing and analysis",
        "Business intelligence dashboards",
        "Predictive analytics",
        "Data visualization",
        "Machine learning integration"
      ],
      image: "/data-analytics.jpeg",
      icon: LineChart
    },
    {
      id: 5,
      title: "Cybersecurity",
      description: "Protect your digital assets with our comprehensive security solutions and best practices.",
      fullDescription: "Safeguard your business with our state-of-the-art cybersecurity services. We provide comprehensive security solutions to protect your digital assets from evolving cyber threats.",
      features: [
        "Security audits and vulnerability assessment",
        "Penetration testing",
        "Security monitoring and incident response",
        "Compliance management",
        "Employee security training"
      ],
      image: "/cyber-security.jpg",
      icon: Shield
    },
    {
      id: 6,
      title: "AI & Machine Learning",
      description: "Innovative AI solutions to automate processes and enhance decision-making.",
      fullDescription: "Harness the power of artificial intelligence and machine learning to transform your business operations. We develop custom AI solutions that automate processes and provide intelligent insights.",
      features: [
        "Custom AI model development",
        "Natural Language Processing",
        "Computer Vision solutions",
        "Predictive modeling",
        "AI-powered automation"
      ],
      image: "machine-learning.webp",
      icon: Cpu
    }
  ];