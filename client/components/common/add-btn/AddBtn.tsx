import { FC } from "react";
import styles from "./btn.module.css";

type Props = {
  action: () => any;
};
const AddBtn: FC<Props> = ({ action }) => {
  return (
    <button onClick={action} className={styles.btn}>
      Add
    </button>
  );
};
export default AddBtn;
