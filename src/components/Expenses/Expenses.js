import "./Expenses.css";
import ExpenseItem  from './ExpenseItem';
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card"

const Expenses =(props) => {
  const filterChangeHandler = (yearSelected) => {
    console.log(yearSelected);
  }
  return (
    <Card className="expenses">
      <ExpensesFilter onFilterChange={filterChangeHandler}/>
      <ExpenseItem
        title={props.expenses[0].title}
        amount={props.expenses[0].amount}
        date={props.expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.expenses[1].title}
        amount={props.expenses[1].amount}
        date={props.expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.expenses[2].title}
        amount={props.expenses[2].amount}
        date={props.expenses[2].date}
      ></ExpenseItem>
    </Card>
  );
}

export default Expenses;
