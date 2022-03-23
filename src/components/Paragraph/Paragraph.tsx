import { ParagraphProps } from "../../interfaces/interfaces";
import styles from "./Paragraph.module.scss";

const Paragraph = ({ children }: ParagraphProps) => {
  return <p className={styles.paragraph}>{children}</p>;
};

export default Paragraph;
