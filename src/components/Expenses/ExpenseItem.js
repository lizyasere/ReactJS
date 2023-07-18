import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  //function clickHandler() {}
  const [title, setTitle] = useState(props.title);

  //let title = props.title;

  const clickHandler = () => {
    setTitle("Updated");
    title = "Updated!";
    console.log(title);
  };

  // const {date} = props;

  // const expenseDate = new Date(2023, 7, 5);
  // const expenseTitle = 'Car Insurance';
  // const expenseAmount = 294.67;

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      {/* <div>{props.date.toISOString()}</div> */}
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
