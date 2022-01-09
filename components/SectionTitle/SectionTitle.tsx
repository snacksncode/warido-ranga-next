import Paragraph from "@components/Paragraph";
import classNames from "classnames";
import { FC } from "react";
import styles from "./SectionTitle.module.scss";

interface Props {
  text: string;
  forceColor?: string;
  className?: string;
}

const SectionTitle: FC<Props> = ({ text, forceColor, className, children }) => {
  const classes = classNames(styles.wrapper, {
    [className as string]: className != null,
  });
  return (
    <div style={{ "--color": forceColor } as any} className={classes}>
      <h2 className={styles.title}>{text}</h2>
      {children && <Paragraph>{children}</Paragraph>}
    </div>
  );
};

export default SectionTitle;
