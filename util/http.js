import axios from "axios";

const URL = 'https://react-native-expense-tra-e8182-default-rtdb.firebaseio.com';


//posting expense data using https firbase post request
export async function storeExpense(expenseData) {
    const response = await axios.post(
        URL + '/expenses.json',
        expenseData
    );

    const id = response.data.name;

    return id;
}

export async function fetchExpenses() {
    const response = await axios.get(
        URL + '/expenses.json');

    const expenses = [];

    for (const key in response.data) {
        const expenseObj = {
            id: key,
            amount: response.data[key].amount,
            date: new Date(response.data[key].date),
            description: response.data[key].description
        }
        expenses.push(expenseObj);
    }
    return expenses;
}

export function updateExpense (id, expenseData) {
    axios.put(URL + `/expenses/${id}.json`, expenseData);
}

export function deleteExpense(id) {
    axios.delete(URL + `/expenses/${id}.json`);
}

