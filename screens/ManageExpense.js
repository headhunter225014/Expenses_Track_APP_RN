import {useContext, useLayoutEffect, useState} from 'react';
import {Keyboard} from 'react-native'
import {StyleSheet, View, TextInput, SafeAreaView, ScrollView, TouchableWithoutFeedbackBase, TouchableWithoutFeedback} from 'react-native';

import Button from '../components/UI/CustomButton';
import IconButton from '../components/UI/IconButton';
import { GlobalStyles } from '../constants/styles';
import { ExpensesContext } from '../store/expenses-context';
import ExpenseForm from "../components/manageExpense/ExpenseForm";
import {deleteExpense, storeExpense, updateExpense} from "../util/http";
import LoadingOverlay from "../components/UI/LoadingOverlay";

function ManageExpense({ route, navigation }) {
    const expensesCtx = useContext(ExpensesContext);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState();

    const editedExpenseId = route.params?.expenseId;
    const isEditing = !!editedExpenseId;

    const selectedExpense = expensesCtx.expenses.find(
        expense => expense.id === editedExpenseId)

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit Expense' : 'Add Expense',
        });
    }, [navigation, isEditing]);

    async function deleteExpenseHandler() {
        setIsSubmitting(true);
        try {
            await deleteExpense(editedExpenseId);
            expensesCtx.deleteExpense(editedExpenseId);
            navigation.goBack();
        } catch (error) {
            setError("Couldn't delete expense - please try again later!")
        }
        //setIsSubmitting(false);

    }

    function cancelHandler() {
        navigation.goBack();
    }

    async function confirmHandler(expenseData) {
        if (isEditing) {
            expensesCtx.updateExpense(
                editedExpenseId,
                expenseData
            );
            await updateExpense(editedExpenseId, expenseData);
        } else {
            const id = await storeExpense(expenseData);
            expensesCtx.addExpense({...expenseData, id: id});
        }
        navigation.goBack();
    }

    if (isSubmitting) {
        <LoadingOverlay/>
    }


    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={styles.container}>
                <ExpenseForm onCancel={cancelHandler}
                             submitButtonLabel={isEditing ? 'Update' : 'Add'}
                             onSubmit={confirmHandler}
                             defaultValues={selectedExpense}/>
                {isEditing && (
                    <View style={styles.deleteContainer}>
                        <IconButton
                            icon="trash"
                            color={GlobalStyles.colors.error500}
                            size={36}
                            onPress={deleteExpenseHandler}
                        />
                    </View>
                )}
            </View>
        </TouchableWithoutFeedback>
    );
}

export default ManageExpense;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary800,
    },
    buttonCancel: {
        borderWidth: 2,
        borderColor: GlobalStyles.colors.primary700,
        borderRadius: 5,
    },
    deleteContainer: {
        marginTop: 16,
        paddingTop: 8,
        borderTopWidth: 2,
        borderTopColor: GlobalStyles.colors.primary200,
        alignItems: 'center',
    },
});