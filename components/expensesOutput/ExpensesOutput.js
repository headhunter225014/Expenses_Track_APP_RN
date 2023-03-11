import {View, Text, FlatList, StyleSheet} from "react-native";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";
import {GlobalStyles} from "../../constants/styles";

const DUMMY_EXPENSES =[
    {
    id: 'e1',
    description: 'A pair of shoes',
    amount: 59.99,
    date: new Date('2021-12-19')
    },
    {
        id: 'e2',
        description: 'Groceries',
        amount: 12.39,
        date: new Date('2022-01-05')
    },
    {
        id: 'e3',
        description: 'electricity',
        amount: 30.69,
        date: new Date('2021-12-01')
    },
    {
        id: 'e4',
        description: 'A book',
        amount: 14.99,
        date: new Date('2022-02-19')
    },
    {
        id: 'e5',
        description: 'Another book',
        amount: 18.99,
        date: new Date('2022-02-18')
    }
];
function ExpensesOutput({expenses, expensesPeriod}) {
    return (
        <View style={styles.container}>
            <ExpensesSummary expenses={DUMMY_EXPENSES } periodName={expensesPeriod}/>
            <ExpensesList expenses={DUMMY_EXPENSES}/>
        </View>
    );
}

export default ExpensesOutput;

const styles = StyleSheet.create({
    container: {
        padding: 24,
        backgroundColor: '#8da4b0',
        flex: 1
    }
});