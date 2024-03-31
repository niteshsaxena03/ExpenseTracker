import { useContext } from "react";
import ExpensesOutput from "../components/ExpensesComponents/ExpensesOutput";
import { ExpenseContext } from "../store/expenses-context";

function AllExpenses() {
  const expensesContext=useContext(ExpenseContext);
  return <ExpensesOutput expensesPeriod="Total" expenses={expensesContext.expenses} fallBackText="No expenses till now"/>;
}

export default AllExpenses;
