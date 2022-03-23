import { ReactElement, ReactChild } from "react";

export interface ChildrenProps {
  children?: ReactElement | ReactElement[];
}

export interface ParagraphProps {
  children: ReactChild | ReactChild[];
}

export interface TitleProps {
  children: ReactChild | ReactChild[];
  size?: string;
  medium?: boolean;
}

export interface ButtonProps {
  children: ReactChild | ReactChild[];
  href?: string;
  newTab?: boolean;
  text?: boolean;
}

export interface FrameProps {
  src: string;
}

export interface TechnologyProps {
  dark?: boolean;
  children: string;
}

export interface ProductProps {
  title: string;
  children: ReactChild | ReactChild[];
  image: string;
  technologies: string[];
  liveLink: string;
  githubLink: string;
}

export interface menuListProps {
  children: ReactChild | ReactChild[];
}
