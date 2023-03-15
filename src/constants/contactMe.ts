import Linkedin from "../assets/icons/contact/linkedin.svg";
import Instagram from "../assets/icons/contact/instagram.svg";
import Github from "../assets/icons/contact/github.svg";
import Gmail from "../assets/icons/contact/gmail.svg";

interface ContactMeIcons {
  name: string;
  element: any;
  value?: string;
  link?: string;
  icon: any;
}

export const contactMeIcons: ContactMeIcons[] = [
  {
    name: "ícone do linkedin",
    element: Linkedin,
    link: "https://www.linkedin.com/in/michael-chierici-1880b3208/",
    icon: Linkedin,
  },
  {
    name: "ícone do Instagram",
    element: Instagram,
    link: "https://www.instagram.com/michaelchierici/",
    icon: Instagram,
  },
  {
    name: "ícone do Github",
    element: Github,
    link: "https://github.com/michaelchierici",
    icon: Github,
  },
  {
    name: "ícone do gmail",
    element: Gmail,
    icon: Gmail,
    value: "michael.chierjr@gmail.com",
  },
];
