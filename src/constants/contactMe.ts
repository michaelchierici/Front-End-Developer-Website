import Linkedin from "../assets/icons/contact/linkedin.svg";
import Instagram from "../assets/icons/contact/instagram.svg";
import Github from "../assets/icons/contact/github.svg";
import Whatsapp from "../assets/icons/contact/whatsapp.svg";

interface ContactMeIcons {
  name: string;
  element: string;
  value?: string;
  link?: string;
  event?: string;
}

export const contactMeIcons: ContactMeIcons[] = [
  {
    name: "ícone do linkedin",
    element: Linkedin,
    link: "https://www.linkedin.com/in/michael-chierici-1880b3208/",
  },
  {
    name: "ícone do Instagram",
    element: Instagram,
    link: "https://www.instagram.com/michaelchierici/",
  },
  {
    name: "ícone do Github",
    element: Github,
    link: "https://github.com/michaelchierici",
  },
  {
    name: "whatsapp",
    element: Whatsapp,
  },
];
