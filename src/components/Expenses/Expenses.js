import { useState } from "react";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const filterChangeHandler = (yearSelected) => {
    //console.log(yearSelected);
    setYearSelected(yearSelected);
  };

  const [yearSelected, setYearSelected] = useState("2020");
  const filteredExpenses = props.expenses.filter(
    (item) => item.date.getFullYear().toString() === yearSelected
  );
      
  //const [filteredExpenses, setFilteredExpenses] = useState(props.expenses);
  return (
    <Card className="expenses">
      <ExpensesFilter onFilterChange={filterChangeHandler} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
