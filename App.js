// Image Attributions: 
// Unsplash.com photos
// Ice cream parlor photo by
// <a href="https://unsplash.com/@walexy?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Bill Alexy</a> on <a href="https://unsplash.com/photos/an-ice-cream-parlor-with-a-wooden-bench-in-front-of-it-1vDN-XW6yow?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
// Vegan restaurant photo:
// Photo by <a href="https://unsplash.com/@courtneymcook?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Courtney Cook</a> on <a href="https://unsplash.com/photos/flat-lay-photography-pf-food-on-table-SgHyqMzLOMA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
// Indian curry photo:
// Photo by <a href="https://unsplash.com/@grimnoire?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">emy</a> on <a href="https://unsplash.com/photos/flat-lay-photography-of-vegetable-soup-on-white-ceramic-cup-XoByiBymX20?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
// Logo attribution:
// Free Download Owl 3 2 SVG vector file in monocolor and multicolor type for Sketch and Figma from Owl 3 2 Vectors svg vector collection. Owl 3 2 Vectors SVG vector illustration graphic art design format.
// COLLECTION: Special Days Icooon Mono Vectors
// LICENSE: PD License
// AUTHOR: Icooon Mono


import { StatusBar } from 'expo-status-bar';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// Import Navigation libraries
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// Import TableView components
import { Cell, Section, TableView } from 'react-native-tableview-simple';


// LOGO CUSTOM COMPONENT FOR NAVIGATION HEADER
// Replacing the title with a custom component
// Attribution: https://reactnavigation.org/docs/headers/
// Color scheme: #ed3507
function LogoTitle() {
  return (
      <Image
            style={styles.logo}
            source={require("./images/owl_logo.png")}
      />
  );
}

// CUSTOM NAVIGATION HEADER CONTAINING LOGO WITH TITLE AS PROP PARAMETER
function Header({navigation, screenTitle}) {
  return (
    <View style={styles.headerView}> 
    <LogoTitle />
    <Text style={styles.headerTextLogo}>
        FoodWol: 
      </Text>
      <Text style={styles.headerTextContent}>
        {screenTitle}
      </Text>
    </View>
  )
}


