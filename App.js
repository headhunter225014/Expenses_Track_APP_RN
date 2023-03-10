import { StatusBar } from 'expo-status-bar';
import {Button, StyleSheet, Text, View} from 'react-native';
import AllExpenses from "./screens/AllExpenses";
import ManageExpense from "./screens/ManageExpense";
import RecentExpenses from "./screens/RecentExpenses";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {GlobalStyles} from "./constants/styles";
import {Ionicons} from '@expo/vector-icons';
import IconButton from "./components/UI/IconButton";
import ExpensedContextProvider from "./store/expenses-context";

const Stack = createNativeStackNavigator();
const Bottom = createBottomTabNavigator();

function ExpensesOverview() {
  return (
      <Bottom.Navigator
          screenOptions={({ navigation }) => ({
              headerStyle: {backgroundColor: GlobalStyles.colors.primary500},
              headerTintColor: 'white',
              tabBarStyle: {backgroundColor: GlobalStyles.colors.primary500},
              tabBarActiveTintColor: GlobalStyles.colors.accent500,
              headerRight: ({tintColor}) => (
                  <IconButton icon='add'
                              size={36}
                              color={tintColor} onPress={() => {
                              navigation.navigate('ManageExpenseScreen')}
                  }
                  />
              )
          })
      }>
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
        <ExpensedContextProvider>
            <NavigationContainer>
              <Stack.Navigator screenOptions={{
                  headerStyle: {backgroundColor: GlobalStyles.colors.primary500},
                  headerTintColor: 'white'
              }}>
                <Stack.Screen name="ExpensesOverview"
                              component={ExpensesOverview}
                              options={{headerShown: false}} />
                 <Stack.Screen name='ManageExpenseScreen'
                               component={ManageExpense} options={{
                                   presentation: 'modal'
                                }}
                 />
              </Stack.Navigator>
            </NavigationContainer>
        </ExpensedContextProvider>
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
