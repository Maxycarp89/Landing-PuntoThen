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

import partner1 from "../assets/images/partners/partner1.png"
import partner3 from "../assets/images/partners/partner3.png"
import partner2 from "../assets/images/partners/partner2.png"
import partner5 from "../assets/images/partners/partner4.png"
import partner4 from "../assets/images/partners/partner4.png"
import partner6 from "../assets/images/partners/partner6.png"

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
    user: "Carolina Gómez",
    company: "Blue Horizon",
    text: "Estoy muy satisfecho con los servicios prestados. El equipo fue receptivo, profesional y obtuvo resultados que superaron mis expectativas.",
  },
  {
    user: "Florencia Strada",
    company: "Blue Horizon",
    image: user2,
    text: "No podría estar más feliz con el resultado de nuestro proyecto. La creatividad y las habilidades de resolución de problemas del equipo fueron fundamentales para hacer realidad nuestra visión.",
  },
  {
    user: "Pablo Sánchez",
    company: "Quantum",
    image: user3,
    text: "Trabajar con esta empresa fue un placer. Su atención al detalle y compromiso con la excelencia son admirables. Se los recomendaría sin dudar a cualquiera que busque un servicio de primer nivel.",
  },
  {
    user: "Carlos Martínez",
    company: "Fusion Dynamics",
    text: "Trabajar con el equipo de Studio DevSoft fue un punto de inflexión para nuestro proyecto. Su atención al detalle y sus soluciones innovadoras nos ayudaron a alcanzar nuestros objetivos más rápido de lo que creíamos posible. ¡Estamos agradecidos por su profesionalismo!",
  },
  {
    user: "Ricardo Vega",
    company: "Isadora",
    image: user5,
    text: "Estoy agradecida por el apoyo constante y la dedicación demostrada por este equipo. ¡Los mejores!",
  },
  {
    user: "Emilia Borchard",
    company: "Synergy",
    image: user6,
    text: "El equipo hizo todo lo posible para garantizar que nuestro proyecto fuera un éxito. Su experiencia y dedicación son incomparables. Espero volver a trabajar con ellos en el futuro.",
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
    image:  partner1,
  },
  {
    title: "Review code without worry",
    image:partner2,

  },
  {
    title: "AI Assistance to reduce time",
    image:partner3,

  },
  {
    title: "Share work in minutes",
  image: partner4,
},
{
  title: "Share work in minutes",
image: partner5,
},
{
  title: "Share work in minutes",
 image: partner6,
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