// Screens go here
// Restaurants/Home Screen
function HomeScreen({ navigation }) {

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
            resizeMode="cover" />
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
      onPress={props.action}
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
            hideSurroundingSeparators={true}
          >
            <HomeScreenCell
              title={"Gaia's Garden"}
              tagline={"Vegan and vegetarian favourites, ££"}
              eta="20-25"
              imgUri={require("./images/vegan_restaurant.jpg")}
              action={() => {
                navigation.navigate("Menu",
                  // Pass "items" object in as a route parameter
                  { 
                    restaurantName: "Gaia's Garden",
                    // "items" contains an array containing Sections for categories of food and drink
                    items: [
                      // Each object in the array stores a food-subcategory
                      {
                        "title": "Salads",
                        /** Each food-subcategory contains a "contents" property storing an array
                         * of details about separate food items such as "title" */
                        "contents": [
                          { "title": "Caesar Salad: veggie chicken fillets and cashew cheese" },
                          { "title": "California Salad: avocado, tomatoes, vegan bacon and corn-on-the-cob" },
                          { "title": "Winter Salad: sweet potatoes, brussel sprouts and walnuts" },
                          { "title": "Summer Refresher: blueberry, vegan feta and baby spinach" },
                          { "title": "Thai Salad: mango, tofu and peanut salad" }
                        ]
                      },
                      {
                        "title": "Vegan Burgers",
                        "contents": [
                          { "title": "California Dreaming: vegan beef patty with spicy guacamole" },
                          { "title": "Marine Dream: vegan fish patty with gherkins and seaweed mayo" },
                          { "title": "Smokehouse Supreme: vegan beef patty with barbecue sauce and onion rings" },
                          { "title": "The CSB: faux chicken with spicy red cabbage slaw" },
                          { "title": "The OG: vegan beef patty with bacon and vegan cheese" }
                        ]
                      },
                      {
                        "title": "Sides",
                        "contents": [
                          { "title": "Big load fries" },
                          { "title": "Crispy vegan chicken nuggets" },
                          { "title": "Onion rings" },
                          { "title": "Sweet potato wedges" },
                          { "title": "Waffle fries" },
                          { "title": "Vegan slaw" },
                        ]
                      },
                      {
                        "title": "Sweets",
                        "contents": [
                          { "title": "Banana muffin" },
                          { "title": "Carrot cake" },
                          { "title": "Coconut and passion fruit sticky rice" },
                          { "title": "Mango chia bowl" },
                          { "title": "Peach pie" },
                          { "title": "Vegan chocolate fondant with sticky fudge" }
                        ]
                      },
                      {
                        "title": "Drinks",
                        "contents": [
                          { "title": "Berry smoothie" },
                          { "title": "Fresh-squeezed orange juice" },
                          { "title": "Kale and spinach smoothie" },
                          { "title": "Mango smoothie" },
                          { "title": "Sparkling water" },
                        ]
                      }
                    ]
                  });
              }}
            />
            <HomeScreenCell
              title={"Joe's Gelato"}
              tagline={"Desert, Ice cream, £££"}
              eta="10-30"
              imgUri={require("./images/ice_cream_parlor.jpg")}
              action={() => {
                navigation.navigate("Menu",
                  // Pass "items" object in as a route parameter
                  { 
                    restaurantName: "Joe's Gelato",
                    // "items" contains an array containing Sections for categories of food and drink
                    items: [
                      // Each object in the array stores a food-subcategory
                      {
                        "title": "Gelato",
                        /** Each food-subcategory contains a "contents" property storing an array
                         * of details about separate food items such as "title" */
                        "contents": [
                          { "title": "Chocolate" },
                          { "title": "Dulce de leche" },
                          { "title": "Hazelnut" },
                          { "title": "Lemon" },
                          { "title": "Mint" },
                          { "title": "Sicilian orange" },
                          { "title": "Strawberry" },
                          { "title": "Vanilla" },
                          { "title": "Yogurt and cherries" }
                        ]
                      },
                      {
                        "title": "Special Desserts",
                        "contents": [
                          { "title": "Apple pie" },
                          { "title": "Carrot cake" },
                          { "title": "Coconut pie" },
                          { "title": "Crêpes with 2 gelato scoops" },
                          { "title": "Hazelnut and chocolate torte" },
                          { "title": "Raspberry cheesecake" },
                          { "title": "Waffles with 2 gelato scoops" }
                        ]
                      },
                      {
                        "title": "Coffee",
                        "contents": [
                          { "title": "Caffé Americano" },
                          { "title": "Cappucino" },
                          { "title": "Caramel Macchiato" },
                          { "title": "Filter Coffee" },
                          { "title": "Flat white" },
                          { "title": "Latte" },
                          { "title": "Mocha" },
                        ]
                      },
                      {
                        "title": "Milkshakes",
                        "contents": [
                          { "title": "Chocolate" },
                          { "title": "Dulce de leche" },
                          { "title": "Hazelnut" },
                          { "title": "Lemon" },
                          { "title": "Mint" },
                          { "title": "Sicilian orange" },
                          { "title": "Strawberry" },
                          { "title": "Vanilla" },
                          { "title": "Yogurt and cherries" }
                        ]
                      }
                    ]
                  });
              }}
            />
            <HomeScreenCell
              title={"Spice Paradise"}
              tagline={"Curry in a hurry"}
              eta="15-25"
              imgUri={require("./images/curry.jpg")}
              action={() => {
                navigation.navigate("Menu",
                  {
                    restaurantName: "Spice Paradise",
                    items: [
                      {
                        "title": "Starters",
                        "contents": [
                          { "title": "Chicken samosas" },
                          { "title": "Lentil bites" },
                          { "title": "Onion bhajis" },
                          { "title": "Potato paratha" },
                          { "title": "Vegetarian pakoras" },
                          { "title": "Vegetarian samosas" }
                        ]
                      },
                      {
                        "title": "Curries",
                        "contents": [
                          { "title": "Chicken korma" },
                          { "title": "Chicken tikka masala" },
                          { "title": "Chicken jalfrezi" },
                          { "title": "Chicken vindaloo" },
                          { "title": "Chickpea chana masala" },
                          { "title": "Fish coconut curry" },
                          { "title": "Lamb biryani" },
                          { "title": "Lamb madras" },
                          { "title": "Lentil dahl" },
                          { "title": "Prawn jalfrezi" },
                          { "title": "Vegetarian balti" },
                          { "title": "Vegetarian biryani" }
                        ]
                      },
                      {
                        "title": "Sides",
                        "contents": [
                          { "title": "Coconut rice" },
                          { "title": "Pilau rice" },
                          { "title": "Plain rice" },
                          { "title": "Garlic naan bread" },
                          { "title": "Plain naan bread" },
                          { "title": "Cucumber raita" },
                          { "title": "Selection of pickles" },
                          { "title": "Poppadums" },
                        ]
                      },
                      {
                        "title": "Drinks",
                        "contents": [
                          { "title": "Chai masala" },
                          { "title": "Home-made lemonade" },
                          { "title": "Salty lassi" },
                          { "title": "Mango lassi" },
                          { "title": "Sparkling water" }
                        ]
                      }
                    ]
                  });
              }}
            />
          </Section>
        </TableView>
      </ScrollView>
    </View>
  )
}

