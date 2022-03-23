import Title from "../../components/Title/Title";
import Paragraph from "../../components/Paragraph/Paragraph";
import LinkButton from "../../components/LinkButton/LinkButton";
import ImageFrame from "../../components/ImageFrame/ImageFrame";
import styles from "./AboutSection.module.scss";
import ProfilePic from "../../assets/profile-jose.webp";
import TechnologyItem from "../../components/TechnologyItem/TechnologyItem";
import Resume from "../../assets/resume-jose.pdf";
import PageData from "../../data/data.json";

const AboutSection = () => {
  const { technologies } = PageData;

  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.aboutInfo}>
        <Title size="h2">01. Sobre mi</Title>
        <Paragraph>
          Me llamo Jose Antonio Luria Felipe y soy un apasionado del desarrollo
          web, me encanta pasar el tiempo programando, escuchando música y
          jugando a videojuegos. Actualmente, estudio Desarrollo Web en Academlo
          y complemento mi educación con cursos de Platzi.
          <br />
          <br />
          Algunas de las tecnologías con las que he trabajado son:
        </Paragraph>
        <div className={styles.technologiesContainer}>
          {technologies.map((technology, index) => (
            <TechnologyItem key={index}>{technology}</TechnologyItem>
          ))}
        </div>
        <span>
          <LinkButton href={Resume} newTab>
            Mi Curriculum
          </LinkButton>
        </span>
      </div>
      <ImageFrame src={ProfilePic} />
    </section>
  );
};

export default AboutSection;
