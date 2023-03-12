import {Text, Button} from "react-native";
import {useLayoutEffect} from "react";
function ManageExpense({navigation, route}) {
    const editedExpenseId = route.params?.expenseId;
    const isEditing = !!editedExpenseId;

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit expense' : 'Add expense'
        })
    }, [navigation, isEditing]);


    return (
        <>
            <Text>Manage Expense Screen</Text>
        </>
    );
}

export default ManageExpense;