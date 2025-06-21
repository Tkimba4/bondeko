import {
  ClockUserIcon,
  EnvelopeSimpleIcon,
  MapPinLineIcon,
  PhoneIcon,
  UserCheckIcon,
  UsersIcon,
  XCircleIcon,
} from "@phosphor-icons/react/dist/ssr";

const links = [
  {
    name: "home",
    text: "Accueil",
    link: "/",
  },
  {
    name: "about",
    text: "A propos",
    link: "/",
  },
  {
    name: "services",
    text: "Services",
    link: "/",
  },
  {
    name: "reservations",
    text: "Reservations",
    link: "/reservation",
  },
  {
    name: "contact",
    text: "Contact",
    link: "/",
  },
  {
    name: "admin",
    text: "login",
    link: "/admin",
  },
    {
    name: "contact",
    text: "Contact",
    link: "/admin/dashboard",
  },
];

const services = [
  {
    id: 3,
    name: "Médecine générale",
    desc: "Interventions chirurgicales de précision avec des spécialistes qualifiés.",
    icon: "",
  },
  {
    id: 1,
    name: "Gynecologie",
    desc: "Des soins gynécologiques complets pour la santé des femmes.",
    icon: "",
  },

  {
    id: 2,
    name: "Pédiatrie",
    desc: "Soins médicaux spécialisés pour enfants et adolescents.",
    icon: "",
  },
  {
    id: 4,
    name: "Chirurgie",
    desc: "Interventions chirurgicales de précision avec des spécialistes qualifiés.",
    icon: "",
  },
];

const statistiques = [
  {
    id: 1,
    label: "+50",
    desc: "Années d'expérience",
  },
  {
    id: 2,
    label: "+50",
    desc: "Médecins spécialisés",
  },
  {
    id: 3,
    label: "+1M",
    desc: "Patients satisfaits",
  },
  {
    id: 4,
    label: "24h/7",
    desc: "Service d'urgence",
  },
];

const team = [
  {
    name: "Divin Mapelenkwe",
    function: "Docteur Gén.",
    img: "",
  },
  {
    name: "Divin Mapelenkwe",
    function: "Docteur Gén.",
    img: "",
  },
  {
    name: "Divin Mapelenkwe",
    function: "Docteur Gén.",
    img: "",
  },
];

const testimonials = [
  {
    id: 1,
    name: "Voldi Mbu",
    title: "",
    img: "",
    message: `La Clinique Bondeko a changé ma vie. Les médecins sont compétents et le personnel est incroyablement attentionné.`,
  },
  {
    id: 2,
    name: "Jonathan Tshonga",
    title: "",
    img: "",
    message:
      "J’ai toujours eu une excellente expérience ici. La qualité des soins et l’empathie du personnel surpassent mes attentes.",
  },
];
const contact = [
  {
    icon: <PhoneIcon weight="duotone" />,
    label: "Tél.",
    value: "+243 840 000 000",
  },
  {
    icon: <EnvelopeSimpleIcon weight="duotone" />,
    label: "Email",
    value: "Bondeko@test.ucc",
  },
  {
    icon: <MapPinLineIcon weight="duotone" />,
    label: "Adresse",
    value: "3 Av 7e rue/Limete/kinshasa",
  },
];

const dayStats = [
  {
    id: "",
    title: "Total",
    icon: <UsersIcon color="blue" />,
    description: "Total RDV",
  },
  {
    id: "",
    title: "Attente",
    icon: <ClockUserIcon color="orange" />,
    description: "En attente",
  },
  {
    id: "",
    title: "Confirmé(s)",
    icon: <UserCheckIcon color="green" />,
    description: "RDV confirmés",
  },
  {
    id: "",
    title: "Annuler",
    icon: <XCircleIcon color="red" />,
    description: "RDV annulés",
  },
];

export { contact, links, services, statistiques, team, testimonials, dayStats };
