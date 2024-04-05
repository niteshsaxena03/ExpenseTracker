import { useContext, useEffect, useState } from "react";
import ExpensesOutput from "../components/ExpensesComponents/ExpensesOutput";
import { ExpenseContext } from "../store/expenses-context";
import { getDateMinusDays } from "../utils/date";
import { fetchExpenses } from "../utils/http";
import LoadingOverlay from "../components/UI/LoadingOverlay";

function RecentExpenses() {
  const expensesContext = useContext(ExpenseContext);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    async function getExpenses() {
      const expenses = await fetchExpenses();
      expensesContext.setExpenses(expenses);
    }
    setIsFetching(false);
    getExpenses();
  }, []);

  if(isFetching){
    return <LoadingOverlay/>
  }

  //writing logic to get expenses of last 7 days
  const recentExpenses = expensesContext.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);
    return expense.date >= date7DaysAgo && expense.date <= today;
  });

  return (
    <ExpensesOutput
      expensesPeriod="Last 7 Days"
      expenses={recentExpenses}
      fallBackText="No Expenses for last 7 days"
    />
  );
}

export default RecentExpenses;
