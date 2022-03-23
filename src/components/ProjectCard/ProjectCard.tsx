import styles from "./ProjectCard.module.scss";
import { ProductProps } from "../../interfaces/interfaces";
import Title from "../Title/Title";
import Paragraph from "../Paragraph/Paragraph";
import TechnologyItem from "../TechnologyItem/TechnologyItem";
import LinkButton from "../LinkButton/LinkButton";

const ProjectCard = ({
  title,
  children,
  image,
  technologies,
  liveLink,
  githubLink,
}: ProductProps) => {
  return (
    <div className={styles.projectCardContainer}>
      <div className={styles.projectCardImageWrapper}>
        <img
          width={1920}
          height={932}
          className={styles.projectCardImage}
          src={image}
          alt={title}
        />
      </div>
      <div className={styles.projectCardDataContainer}>
        <Title size="h3" medium>
          {title}
        </Title>
        <Paragraph>{children}</Paragraph>
        <div className={styles.projectCardTechnologies}>
          {technologies.map((technology, index) => (
            <TechnologyItem key={index} dark>
              {technology}
            </TechnologyItem>
          ))}
        </div>
        <span className={styles.projectCardButtons}>
          <LinkButton href={liveLink} newTab text>
            Ver Proyecto
          </LinkButton>
          <LinkButton href={githubLink} newTab text>
            Código en github
          </LinkButton>
        </span>
      </div>
    </div>
  );
};

export default ProjectCard;
