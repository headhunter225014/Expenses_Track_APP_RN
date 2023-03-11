import {View, Text, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ExpensesOutput from "../components/expensesOutput/ExpensesOutput";
function AllExpenses({navigation}) {
    return (
        <ExpensesOutput expensesPeriod="Total"/>
    );
}

export default AllExpenses;