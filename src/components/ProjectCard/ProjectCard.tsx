import { ReactChild } from "react";
import styles from "./ProjectCard.module.scss";
import Title from "../Title/Title";
import Paragraph from "../Paragraph/Paragraph";
import LinkButton from "../LinkButton/LinkButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faWindowMaximize } from "@fortawesome/free-regular-svg-icons";

interface Props {
  title: string;
  children: ReactChild | ReactChild[];
  image: string;
  liveLink: string;
  githubLink: string;
}

const ProjectCard = ({
  title,
  children,
  image,
  liveLink,
  githubLink,
}: Props) => {
  return (
    <div className={styles.projectCardContainer}>
      <div className={styles.projectCardImageWrapper}>
        <img className={styles.projectCardImage} src={image} alt={title} />
      </div>
      <div className={styles.projectCardDataContainer}>
        <Title size="h3" medium>
          {title}
        </Title>
        <Paragraph>{children}</Paragraph>
        <LinkButton href={liveLink} newTab text>
          <FontAwesomeIcon icon={faWindowMaximize} />
          Ver Proyecto
        </LinkButton>
        <LinkButton href={githubLink} newTab text>
          <FontAwesomeIcon icon={faGithub} />
          Código en github
        </LinkButton>
      </div>
    </div>
  );
};

export default ProjectCard;
