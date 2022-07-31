import styles from "./ProjectsSection.module.scss";
import PageData from "../../data/data.json";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import Title from "../../components/Title/Title";
import Paragraph from "../../components/Paragraph/Paragraph";

const ProjectsSection = () => {
  const { projects } = PageData;

  return (
    <section id="projects" className={styles.projectSection}>
      <Title size="h2">Mis Proyectos</Title>
      <Paragraph>Estos son algunos de los proyectos que he realizado</Paragraph>
      {projects.map(
        ({ title, description, image, liveLink, githubLink }, index) => (
          <ProjectCard
            key={index}
            title={title}
            image={image}
            liveLink={liveLink}
            githubLink={githubLink}
          >
            {description}
          </ProjectCard>
        )
      )}
    </section>
  );
};

export default ProjectsSection;
