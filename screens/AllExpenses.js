import {View, Text, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ExpensesOutput from "../components/expensesOutput/ExpensesOutput";
import {useContext} from "react";
import {ExpensesContext} from "../store/expenses-context";
function AllExpenses() {
    const expensesCtx = useContext(ExpensesContext);
    return (
        <ExpensesOutput
            expensesPeriod="Total"
            expenses={expensesCtx.expenses}
            fallbackText='No registered expenses found'/>
    );
}

export default AllExpenses;