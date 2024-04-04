import axios from "axios";

const Backend_Url = "https://expense-tracker-caeba-default-rtdb.firebaseio.com";

export function storeExpense(expenseData) {
  axios.post(Backend_Url + "/expenses.json", expenseData);
}

export async function fetchExpenses() {
  const response = await axios.get(Backend_Url + "/expenses.json");

  const expenses = [];

  for (const key in response.data) {
    const expenseObject = {
      id: key,
      amount: response.data[key].amount,
      date:new Date(response.data[key].date),
      description:response.data[key].description,
    };
    expenses.push(expenseObject);
  }
  return expenses;
}
