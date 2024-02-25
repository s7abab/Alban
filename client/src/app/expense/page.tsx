import { FC } from "react";
import AddBtn from "../../../components/common/add-btn/AddBtn";
import Modal from "../../../components/common/modal/Modal";
import Expense from "../../../components/expense/Expense";

type Props = {};
const ExpenseTracker: FC<Props> = ({}) => {
  return (
    <>
      <h1>TRACK YOUR EXPENSE</h1>
      <Expense />
    </>
  );
};
export default ExpenseTracker;
