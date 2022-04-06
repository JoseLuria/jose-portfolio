import styles from "./TechnologyItem.module.scss";

interface Props {
  dark?: boolean;
  children: string;
}

const TechnologyItem = ({ children, dark }: Props) => {
  return (
    <div
      className={`${styles.technologyItem} ${
        dark && styles.technologyItemDark
      }`}
    >
      {children}
    </div>
  );
};

export default TechnologyItem;
