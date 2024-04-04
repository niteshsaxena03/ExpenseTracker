import axios from "axios";

export function storeExpense(expenseData) {
  axios.post(
    "https://expense-tracker-caeba-default-rtdb.firebaseio.com/expenses.json",
    expenseData
  );
}
