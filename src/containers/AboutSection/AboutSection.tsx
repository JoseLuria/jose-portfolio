import Title from "../../components/Title/Title";
import Paragraph from "../../components/Paragraph/Paragraph";
import ImageFrame from "../../components/ImageFrame/ImageFrame";
import styles from "./AboutSection.module.scss";
import ProfilePic from "../../assets/profile-pic.png";
import TechnologyItem from "../../components/TechnologyItem/TechnologyItem";
import PageData from "../../data/data.json";
import LinkButton from "../../components/LinkButton/LinkButton";
import Resume from "../../assets/resume-jose.pdf";

const AboutSection = () => {
  const { technologies } = PageData;

  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.aboutInfo}>
        <Title size="h2">Sobre mi</Title>
        <Paragraph>
          Me llamo José Antonio Lúria Felipe y soy un desarrollador web especializado en JavaScript, me gusta resolver problemas y programar, así como también me encuentro constantemente aprendiendo sobre nuevas tecnologías o herramientas. 
        </Paragraph>
        <Paragraph>
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
