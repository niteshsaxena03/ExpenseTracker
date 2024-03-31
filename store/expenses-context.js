import { createContext, useReducer } from "react";

export const ExpenseContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

function expensesReducer(state, action) {
  switch (action.type) {
    case "ADD":
    case "UPDATE":
    case "DELETE":
    default:
      return state;
  }
}

function ExpenseContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expensesReducer);

  function addExpense({ expenseData }) {
    dispatch({ type: "ADD", payload: expenseData });
  }
  function deleteExpense({ id, expenseData }) {
    dispatch({ type: "DELETE", payload: id });
  }
  function updateExpense({ id, expenseData }) {
    dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } });
  }

  return <ExpenseContext.Provider>{children}</ExpenseContext.Provider>;
}
