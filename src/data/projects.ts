import { FaLaravel, FaReact, FaDatabase, FaNodeJs, FaVuejs } from "react-icons/fa";
import type { IconType } from "react-icons";

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  github: string;
  live: string;
  technologies: string[];
  icons: IconType[];
  features: string[];
  highlights: string[];
}

export const projects: Project[] = [
  {
    id: "attendance",
    title: "Attendance for Employees",
    shortDescription: "An employee attendance management system with check-in/check-out tracking, work hour calculations, and admin dashboard for monitoring employee attendance records.",
    fullDescription: "A comprehensive employee attendance management system designed to streamline workforce tracking. The application enables employees to check in and check out digitally, automatically calculates work hours, and provides administrators with a powerful dashboard to monitor attendance records, generate reports, and manage employee schedules efficiently.",
    image: "/Images/projects/attendance.jpg",
    github: "https://github.com/merhawi29/AttendanceforEmployees",
    live: "https://attendancefor-employees-zeta.vercel.app/",
    technologies: ["Next.js", "Node.js", "Express", "TypeScript", "Tailwind CSS", "MySQL", "Prisma"],
    icons: [FaReact, FaNodeJs],
    features: [
      "Digital check-in/check-out system",
      "Automatic work hour calculations",
      "Admin dashboard with attendance overview",
      "Employee schedule management",
      "Attendance reports and analytics",
      "Responsive design for mobile and desktop"
    ],
    highlights: [
      "Full-stack TypeScript with Next.js frontend and Node.js/Express backend",
      "Real-time attendance tracking with JWT authentication",
      "Role-based access control with secure token management",
      "Database-driven with MySQL and Prisma ORM"
    ]
  },
  {
    id: "freetalk",
    title: "FreeTalk - Chat Application",
    shortDescription: "A real-time chat application enabling users to communicate instantly. Features include user authentication, messaging, and a clean modern interface.",
    fullDescription: "FreeTalk is a modern real-time chat application that enables seamless communication between users. Built with React and Node.js, it features instant messaging, user authentication, and a clean intuitive interface. The application uses Socket.io for real-time message delivery and MongoDB for persistent data storage.",
    image: "/Images/projects/freetalk.jpg",
    github: "https://github.com/merhawi29/freetalk",
    live: "https://freetalk1.vercel.app/",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
    icons: [FaReact, FaNodeJs],
    features: [
      "Real-time messaging with Socket.io",
      "User authentication and authorization",
      "Direct messaging between users",
      "Message history and persistence",
      "Online/offline status indicators",
      "Clean and modern user interface"
    ],
    highlights: [
      "WebSocket-based real-time communication",
      "Secure user authentication with JWT",
      "Scalable Node.js backend",
      "MongoDB for flexible data storage"
    ]
  },
  {
    id: "tiptop",
    title: "Tip Top - Payment Platform",
    shortDescription: "A Laravel-based payment and tipping platform with Chapa payment integration, Cloudinary image hosting, and email notifications. Features secure transaction processing and user management.",
    fullDescription: "Tip Top is a comprehensive payment and tipping platform built with Laravel. It integrates with Chapa payment gateway for secure transaction processing, uses Cloudinary for image hosting and management, and includes email notification functionality. The platform provides a seamless experience for users to send tips and payments securely.",
    image: "/Images/projects/tip-top.jpg",
    github: "https://github.com/abrishk26/tip-top",
    live: "#",
    technologies: ["Laravel", "PHP", "MySQL", "Chapa API"],
    icons: [FaLaravel, FaDatabase],
    features: [
      "Chapa payment gateway integration",
      "Secure transaction processing",
      "Cloudinary image hosting",
      "Email notification system",
      "User management and profiles",
      "Transaction history and tracking"
    ],
    highlights: [
      "Secure payment processing with Chapa",
      "Cloud-based image storage with Cloudinary",
      "Automated email notifications",
      "Robust Laravel backend architecture"
    ]
  },
  {
    id: "fremnatos",
    title: "Fremnatos Charity Platform",
    shortDescription: "A comprehensive charity management platform built with Laravel and TypeScript. Features donation management, campaign tracking, and administrative tools for charity organizations.",
    fullDescription: "Fremnatos is a full-featured charity management platform designed to help organizations manage donations, track campaigns, and engage with donors. Built with Laravel and TypeScript, it provides administrative tools for campaign creation, donation tracking, donor management, and comprehensive reporting for charity organizations.",
    image: "/Images/projects/fremnatos-charity.jpg",
    github: "https://github.com/kiflomm/fremnatoscharity",
    live: "#",
    technologies: ["Laravel", "TypeScript", "MySQL", "React"],
    icons: [FaLaravel, FaReact],
    features: [
      "Donation management system",
      "Campaign creation and tracking",
      "Donor management and engagement",
      "Administrative dashboard",
      "Financial reporting and analytics",
      "Responsive donor-facing interface"
    ],
    highlights: [
      "TypeScript for type-safe development",
      "React frontend for smooth user experience",
      "Comprehensive campaign management",
      "Secure donation processing"
    ]
  },
  {
    id: "jobportal",
    title: "Job Portal Web Application",
    shortDescription: "A comprehensive job platform with advanced search, filtering, and application management features. Built with Laravel backend and modern frontend technologies.",
    fullDescription: "A full-featured job portal application that connects job seekers with employers. The platform includes advanced job search and filtering capabilities, application management for both candidates and employers, user authentication, and a modern responsive interface built with Bootstrap.",
    image: "/Images/projects/job-portal.jpg",
    github: "https://github.com/merhawi29/Jobportal",
    live: "#",
    technologies: ["Laravel", "MySQL", "Bootstrap", "JavaScript"],
    icons: [FaLaravel, FaDatabase],
    features: [
      "Advanced job search and filtering",
      "Job application management",
      "Employer and candidate dashboards",
      "Resume upload and management",
      "Job posting and editing",
      "Responsive design with Bootstrap"
    ],
    highlights: [
      "Powerful search with multiple filters",
      "Dual-sided platform for employers and candidates",
      "Secure file upload for resumes",
      "Clean Bootstrap-based UI"
    ]
  },
  {
    id: "wegive",
    title: "WeGive - Online Donation Platform",
    shortDescription: "A secure donation management system with payment integration, donor tracking, and campaign management. Features real-time analytics and reporting.",
    fullDescription: "WeGive is a comprehensive online donation platform that enables organizations to collect and manage donations efficiently. It features Stripe payment integration for secure transactions, donor tracking and management, campaign creation tools, and real-time analytics and reporting dashboards.",
    image: "/Images/projects/wegive.jpg",
    github: "https://github.com/merhawi29/wigive",
    live: "#",
    technologies: ["Laravel", "MySQL", "Stripe API", "Vue.js"],
    icons: [FaLaravel, FaVuejs],
    features: [
      "Stripe payment integration",
      "Donor tracking and management",
      "Campaign creation and management",
      "Real-time analytics dashboard",
      "Donation receipt generation",
      "Responsive Vue.js frontend"
    ],
    highlights: [
      "Secure Stripe payment processing",
      "Real-time donation analytics",
      "Modern Vue.js user interface",
      "Comprehensive donor management"
    ]
  },
  {
    id: "portfolio",
    title: "Portfolio Website",
    shortDescription: "A modern, responsive portfolio website built with React and Tailwind CSS. Features dark mode, smooth animations, and mobile-first design.",
    fullDescription: "A personal portfolio website showcasing projects, skills, and contact information. Built with React, TypeScript, and Tailwind CSS, it features dark mode toggle, smooth scroll animations, responsive mobile-first design, and a contact form powered by EmailJS for direct communication.",
    image: "/Images/projects/portfolio.jpg",
    github: "https://github.com/merhawi29/portfolio",
    live: "#",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    icons: [FaReact, FaDatabase],
    features: [
      "Dark mode toggle",
      "Smooth scroll animations",
      "Mobile-first responsive design",
      "Contact form with EmailJS",
      "Project showcase with details",
      "Fast build with Vite"
    ],
    highlights: [
      "Modern React with TypeScript",
      "Tailwind CSS for rapid styling",
      "Vite for lightning-fast builds",
      "Accessible and SEO-friendly"
    ]
  }
];
