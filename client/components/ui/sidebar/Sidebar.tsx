import { FC } from "react";
import styles from "./sidebar.module.css";
import sidebarItems from "@/app/utils/sidebar-items";
import Link from "next/link";

type Props = {};
const Sidebar: FC<Props> = ({}) => {
  return (
    <div className={styles.container}>
      {sidebarItems.map((item, index) => (
        <Link key={index} href={item.url} className={styles.items}>
          {item.title}
        </Link>
      ))}
    </div>
  );
};
export default Sidebar;
