import { MonitorCheck } from "lucide-react";
import { Brain } from "lucide-react";
import { ShoppingBag } from "lucide-react";
import { TabletSmartphone } from "lucide-react";
import { Wand } from "lucide-react";
import { Globe } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

import IA from "../assets/images/IA.jpg"
import ecommerceSolutions from "../assets/images/desarrollo-web.jpg"
import webDesign from "../assets/images/web-design.jpg"
import SEO from "../assets/images/SEO.jpg"
import webDevelopment from "../assets/images/webDevelopment.jpg"
import mobileApp from "../assets/images/mobile.jpg"

export const navItems = [
  { label: "Features", href: "Features" },
  { label: "Workflow", href: "Workflow" },
  { label: "Pricing", href: "Pricing" },
  { label: "Testimonials", href: "Testimonials" },
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];

export const features = [
  {
    icon: <MonitorCheck />,
    text: "Desarrollo web",
    description:
      "Creamos sitios web impresionantes que reflejan la esencia de tu marca y proporcionan una experiencia de usuario excepcional.",
    image: webDevelopment
  },
  {
    icon: <ShoppingBag />,
    text: "Soluciones de comercio electrónico",
    description:
      "Impulsa tus ventas con una tienda en línea intuitiva y fácil de usar, diseñada para maximizar la conversión y la satisfacción del cliente.",
    image: ecommerceSolutions
  },
  {
    icon: <TabletSmartphone />,
    text: "Desarrollo de aplicaciones móviles",
    description:
      "Desarrollamos aplicaciones innovadoras y multiplataforma que ofrecen una experiencia de usuario fluida y accesible en todos los dispositivos.",
    image: mobileApp
  },
  {
    icon: <Globe />,
    text: "Optimización SEO",
    description:
      "Mejora tu visibilidad en línea y atrae tráfico orgánico con nuestras estrategias de SEO personalizadas y efectivas.",
    image: SEO
  },
  {
    icon: <Wand />,
    text: "Diseño gráfico",
    description:
      "Creamos imágenes y diseños gráficos impactantes que capturan la atención de tu audiencia y comunican eficazmente tu mensaje.",
    image: webDesign
  },
  {
    icon: <Brain />,
    text: "Automatizaciones con IA",
    description:
      "Incorpora la inteligencia artificial en tus procesos para automatizar tareas, mejorar la eficiencia y proporcionar experiencias personalizadas a tus clientes.",
    image: IA
  },
];

export const checklistItems = [
  {
    title: "Code merge made easy",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Review code without worry",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "AI Assistance to reduce time",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Share work in minutes",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
