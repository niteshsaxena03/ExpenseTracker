import { useContext } from "react";
import ExpensesOutput from "../components/ExpensesComponents/ExpensesOutput";
import { ExpenseContext } from "../store/expenses-context";
import { getDateMinusDays } from "../utils/date";

function RecentExpenses() {
  const expensesContext = useContext(ExpenseContext);

  //writing logic to get expenses of last 7 days
  const recentExpenses = expensesContext.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);
    return expense.date>date7DaysAgo;
  });

  return <ExpensesOutput expensesPeriod="Last 7 Days" expenses={recentExpenses}/>;
}

export default RecentExpenses;
