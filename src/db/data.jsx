import {
  MapPinLineIcon,
  Phone,
  EnvelopeSimpleIcon,
} from "@phosphor-icons/react/dist/ssr";

const services = [
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
    id: 3,
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
  { icon: <Phone />, label: "Tél.", value: "+243 840 000 000" },
  { icon: <EnvelopeSimpleIcon />, label: "Email", value: "Bondeko@test.ucc" },
  {
    icon: <MapPinLineIcon />,
    label: "Adresse",
    value: "3 Av 7e rue/Limete/kinshasa",
  },
];

export { team, contact, services, statistiques, testimonials };
