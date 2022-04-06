import { ReactChild } from "react";
import styles from "./Paragraph.module.scss";

interface Props {
  children: ReactChild | ReactChild[];
}

const Paragraph = ({ children }: Props) => {
  return <p className={styles.paragraph}>{children}</p>;
};

export default Paragraph;
