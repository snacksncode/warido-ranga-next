import { FC } from "react";
import styles from "./FirmInfoTag.module.scss";

interface Props {
  tag: string;
  value: string;
}

const FirmInfoTag: FC<Props> = ({ tag, value }) => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.tag}>{tag}</span>
      <span className={styles.value}>{value}</span>
    </div>
  );
};

export default FirmInfoTag;
