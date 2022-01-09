import classNames from "classnames";
import { CSSProperties, FC } from "react";
import styles from "./ServiceHeading.module.scss";

interface Props {
  className?: string;
  style?: CSSProperties;
}

const ServiceHeading: FC<Props> = ({ children, className, style }) => {
  const classes = classNames(styles.wrapper, {
    [className as string]: className != null,
  });
  return (
    <h1 style={style} className={classes}>
      {children}
    </h1>
  );
};

export default ServiceHeading;
