import { ButtonProps } from "../../interfaces/interfaces";
import styles from "./LinkButton.module.scss";

const LinkButton = ({ children, href, newTab, text }: ButtonProps) => {
  return (
    <a
      href={href ? href : "#"}
      target={newTab ? "_blank" : "_self"}
      className={text ? styles.linkButton : styles.button}
      title={`Enlace a ${children}`}
    >
      {children}
    </a>
  );
};

export default LinkButton;
