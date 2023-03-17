import {View, TextInput, StyleSheet, Text} from "react-native";
import Input from "./Input";
import {useState} from "react";
function ExpenseForm() {
    const [inputValues, setInputValues] = useState({
        amount: '',
        date: '',
        description: ''
    });
    function inputChangedHandler(inputIdentifier, enteredValue) {
        setInputValues((curInputValues) => {
            return {
                ...curInputValues,
                [inputIdentifier]: enteredValue
            }
        });
    }

    return (
        <View style={styles.form}>
            <Text style={styles.title}>Your Expense</Text>
            <View style={styles.inputsRow}>
                <Input label='Amount'
                       textInputConfig={{
                            keyboardType: 'decimal-pad',
                            onChangeText: inputChangedHandler.bind(this, 'amount'),
                            value: inputValues.amount
                        }}
                       style={styles.rowInput}
                />
                <Input label='Date'
                       style={styles.rowInput}
                       textInputConfig={{
                            placeholder: 'YYYY-MM-DD',
                            maxLength: 10,
                            onChangeText: () => {}
                        }}
                />
            </View>
            <Input label='Description' textInputConfig={{
                    placeholder: 'Enter the expense description',
                    multiline: true,
                    //autoCapitalize: 'characters'
                 }}
            />
        </View>
    );
}

export default ExpenseForm;

const styles = StyleSheet.create({
    inputsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    rowInput: {
        flex: 1
    },
    form: {
        marginTop: 30
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        marginVertical: 24
    }
});