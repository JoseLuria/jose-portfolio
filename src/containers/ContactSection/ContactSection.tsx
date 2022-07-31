import styles from "./ContactSection.module.scss";
import Title from "../../components/Title/Title";
import Paragraph from "../../components/Paragraph/Paragraph";
import LinkButton from "../../components/LinkButton/LinkButton";

const ContactSection = () => {
  return (
    <section id="contact" className={styles.contactSectionContainer}>
      <Title size="h2">Contáctame</Title>
      <Paragraph>Puedes contactarme vía email</Paragraph>
      <LinkButton href="mailto:jos02-log18@hotmail.com?subject=Contacto">
        Email
      </LinkButton>
    </section>
  );
};

export default ContactSection;
