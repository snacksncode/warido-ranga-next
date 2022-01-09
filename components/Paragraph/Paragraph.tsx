import classNames from "classnames";
import { FC } from "react";
import styles from "./Paragraph.module.scss";

interface Props {
  className?: string;
}

const Paragraph: FC<Props> = ({ children, className }) => {
  const classes = classNames(styles.wrapper, {
    [className as string]: className != null,
  });
  return <p className={classes}>{children}</p>;
};

export default Paragraph;
