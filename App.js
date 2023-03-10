import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AllExpenses from "./screens/AllExpenses";
import ManageExpense from "./screens/ManageExpense";
import RecentExpenses from "./screens/RecentExpenses";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

const Stack = createNativeStackNavigator();
const Bottom = createBottomTabNavigator();

function ExpensesOverview() {
  return (
      <Bottom.Navigator>
        <Bottom.Screen name='RecentExpenses'
                       component={RecentExpenses}/>
        <Bottom.Screen name='AllExpenses'
                       component={AllExpenses}/>
      </Bottom.Navigator>
  );
}

export default function App() {
  return (
      <>
        <StatusBar style='auto'/>
        <AllExpenses/>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="ExpensesOverview"
                          component={ExpensesOverview}/>
             <Stack.Screen name='ManageExpenseScreen'
                           component={ManageExpense}/>
          </Stack.Navigator>
        </NavigationContainer>
      </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
