import Linkedin from "../assets/icons/contact/linkedin.svg";
import Instagram from "../assets/icons/contact/instagram.svg";
import Github from "../assets/icons/contact/github.svg";
import Gmail from "../assets/icons/contact/gmail.svg";
import Modal from "../assets/icons/contact/modal.svg";

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
    name: "ícone do gmail",
    element: Gmail,
    value: "michael.chierjr@gmail.com",
  },
  {
    name: "modal",
    element: Modal,
    event: "modal",
  },
];
