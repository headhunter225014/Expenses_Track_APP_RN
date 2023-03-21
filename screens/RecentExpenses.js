import {Text, View, Button} from "react-native";
import ExpensesOutput from "../components/expensesOutput/ExpensesOutput";
import {useContext, useState} from "react";
import {ExpensesContext} from "../store/expenses-context";
import {getDateMinusDays} from "../util/date";
import {fetchExpenses} from "../util/http";
import {useEffect} from "react";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import ErrorOverlay from "../components/UI/ErrorOverlay";

function RecentExpenses({navigation}){
    const expensesCtx = useContext(ExpensesContext);
    const [isFetching, setIsFetching] = useState(true);
    const [error, setError] = useState();

    //calling useEffect when getting data from database
    useEffect(() => {
        async function getExpenses() {
            setIsFetching(true);
            try {
                const expenses = await fetchExpenses();
                expensesCtx.setExpenses(expenses);
            } catch (error) {
                setError("Couldn't fetch expenses");
            }
            setIsFetching(false);

        }

        getExpenses();

    }, []);

    if (isFetching) {
        return (
            <LoadingOverlay/>
        );
    }

    function errorHandler() {
        setError(null);
    }

    /*if (error && !isFetching) {
        return (
            <ErrorOverlay message={error} onConfirm={errorHandler}/>
        );
    }*/

    const recentExpenses = expensesCtx.expenses.filter((expense) =>{
            const today = new Date();
            const date7DaysAgo = getDateMinusDays(today, 7);

            return (expense.date > date7DaysAgo) && (expense.date <= today);
        }
    );

    return (
        <ExpensesOutput expenses={recentExpenses}
                        expensesPeriod="Last 7 days" fallbackText='No expenses registered for the last 7 days'/>

    );
};

export default RecentExpenses;