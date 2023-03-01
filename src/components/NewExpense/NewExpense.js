import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const addExpenseHandler = (newExpenseData) => {
    props.onNewExpense(newExpenseData);
  }
  return (
    <div className="new-expense">
      <ExpenseForm onAddExpense={addExpenseHandler}/>;
    </div>
  );
};

export default NewExpense;
