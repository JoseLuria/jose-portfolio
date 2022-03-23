import { TechnologyProps } from "../../interfaces/interfaces";
import styles from "./TechnologyItem.module.scss";

const TechnologyItem = ({ children, dark }: TechnologyProps) => {
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
