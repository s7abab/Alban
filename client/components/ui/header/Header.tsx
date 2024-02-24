import styles from "./header.module.css";
import navbarItems from "@/app/utils/navbar-items";
import { FC } from "react";

type Props = {};
const Header: FC<Props> = ({}) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.logo}>Alban</h1>
      <div className={styles.navitems}>
        {navbarItems.map((item, index) => (
          <div key={index}>{item.title}</div>
        ))}
      </div>
    </div>
  );
};
export default Header;
