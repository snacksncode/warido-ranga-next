import classNames from "classnames";
import { IconProps, X } from "phosphor-react";
import { FC, ForwardRefExoticComponent, useEffect, useState } from "react";
import styles from "./Alert.module.scss";

interface Props {
  icon: ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>;
  className?: string;
}

const Alert: FC<Props> = ({ children, className, icon: Icon }) => {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShow(false);
    }, 10_000);
    return () => clearTimeout(timeoutId);
  }, []);
  return show ? (
    <div className={classNames(styles.wrapper, { [className as string]: className != null })}>
      <Icon weight="bold" size={20} />
      {children}
      <X
        onClick={() => {
          setShow(false);
        }}
        className={styles.x}
        weight="bold"
        size={30}
      />
    </div>
  ) : null;
};

export default Alert;
