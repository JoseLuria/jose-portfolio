import styles from "./ImageFrame.module.scss";

interface Props {
  src: string;
}

const ImageFrame = ({ src }: Props) => {
  return (
    <div className={styles.frameContainer}>
      <img
        className={styles.frameImage}
        width={500}
        height={500}
        src={src}
        alt="Jose Antonio"
      />
      <div className={styles.frame}></div>
    </div>
  );
};

export default ImageFrame;
