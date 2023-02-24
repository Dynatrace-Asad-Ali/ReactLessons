import "./ExpenseItem.css"
import "./ExpenseDate"
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
    return (
        <div className="expense-item">
            <div><ExpenseDate date={props.date} /></div>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
            </div>
            <div className="expense-item__price">{props.amount}</div>
        </div>
    );
}

export default ExpenseItem;