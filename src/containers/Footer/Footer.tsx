import Paragraph from "../../components/Paragraph/Paragraph";
import styles from "./Footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import LinkButton from "../../components/LinkButton/LinkButton";

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.iconsCntainer}>
        <a
          className={styles.linkIcon}
          href="https://www.linkedin.com/in/jose-antonio-luria-felipe-356094210/"
          target="_blank"
          title="Enlace a linkedin"
        >
          <FontAwesomeIcon className={styles.icon} icon={faLinkedin} />
        </a>
        <a
          className={styles.linkIcon}
          href="https://github.com/JoseLuria"
          target="_blank"
          title="Enlace a github"
        >
          <FontAwesomeIcon className={styles.icon} icon={faGithubSquare} />
        </a>
      </div>
      <Paragraph>
        Creado con{" "}
        <FontAwesomeIcon className={styles.iconText} icon={faHeart} /> por Jose
        Antonio Luria Felipe{" "}
      </Paragraph>
      <span className={styles.backToTop}>
        <LinkButton href="#header" text>
          Regresar al inicio
        </LinkButton>
      </span>
    </footer>
  );
};

export default Footer;
