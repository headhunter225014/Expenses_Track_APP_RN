import {View, Text, FlatList, StyleSheet} from "react-native";
import ExpenseItem from "./ExpenseItem";

function renderExpenseItem(itemData) {
    return(
        <View>
            <ExpenseItem {...itemData.item}/>
        </View>
    );
};

function ExpensesList({expenses}) {
    return (
        <>
            <FlatList data={expenses} renderItem={renderExpenseItem}
                      keyExtractor={(item) => item.id}/>
        </>
    );
}



export default ExpensesList;