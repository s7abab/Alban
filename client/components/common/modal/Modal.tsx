import { FC, ReactNode } from "react";
import styles from "./modal.module.css";

type Props = {
  header: string;
  children: ReactNode;
};
const Modal: FC<Props> = ({ header, children }) => {
  return (
    <div className={styles.modal}>
      <button className={styles.close_btn}>X</button>
      <h1>{header}</h1>
      {children}
    </div>
  );
};
export default Modal;
