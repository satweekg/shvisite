import {
  Building2,
  Mail,
  Users2,
  Calendar,
  FileText,
  MessageSquare,
  Cloud,
  Shield,
  Database,
  Package,
  Users,
  Briefcase,
  GraduationCap,
  ShoppingCart,
  LayoutGrid,
  Leaf,
  Settings,
  LineChart
} from 'lucide-react';
import { Product } from '../Services/types';

export const products: Product[] = [
  {
    id: 1,
    title: "Microsoft Dynamics 365",
    description: "Unified business solution for ERP and CRM needs",
    fullDescription: "Microsoft Dynamics 365 is a comprehensive suite of enterprise-level business applications that seamlessly integrate ERP, CRM, and productivity tools. This cloud-based solution enables organizations to streamline operations, enhance customer relationships, and drive growth through data-driven insights.",
    features: [
      "Sales and Marketing automation",
      "Finance and Operations management",
      "Customer Service tools",
      "Field Service capabilities",
      "AI-powered insights",
      "Real-time analytics dashboard"
    ],
    benefits: [
      "Increased operational efficiency",
      "Enhanced customer engagement",
      "Improved decision making",
      "Seamless integration with Microsoft products",
      "Scalable cloud-based solution"
    ],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80",
    icon: Building2,
    price: "Starting from $70/user/month",
    category: "Business Solutions"
  },
  {
    id: 2,
    title: "Microsoft 365",
    description: "Complete productivity suite for modern workplace",
    fullDescription: "Microsoft 365 delivers a comprehensive suite of productivity tools including Office applications, cloud services, and advanced security features. Perfect for businesses of all sizes, enabling seamless collaboration and remote work capabilities.",
    features: [
      "Office apps (Word, Excel, PowerPoint)",
      "Teams for collaboration",
      "Exchange Online email",
      "SharePoint and OneDrive",
      "Security and compliance tools",
      "Mobile device management"
    ],
    benefits: [
      "Enhanced productivity",
      "Seamless collaboration",
      "Enterprise-grade security",
      "Always up-to-date software",
      "Cross-device compatibility"
    ],
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80",
    icon: LayoutGrid,
    price: "Starting from $6/user/month",
    category: "Productivity"
  },
  {
    id: 3,
    title: "Microsoft Power Platform",
    description: "Low-code development and automation suite",
    fullDescription: "Microsoft Power Platform combines Power BI, Power Apps, Power Automate, and Power Virtual Agents to enable organizations to analyze data, build solutions, automate processes, and create virtual agents with minimal coding required.",
    features: [
      "Power BI analytics",
      "Custom app development",
      "Workflow automation",
      "AI-powered chatbots",
      "Data connectors",
      "Business process flows"
    ],
    benefits: [
      "Rapid solution development",
      "Cost-effective automation",
      "Data-driven insights",
      "Improved business processes",
      "Reduced technical debt"
    ],
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80",
    icon: Settings,
    price: "Starting from $20/user/month",
    category: "Development"
  },
  {
    id: 4,
    title: "Microsoft Sustainability Manager",
    description: "Environmental impact management solution",
    fullDescription: "Microsoft Sustainability Manager helps organizations record, report, and reduce their environmental impact. This comprehensive solution provides tools for tracking emissions, setting sustainability goals, and making data-driven decisions for environmental initiatives.",
    features: [
      "Carbon footprint tracking",
      "Sustainability scorecards",
      "Environmental reporting",
      "Resource optimization",
      "Goal setting and tracking",
      "Compliance management"
    ],
    benefits: [
      "Improved environmental impact",
      "Data-driven sustainability",
      "Regulatory compliance",
      "Cost optimization",
      "Stakeholder transparency"
    ],
    image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&q=80",
    icon: Leaf,
    price: "Starting from $50/user/month",
    category: "Sustainability"
  },
  // Your existing products (7-11) remain here...
  {
    id: 7,
    title: "E-commerce Platform",
    description: "Complete digital marketplace solution",
    fullDescription: "A comprehensive e-commerce platform that facilitates seamless buying and selling of products and services. Features advanced inventory management, secure payment processing, and customer relationship tools to create an optimal shopping experience.",
    features: [
      "Product catalog management",
      "Secure payment gateway integration",
      "Order processing system",
      "Customer account management",
      "Inventory tracking",
      "Analytics and reporting"
    ],
    benefits: [
      "24/7 business operations",
      "Global market reach",
      "Automated order processing",
      "Real-time inventory updates",
      "Enhanced customer experience"
    ],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80",
    icon: ShoppingCart,
    price: "Starting from $29/month",
    category: "E-commerce"
  },
  {
    id: 8,
    title: "Learning Management System",
    description: "Comprehensive educational platform",
    fullDescription: "An advanced Learning Management System designed to create, deliver, and track educational content. Perfect for schools, universities, and corporate training programs with features for course creation, assessment, and progress tracking.",
    features: [
      "Course content management",
      "Interactive learning tools",
      "Assessment and grading system",
      "Progress tracking",
      "Virtual classrooms",
      "Certificate generation"
    ],
    benefits: [
      "Streamlined learning process",
      "Flexible learning options",
      "Automated assessment",
      "Detailed progress reports",
      "Enhanced student engagement"
    ],
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80",
    icon: GraduationCap,
    price: "Starting from $199/month",
    category: "Education"
  },
  {
    id: 9,
    title: "Job Portal Platform",
    description: "Complete recruitment management solution",
    fullDescription: "A comprehensive job portal that connects employers with potential candidates. Features advanced job posting capabilities, resume parsing, applicant tracking, and powerful search functionality to streamline the recruitment process.",
    features: [
      "Advanced job posting",
      "Resume database",
      "Applicant tracking",
      "Company profiles",
      "Job search filters",
      "Application management"
    ],
    benefits: [
      "Streamlined recruitment",
      "Wide talent pool access",
      "Time-saving automation",
      "Enhanced candidate matching",
      "Detailed analytics"
    ],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80",
    icon: Briefcase,
    price: "Starting from $149/month",
    category: "Recruitment"
  },
  {
    id: 10,
    title: "Multi-Store Inventory System",
    description: "Centralized inventory management solution",
    fullDescription: "A sophisticated inventory management system designed for businesses with multiple locations. Provides real-time tracking, automated reordering, and comprehensive reporting across all store locations.",
    features: [
      "Multi-location tracking",
      "Real-time inventory updates",
      "Purchase order management",
      "Stock transfer system",
      "Barcode scanning",
      "Advanced reporting"
    ],
    benefits: [
      "Centralized control",
      "Reduced stockouts",
      "Optimized inventory levels",
      "Improved efficiency",
      "Cost reduction"
    ],
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80",
    icon: Package,
    price: "Starting from $299/month",
    category: "Inventory Management"
  },
  {
    id: 11,
    title: "HRMS Platform",
    description: "Complete HR management solution",
    fullDescription: "A comprehensive Human Resource Management System that streamlines HR processes, from recruitment to retirement. Features modules for employee management, payroll, attendance, and performance evaluation.",
    features: [
      "Employee database management",
      "Payroll processing",
      "Leave management",
      "Performance evaluation",
      "Training management",
      "Document management"
    ],
    benefits: [
      "Streamlined HR processes",
      "Improved employee satisfaction",
      "Reduced paperwork",
      "Better compliance",
      "Data-driven decisions"
    ],
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80",
    icon: Users,
    price: "Starting from $249/month",
    category: "Human Resources"
  }
];