import { IconProps } from "phosphor-react";
import { FC, ForwardRefExoticComponent } from "react";
import styles from "./ContactInfo.module.scss";

interface Props {
  icon: ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>;
  data: string[];
}

const ContactInfo: FC<Props> = ({ icon: Icon, data }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.icon}>
        <Icon weight="bold" color="var(--clr-text-light)" size={24} />
      </div>
      <div className={styles.text}>
        {data.map((entry, entryIdx) => {
          return <span key={`${entry}_${entryIdx}`}>{entry}</span>;
        })}
      </div>
    </div>
  );
};

export default ContactInfo;
