import { CSSProperties, FC, ForwardRefExoticComponent, MouseEventHandler } from "react";
import classNames from "classnames";
import styles from "./Button.module.scss";
import { IconProps, CircleNotch } from "phosphor-react";
import Link from "next/link";

interface Props {
  icon: ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>;
  className?: string;
  variant?: "filled" | "outline" | "filled-white";
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  linkTo?: string;
  type?: "button" | "submit" | "reset";
  size?: "normal" | "small";
  loading?: boolean;
  fillIcon?: boolean;
  style?: CSSProperties;
}

const Button: FC<Props> = ({
  children,
  icon: Icon,
  fillIcon,
  type,
  loading,
  className,
  linkTo,
  style,
  variant = "filled",
  size = "normal",
  onClick,
}) => {
  const classes = classNames(styles.wrapper, {
    [className as string]: className != null,
    [styles["wrapper--small"]]: size === "small",
    [styles["wrapper--outline"]]: variant === "outline",
    [styles["wrapper--loading"]]: loading === true,
    [styles["wrapper--white"]]: variant === "filled-white",
  });
  if (linkTo) {
    return (
      <Link href={linkTo} passHref>
        <a style={style} onClick={onClick} className={classes}>
          {children}
          <Icon weight={fillIcon ? "fill" : "bold"} color="currentColor" size={size === "normal" ? 24 : 16} />
        </a>
      </Link>
    );
  }
  return (
    <button style={style} type={type} onClick={onClick} className={classes}>
      {children}
      {loading === true ? (
        <CircleNotch className={styles.spinner} weight="bold" color="currentColor" size={size === "normal" ? 24 : 16} />
      ) : (
        <Icon weight={fillIcon ? "fill" : "bold"} color="currentColor" size={size === "normal" ? 24 : 16} />
      )}
    </button>
  );
};

export default Button;
