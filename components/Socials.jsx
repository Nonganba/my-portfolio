import Link from "next/link";

import {
  FaGithub,
  FaLinkedinIn,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/Nonganba" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/nonganba-th-171365191/" },
  { icon: <FaFacebook />, path: "" },
  { icon: <FaInstagram />, path: "" },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <a key={index} href={item.path} className={iconStyles} target="_blank" rel="noopener noreferrer">
            {item.icon}
          </a>
        );
      })}
    </div>
  );
};

export default Socials;
