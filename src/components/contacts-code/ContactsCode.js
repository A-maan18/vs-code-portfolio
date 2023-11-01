import React from "react";
import styles from "./ContactsCode.module.css";

const socialsData = [
  {
    social: "website",
    link: "amankumarmaan.me",
    href: "https://a-maan18.github.io/Portfolio/",
  },
  {
    social: "email",
    link: "amankumarmaan18@gmail.com",
    href: "mailto: amankumarmaan18@gmail.com",
  },
  {
    social: "github",
    link: "Aman-Kumar-maan",
    href: "https://github.com/A-maan18",
  },
  {
    social: "linkedin",
    link: "Aman-Kumar-maan",
    href: "https://www.linkedin.com/in/aman-kumar-maan/",
  },
];

const ContactsCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {socialsData.map((socialItem, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{socialItem.social} :{" "}
          <a href={socialItem.href} target="_blank" rel="noreferrer">
            {socialItem.link}
          </a>
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactsCode;
