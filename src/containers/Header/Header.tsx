import styles from "./Header.module.scss";
import Title from "../../components/Title/Title";
import Paragraph from "../../components/Paragraph/Paragraph";
import LinkButton from "../../components/LinkButton/LinkButton";

const Header = () => {
  return (
    <header id="header" className={styles.header}>
      <div className={styles.headerContainer}>
        <Title>
          Bienvenidos,
          <br />
          Mi nombre es José
        </Title>
        <Paragraph>
          Soy, un desarrollador web Frontend
          <br />
          especializado en React
        </Paragraph>
        <div className={styles.headerButtons}>
          <LinkButton
            href="https://www.linkedin.com/in/jose-antonio-luria-felipe-356094210/"
            newTab
          >
            LinkedIn
          </LinkButton>
          <LinkButton href="https://github.com/JoseLuria" newTab>
            GitHub
          </LinkButton>
        </div>
      </div>
    </header>
  );
};

export default Header;
