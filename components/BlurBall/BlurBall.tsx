import { FC } from "react";
import styles from "./BlurBall.module.scss";
import classNames from "classnames";

interface Props {
  color?: string;
  blur?: number;
  size?: number;
  opacity?: number;
  className?: string;
}

const BlurBall: FC<Props> = ({ className, size = 100, blur = 50, opacity = 1, color = "var(--clr-accent)" }) => {
  const classes = classNames(styles.wrapper, {
    [className as string]: className != null,
  });
  return (
    <div
      style={
        {
          "--size": `${size}px`,
          opacity,
          backgroundColor: color,
          filter: `blur(${blur}px)`,
        } as any
      }
      className={classes}
    />
  );
};

export default BlurBall;
