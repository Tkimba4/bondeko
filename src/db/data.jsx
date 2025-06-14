import {
  MapPinLineIcon,
  Phone,
  EnvelopeSimpleIcon,
} from "@phosphor-icons/react/dist/ssr";

const services = [
  {
    id: 1,
    name: "Gynechologie",
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
const contact = [
  { icon: <Phone />, label: "Tél", value: "+243 840 000 000" },
  { icon: <EnvelopeSimpleIcon />, label: "Email", value: "Bondeko@test.ucc" },
  {
    icon: <MapPinLineIcon />,
    label: "Adress",
    value: "3 Av 7e rue/Limete/kinshasa",
  },
];

export { team, contact };
