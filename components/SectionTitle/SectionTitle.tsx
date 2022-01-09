import Paragraph from "@components/Paragraph";
import classNames from "classnames";
import { CSSProperties, FC } from "react";
import styles from "./SectionTitle.module.scss";

interface Props {
  text: string;
  forceColor?: string;
  className?: string;
  passRawChild?: boolean;
  style?: CSSProperties;
}

const SectionTitle: FC<Props> = ({ text, forceColor, style, passRawChild, className, children }) => {
  const classes = classNames(styles.wrapper, {
    [className as string]: className != null,
  });
  return (
    <div style={{ ...style, "--color": forceColor } as any} className={classes}>
      <h2 className={styles.title}>{text}</h2>
      {children && passRawChild ? children : <Paragraph>{children}</Paragraph>}
    </div>
  );
};

export default SectionTitle;
