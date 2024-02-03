import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

type TransactionType = {
  id: number;
  text: string;
  amount: number;
};

type ObjectTransactionType = {
  transaction: TransactionType;
};

const Transaction = ({ transaction }: ObjectTransactionType) => {
  const sign = transaction.amount < 0 ? "-" : "+";

  return (
    <li
      key={transaction.id}
      className={transaction.amount < 0 ? "minus" : "plus"}
    >
      {transaction.text}{" "}
      <span>
        {sign}${Math.abs(transaction.amount)}
      </span>
      <button
        className="delete-btn"
      >
        x
      </button>
    </li>
  );
};

export default Transaction;
