import { FC } from "react";
import styles from "./sidebar.module.css";
import sidebarItems from "@/app/utils/sidebar-items";

type Props = {};
const Sidebar: FC<Props> = ({}) => {
  return (
    <div className={styles.container}>
      {sidebarItems.map((item, index) => (
        <div key={index} className={styles.items}>{item.title}</div>
      ))}
    </div>
  );
};
export default Sidebar;
