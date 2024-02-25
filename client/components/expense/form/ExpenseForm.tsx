import { FC, useState } from "react";
import InputBox from "../../common/inputbox/InputBox";
import styles from "./form.module.css";

type Props = {};
const ExpenseForm: FC<Props> = ({}) => {
  const [expense, setExpense] = useState<boolean>(true);
  // toggle expense / income btn
  const toggleExpense = () => {
    setExpense(!expense);
  };
  return (
    <>
      <div>
        <InputBox type="number" />
        <button className={styles.expense}>Add</button>
      </div>
      <div className={styles.container}>
        <button className={styles.expense}>Expense</button>
        <button className={styles.income}>Income</button>
      </div>
    </>
  );
};
export default ExpenseForm;
