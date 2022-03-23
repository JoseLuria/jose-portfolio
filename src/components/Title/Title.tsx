import { TitleProps } from "../../interfaces/interfaces";
import styles from "./Title.module.scss";

const Title = ({ size, children, medium }: TitleProps) => {
  const finalStyles = `${styles.title} ${medium && styles.titleMedium}`;

  switch (size) {
    case "h1":
      return <h1 className={finalStyles}>{children}</h1>;
    case "h2":
      return <h2 className={finalStyles}>{children}</h2>;
    case "h3":
      return <h3 className={finalStyles}>{children}</h3>;
    default:
      return <h1 className={finalStyles}>{children}</h1>;
  }
};

export default Title;
