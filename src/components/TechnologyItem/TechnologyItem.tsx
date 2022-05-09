import styles from "./TechnologyItem.module.scss";

interface Props {
  children: string;
}

const TechnologyItem = ({ children }: Props) => {
  return <div className={styles.technologyItem}>{children}</div>;
};

export default TechnologyItem;
