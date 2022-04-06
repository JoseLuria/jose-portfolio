import styles from "./LinkButton.module.scss";
import { ReactChild } from "react"

interface Props {
  children: ReactChild | ReactChild[];
  href?: string;
  newTab?: boolean;
  text?: boolean;
}

const LinkButton = ({ children, href, newTab, text }: Props) => {
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
