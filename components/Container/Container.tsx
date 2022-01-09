import classNames from "classnames";
import { FC } from "react";
import styles from "./Container.module.scss";

interface Props {
  className?: string;
}

const Container: FC<Props> = ({ children, className }) => {
  const classes = classNames(styles.wrapper, {
    [className as string]: className != null,
  });
  return <div className={classes}>{children}</div>;
};

export default Container;
