import { ReactChild } from "react";
import styles from "./Title.module.scss";

interface Props {
  children: ReactChild | ReactChild[];
  size?: string;
  medium?: boolean;
}

const Title = ({ size, children, medium }: Props) => {
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
