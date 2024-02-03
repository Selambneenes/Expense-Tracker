import { ReactNode, createContext, useReducer, useState } from "react";
import AppReducer from "./AppReducer";

// Initial State Type
type Transaction = {
  id: number;
  text: string;
  amount: number;
};

export type InitialStateType = {
  transactions: Transaction[];
};

// Initial State
const initialState: InitialStateType = {
  transactions: [
    { id: 1, text: "Flower", amount: -20 },
    { id: 2, text: "Salary", amount: 300 },
    { id: 3, text: "Book", amount: -10 },
    { id: 4, text: "Camera", amount: 150 },
  ],
};

// Create Context
export const GlobalContext = createContext(initialState);

type GlobalProviderProps = {
  children: ReactNode;
};
// Provider component
export const GlobalProvider = ({ children }: GlobalProviderProps) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const deleteTransaction = (id: number) => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        deleteTransaction,
        transactions: state.transactions,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