// Menu Screen: remember to pass in the route containing the "items" data
function MenuScreen({ route, navigation }) {
  return (
    <View>
    {/* Add a back button */}
      <View style={styles.backButtonView}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={()=>{navigation.goBack()}}
        >
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity> 
      </View>
      <ScrollView>
        <TableView>
          {
            // Inside the TableView iterate through "items", creating a new Section each time.
            route.params.items.map((item, idx) => (
              <Section
                key={idx}
                header={item.title}
              >
                {
                  item.contents.map((product, idx2) => (
                    <Cell
                      key={idx2}
                      cellStyle="Basic"
                      title={product.title}
                    />
                  ))
                }
              </Section>
            ))
          }
        </TableView>
      </ScrollView>
    </View>
  )
}

const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Styling the navigation headers with custom styles attribution: https://reactnavigation.org/docs/headers/ */}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={
            ({ navigation }) => ({
            // Use custom components for logo and header (see beginning of this file)
            header: () => <Header navigation={navigation} screenTitle="Restaurants" />,
          })
        }
        />
        <Stack.Screen 
          name="Menu" 
          component={MenuScreen} 
          options={({ navigation, route }) =>
           ({
            // Header displays logo followed by restaurant name for the menu page
             header: () => <Header navigation={navigation} screenTitle={route.params.restaurantName} />
          })} 
        />
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
  logo: 
  {
    width: "16%",
    height: "16%",
    aspectRatio: 1
  },
  headerView: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: "9%",
    paddingHorizontal: "2%",
    paddingVertical: "2%"
  },
  headerTextLogo: {
    color: "#ed3507",
    fontSize: 22,
    fontWeight: "bold",
    marginRight: "2.5%"
  },
  headerTextContent: {
    color: "#ed3507",
    fontSize: 20,
    fontWeight: "bold",
  },
  restaurantCellContentContainer: {
    // Set height of cell to 290px
    height: 290,
    alignItems: "stretch",
  },
  restaurantCellContentView: {
    // Expands the View in CellContent horizontally to fill whole width of screen
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start", // Text goes to left (except for absolutely-positioned ETA View)
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
  },
  // Menu page
  backButtonView: {
    justifyContent: "center",
    alignItems: "flex-start",
    paddingLeft: "4%",
    marginTop: "4%",
    marginBottom: "4%"
  },
  backButton: {
    backgroundColor: "#ed3507", borderRadius: 20, paddingHorizontal: "5%", paddingVertical: "1.5%",
    borderWidth: 3, borderColor: "#f95f39"
  },
  backButtonText: { 
    color: "white",
    textDecorationLine: "underline" 
  }
});
