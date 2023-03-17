import { useContext, useLayoutEffect } from 'react';
import {Keyboard} from 'react-native'
import {StyleSheet, View, TextInput, SafeAreaView, ScrollView, TouchableWithoutFeedbackBase, TouchableWithoutFeedback} from 'react-native';

import Button from '../components/UI/CustomButton';
import IconButton from '../components/UI/IconButton';
import { GlobalStyles } from '../constants/styles';
import { ExpensesContext } from '../store/expenses-context';
import ExpenseForm from "../components/manageExpense/ExpenseForm";

function ManageExpense({ route, navigation }) {
    const expensesCtx = useContext(ExpensesContext);

    const editedExpenseId = route.params?.expenseId;
    const isEditing = !!editedExpenseId;

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit Expense' : 'Add Expense',
        });
    }, [navigation, isEditing]);

    function deleteExpenseHandler() {
        expensesCtx.deleteExpense(editedExpenseId);
        navigation.goBack();
    }

    function cancelHandler() {
        navigation.goBack();
    }

    function confirmHandler() {
        if (isEditing) {
            expensesCtx.updateExpense(
                editedExpenseId,
                {
                    description: 'God of War',
                    amount: 49.99,
                    date: new Date('2023-03-11'),
                }
            );
        } else {
            expensesCtx.addExpense({
                description: 'God of War!!!!',
                amount: 59.99,
                date: new Date('2023-03-11'),
            });
        }
        navigation.goBack();
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={styles.container}>
                <ExpenseForm/>
                <View style={styles.buttons}>
                    <Button style={[styles.button, styles.buttonCancel]} mode="flat" onPress={cancelHandler}>
                        Cancel
                    </Button>
                    <Button style={styles.button} onPress={confirmHandler}>
                        {isEditing ? 'Update' : 'Add'}
                    </Button>
                </View>
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
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        minWidth: 120,
        marginHorizontal: 8,
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