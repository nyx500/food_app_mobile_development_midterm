import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
// Import Navigation libraries
import {NavigationContainer} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// Import TableView components
import { Cell, Section, TableView } from 'react-native-tableview-simple';

// Screens go here

// Restaurants/Home Screen
function HomeScreen() {
  return (
    <View>
      <ScrollView>
        <TableView>
        <Section 
          header={"my section"} 
          separatorTintColor="#ccc"
          hideSeparator={true}
        >
        </Section>
        </TableView>
      </ScrollView>
    </View>
  )
}

// Menu Screen
function MenuScreen() {
  return (
    <View>  
    </View>
  )
}

const Stack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen}/>
          <Stack.Screen name="Menu" component={MenuScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
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
