import axios from "axios";

const Backend_Url = "https://expense-tracker-caeba-default-rtdb.firebaseio.com";

export async function storeExpense(expenseData) {
  const response = await axios.post(
    Backend_Url + "/expenses.json",
    expenseData
  );
  const id = response.data.name; //this is used to access id generated by firebase
  return id;
}

export async function fetchExpenses() {
  const response = await axios.get(Backend_Url + "/expenses.json");

  const expenses = [];

  for (const key in response.data) {
    const expenseObject = {
      id: key,
      amount: response.data[key].amount,
      date: new Date(response.data[key].date),
      description: response.data[key].description,
    };
    expenses.push(expenseObject);
  }
  return expenses;
}

export function updateExpense(id,expenseData) {
  return axios.put(Backend_Url + `/expenses/${id}.json`, expenseData);
}
export function deleteExpense(id) {
  return axios.delete(Backend_Url + `/expenses/${id}.json`);
}
