// Image Attributions: 
// Unsplash.com
// ICe cream parlor photo by
// <a href="https://unsplash.com/@walexy?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Bill Alexy</a> on <a href="https://unsplash.com/photos/an-ice-cream-parlor-with-a-wooden-bench-in-front-of-it-1vDN-XW6yow?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
  

import { StatusBar } from 'expo-status-bar';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
// Import Navigation libraries
import {NavigationContainer} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// Import TableView components
import { Cell, Section, TableView } from 'react-native-tableview-simple';

// Screens go here

// Restaurants/Home Screen
function HomeScreen() {

  
  const HomeScreenCell = (props) => (
    // In your HomescreenCell, use props to set the height to (FIXED) 290px, background colour to transparent and highlight colour to #ccc.
    <Cell
      {...props}
      // These styles will be applied to the content container which wraps all of the child views.
      contentContainerStyle={styles.restaurantCellContentContainer}
      backgroundColor={"transparent"}
      highlightUnderlayColor={"#ccc"}
      // Replace content view component
      cellContentView={
        <View style={styles.restaurantCellContentView}>
          <Image
            style={styles.restaurantImage}
            source={props.imgUri}
            resizeMode="cover"/>
          <View style={styles.etaView}>
            <Text style={styles.etaText}>
              {props.eta}{'\n'}mins
            </Text>
          </View>
          <Text style={styles.restaurantTitleText}>
            {props.title}
          </Text>
          <Text style={styles.restaurantTaglineText}>
            {props.tagline}
          </Text>
        </View>   
      }
    />
  );


  return (
    <View>
      <ScrollView>
        <TableView>
        <Section 
          header={""} 
          separatorTintColor="#ccc"
          hideSeparator={true}
        >
          <HomeScreenCell
            title = {"Joe's Gelato"}
            tagline = {"Desert, Ice cream, £££"}
            eta = "10-30"
            imgUri = {require("./images/ice_cream_parlor.jpg")}
          />
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
          <Stack.Screen name="Restaurants" component={HomeScreen}/>
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
  restaurantCellContentContainer: {
    // Set height of cell to 290px
    height: 290,
    alignItems:"stretch"
  },
  restaurantCellContentView: {
    // Expands the View in CellContent horizontally to fill whole width of screen
    flex:1,
    justifyContent: "center",
    alignItems:"flex-start", // Text goes to left (except for absolutely-positioned ETA View)
    paddingVertical: "5%" // Leaves some responsive padding around the <View> in the Cell
  },  
  restaurantImage: {
    width: "100%",
    height: "74%",
    marginTop: "2%",
    borderRadius: 8,
  },
  etaView: {
    backgroundColor: "white",
    borderRadius: 30,
    position: "absolute",
    right: "5%",
    bottom: "19%",
    paddingHorizontal: "7%",
    paddingVertical: "2%",
    // Vertically align text for ETA in center
    justifyContent: "center"
  },
  etaText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18
  },
  restaurantTitleText: {
    fontWeight: "bold",
    fontSize: 22,
    // Leave a small amount of space between title and image, title and tagline
    marginTop: "2%",
    marginBottom: "1%"
  },
  restaurantTaglineText: {
    color: "#858585" // grey tagline
  }  
});
