import classNames from "classnames";
import { CSSProperties, FC } from "react";
import styles from "./Paragraph.module.scss";

interface Props {
  className?: string;
  style?: CSSProperties;
}

const Paragraph: FC<Props> = ({ children, style, className }) => {
  const classes = classNames(styles.wrapper, {
    [className as string]: className != null,
  });
  return (
    <p style={style} className={classes}>
      {children}
    </p>
  );
};

export default Paragraph;
