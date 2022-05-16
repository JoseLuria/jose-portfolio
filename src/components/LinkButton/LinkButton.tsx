import styles from "./LinkButton.module.scss";
import { ReactChild } from "react";

interface Props {
  children: ReactChild | ReactChild[];
  href?: string;
  newTab?: boolean;
  text?: boolean;
}

const LinkButton = ({ children, href, newTab, text }: Props) => {
  const handleFormatTitleText = () => {
    const childrenToText = children.toString();
    const childrenToTextArray = childrenToText.split(",");
    const FinalChildrenArray: string[] = [];

    childrenToTextArray.map(
      (childElement) =>
        !childElement.includes("[object Object]") &&
        FinalChildrenArray.push(childElement)
    );

    return FinalChildrenArray.join("");
  };

  const title_button_text = handleFormatTitleText();

  return (
    <a
      href={href ? href : "#"}
      target={newTab ? "_blank" : "_self"}
      className={text ? styles.linkButton : styles.button}
      title={`Enlace a ${title_button_text.toLocaleLowerCase()}`}
    >
      {children}
    </a>
  );
};

export default LinkButton;
