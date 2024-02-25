"use client";
import { FC, useState } from "react";
import AddBtn from "../common/add-btn/AddBtn";
import Modal from "../common/modal/Modal";
import ExpenseForm from "./form/ExpenseForm";
import expenseData from "../../data/expense";
import styles from './expense.module.css'

type Props = {};
const Expense: FC<Props> = ({}) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpenModal = () => {
    setOpen(!open);
  };
  return (
    <>
      <AddBtn action={handleOpenModal} />
      {open && <Modal header="Add Expense" children={<ExpenseForm />} />}
      <div>
        {expenseData.map((item, index) => (
          <div className={styles.expense}>
            <div>{item.amount}</div>
            <div>{item.type}</div>
          </div>
        ))}
      </div>
    </>
  );
};
export default Expense;
