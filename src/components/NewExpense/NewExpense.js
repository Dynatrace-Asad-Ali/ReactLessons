import {useState} from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const addExpenseHandler = (newExpenseData) => {
    newExpenseData.id = Math.random();
    props.onNewExpense(newExpenseData);
  }

  const cancelExpenseHandler = () => {
    setInNewExpense(false);
  }
  const addNewExpenseHandler = (event) => {
    setInNewExpense(true);
  }
  const [inNewExpense, setInNewExpense] = useState(false);

  let expenseMsg = <div className="new-expense__actions"><button onClick={addNewExpenseHandler}>Add New Expense</button></div>
  if (inNewExpense) {
    expenseMsg = <div className="new-expense">
      <ExpenseForm onAddExpense={addExpenseHandler} onCancelExpense={cancelExpenseHandler}/>;
    </div>
  }
  console.log(expenseMsg);
//  <div className="new-expense__actions"><button>Cancel</button><button>Add New Expense</button>
//</div>
  return (
    <div>
    {expenseMsg}
    </div>
  );
};

export default NewExpense;
