import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const projectsData = {
  "1": {
    name: "SUSclothing",
    mainImage: "/images/sustainable-fashion-app.png",
    role: "Solo Product Designer and Developer",
    year: "2025",
    description:
      "SUSClothing is a high-fidelity (hi-fi) wireframe prototype of a sustainable fashion discovery app that designed and developed to address a common challenge in the fashion industry—confusing eco-labels, unclear sustainability claims, and time-consuming research for eco-conscious consumers.",
    what: "As a hi-fi wireframe, the app demonstrates interactive navigation, a cart system, and a favourites page, showcasing how a near fully-developed version could curate verified, eco-friendly clothing from responsible brands. While it is not a fully functional e-commerce platform, it effectively communicates the user journey through visual and interactive prototypes.",
    focus: [
      "Creating a clean and intuitive UI for effortless browsing and discovery",
      "Designing clear product pages that highlight verified sustainability information",
    ],
    tags: ["HI-FI", "PROTOTYPING", "UI/UX", "DESIGN", "FIGMA"],
    features: [
      "Interactive hi-fi wireframe e-commerce webpage for both desktop and mobile",
      "Favourite/Unfavourite button for easy product tracking",
      "Fully functional navigation buttons for smooth browsing",
      "Price calculation system",
      "Responsive design optimized for both mobile and desktop",
    ],
  },
  "2": {
    name: "Portfolio Website",
    mainImage: "/images/portfolio-website.png",
    role: "UI/UX Designer and Developer",
    year: "2024",
    description:
      "A personal portfolio website showcasing my work as a UI/UX and webapp developer. The site demonstrates minimalism and functionality to create impactful digital experiences. Built with modern web technologies and designed with a focus on clean aesthetics and user experience.",
    what: "This portfolio serves as both a design showcase and a functional web application. It features a clean, dark-themed interface with geometric network patterns as the hero background, smooth scrolling navigation, and an organized project showcase. The design emphasizes minimalism while maintaining visual interest through subtle animations and thoughtful typography.",
    focus: [
      "Creating a clean and intuitive portfolio interface that showcases projects effectively",
      "Implementing smooth interactions and animations for a polished user experience",
      "Designing a responsive layout that works seamlessly across all devices",
    ],
    tags: ["UI/UX", "WEB DESIGN", "DEVELOPMENT", "NEXT.JS", "TAILWIND CSS"],
    features: [
      "Dark-themed portfolio with geometric network background",
      "Responsive design optimized for desktop and mobile devices",
      "Smooth scroll navigation and page transitions",
      "Project showcase with detailed case studies",
      "Interactive project cards with hover animations",
      "Contact integration for easy communication",
    ],
  },
}

export const projectsByCategory = {
  Design: [{ id: 1, name: "SUSclothing", image: "/images/sustainable-fashion-app.png" }],
  Development: [{ id: 2, name: "Portfolio Website", image: "/images/portfolio-website.png" }],
}
