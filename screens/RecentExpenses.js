import {Text, View, Button} from "react-native";
import ExpensesOutput from "../components/expensesOutput/ExpensesOutput";

function RecentExpenses({navigation}){
    return (
        <ExpensesOutput expensesPeriod="Last 7 days"/>

    );
};

export default RecentExpenses;