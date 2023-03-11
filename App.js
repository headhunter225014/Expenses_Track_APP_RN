import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AllExpenses from "./screens/AllExpenses";
import ManageExpense from "./screens/ManageExpense";
import RecentExpenses from "./screens/RecentExpenses";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {GlobalStyles} from "./constants/styles";
import {Ionicons} from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const Bottom = createBottomTabNavigator();

function ExpensesOverview() {
  return (
      <Bottom.Navigator screenOptions={{
          headerStyle: {backgroundColor: GlobalStyles.colors.primary500},
          headerTintColor: 'white',
          tabBarStyle: {backgroundColor: GlobalStyles.colors.primary500},
          tabBarActiveTintColor: GlobalStyles.colors.accent500,
      }}>
          <Bottom.Screen
              name="RecentExpenses"
              component={RecentExpenses}
              options={{
                  title: 'Recent Expenses',
                  tabBarLabel: 'Recent',
                  tabBarIcon: ({ color, size }) => (
                      <Ionicons name="hourglass" size={size} color={color} />
                  ),
              }}
          />
        <Bottom.Screen name='AllExpenses'
                       component={AllExpenses}
                       options={{
                           title: 'All Expenses',
                           tabBarLabel: 'All',
                           tabBarIcon: ({color, size}) => (
                               <Ionicons name='calendar'
                                         color={color}
                                         size={size}/>
                           )
                       }}/>
      </Bottom.Navigator>
  );
}

export default function App() {
  return (
      <>
        <StatusBar style='light'/>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="ExpensesOverview"
                          component={ExpensesOverview}
                          options={{headerShown: false}} />
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
