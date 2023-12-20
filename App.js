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
// Salad: Photo by <a href="https://unsplash.com/@annapelzer?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Anna Pelzer</a> on <a href="https://unsplash.com/photos/bowl-of-vegetable-salads-IGfIGP5ONV0?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>



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
function Header({ navigation, screenTitle }) {
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
              tagline={"Salads, veggie burgers, ££"}
              eta="20-25"
              imgUri={require("./images/vegetarian_restaurant.jpg")}
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
                          {
                            "title": "Caesar Salad",
                            "subtitle": "Veggie chicken fillets and cashew cheese",
                            "price": 10.99,
                            "instock": false
                          },
                          {
                            "title": "California Salad",
                            "subtitle": "Avocado, corn, veggie bacon",
                            "price": 8.99,
                            "instock": true
                          },
                          {
                            "title": "Winter Salad",
                            "subtitle": "Sweet potatoes, brussel sprouts and walnuts",
                            "price": 8.99,
                            "instock": true
                          },
                          {
                            "title": "Summer Refresher",
                            "subtitle": "Blueberry, vegan feta and baby spinach",
                            "price": 7.99,
                            "instock": false
                          },
                          {
                            "title": "Thai Salad",
                            "subtitle": "Mango, tofu and peanut salad",
                            "price": 9.99,
                            "instock": true
                          }
                        ]
                      },
                      {
                        "title": "Vegan Burgers",
                        "contents": [
                          {
                            "title": "California Dreaming",
                            "subtitle": "Veggie beef patty with spicy guacamole",
                            "price": 13.99,
                            "instock": true
                          },
                          {
                            "title": "Marine Dream",
                            "subtitle": "Veggie fish patty with gherkins and seaweed mayo",
                            "price": 12.99,
                            "instock": true
                          },
                          {
                            "title": "Smokehouse Supreme",
                            "subtitle": "Vegan beef patty with barbecue sauce and onion rings",
                            "price": 14.99,
                            "instock": true
                          },
                          {
                            "title": "The CSB",
                            "subtitle": "Faux chicken with spicy red cabbage slaw",
                            "price": 12.99,
                            "instock": false
                          },
                          {
                            "title": "The OG",
                            "subtitle": "Vegan beef patty with bacon and vegan cheese",
                            "price": 10.99,
                            "instock": true
                          }
                        ]
                      },
                      {
                        "title": "Sides",
                        "contents": [
                          {
                            "title": "Big load fries",
                            "price": 3.99,
                            "instock": true
                          },
                          {
                            "title": "Crispy vegan chicken nuggets",
                            "price": 6.99,
                            "instock": true
                          },
                          {
                            "title": "Onion rings",
                            "price": 3.50,
                            "instock": true
                          },
                          {
                            "title": "Sweet potato wedges",
                            "price": 4.99,
                            "instock": true
                          },
                          {
                            "title": "Waffle fries",
                            "price": 3.99,
                            "instock": true
                          },
                          {
                            "title": "Vegan slaw",
                            "price": 3.50,
                            "instock": true
                          },
                        ]
                      },
                      {
                        "title": "Sweets",
                        "contents": [
                          {
                            "title": "Banana muffin",
                            "price": 4.50,
                            "instock": false
                          },
                          {
                            "title": "Carrot cake",
                            "price": 5.25,
                            "instock": true
                          },
                          {
                            "title": "Coconut and passion fruit sticky rice",
                            "price": 6.25,
                            "instock": true
                          },
                          {
                            "title": "Mango chia bowl",
                            "price": 6.00,
                            "instock": false
                          },
                          {
                            "title": "Peach pie",
                            "price": 4.99,
                            "instock": true
                          },
                          {
                            "title": "Vegan chocolate fondant with sticky fudge",
                            "price": 4.50,
                            "instock": true
                          }
                        ]
                      },
                      {
                        "title": "Drinks",
                        "contents": [
                          {
                            "title": "Berry smoothie",
                            "price": 3.99,
                            "instock": true
                          },
                          {
                            "title": "Fresh-squeezed orange juice",
                            "price": 2.99,
                            "instock": true
                          },
                          {
                            "title": "Kale and spinach smoothie",
                            "price": 4.99,
                            "instock": true
                          },
                          {
                            "title": "Mango smoothie",
                            "price": 3.99,
                            "instock": true
                          },
                          {
                            "title": "Sparkling water",
                            "price": 2.50,
                            "instock": true
                          },
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
                        "title": "Gelato: Price per scoop!",
                        /** Each food-subcategory contains a "contents" property storing an array
                         * of details about separate food items such as "title" */
                        "contents": [
                          {
                            "title": "Chocolate",
                            "price": 1.50,
                            "instock": true
                          },
                          {
                            "title": "Dulce de leche",
                            "price": 2.00,
                            "instock": true
                          },
                          {
                            "title": "Hazelnut",
                            "price": 1.50,
                            "instock": true
                          },
                          {
                            "title": "Lemon",
                            "price": 1.50,
                            "instock": true
                          },
                          {
                            "title": "Inimitable",
                            "price": 1.75,
                            "instock": true
                          },
                          {
                            "title": "Mint",
                            "price": 1.50,
                            "instock": true
                          },
                          {
                            "title": "Sicilian orange",
                            "price": 2.00,
                            "instock": true
                          },
                          {
                            "title": "Strawberry",
                            "price": 1.50,
                            "instock": true
                          },
                          {
                            "title": "Vanilla",
                            "price": 1.50,
                            "instock": true
                          },
                          {
                            "title": "Yogurt and cherries",
                            "price": 2.00,
                            "instock": true
                          }
                        ]
                      },
                      {
                        "title": "Special Desserts",
                        "contents": [
                          {
                            "title": "Apple pie",
                            "price": 4.00,
                            "instock": true
                          },
                          {
                            "title": "Carrot cake",
                            "price": 4.50,
                            "instock": true
                          },
                          {
                            "title": "Coconut pie",
                            "price": 3.00,
                            "instock": true
                          },
                          {
                            "title": "Crêpes with 2 gelato scoops",
                            "price": 4.50,
                            "instock": true
                          },
                          {
                            "title": "Hazelnut and chocolate torte",
                            "price": 4.99,
                            "instock": true
                          },
                          {
                            "title": "Raspberry cheesecake",
                            "price": 4.00,
                            "instock": true
                          },
                          {
                            "title": "Waffles with 2 gelato scoops",
                            "price": 3.50,
                            "instock": true
                          }
                        ]
                      },
                      {
                        "title": "Coffee",
                        "contents": [
                          {
                            "title": "Caffé Americano",
                            "price": 2.00,
                            "instock": true
                          },
                          {
                            "title": "Cappucino",
                            "price": 3.75,
                            "instock": true
                          },
                          {
                            "title": "Caramel Macchiato",
                            "price": 2.95,
                            "instock": true
                          },
                          {
                            "title": "Filter Coffee",
                            "price": 1.50,
                            "instock": true
                          },
                          {
                            "title": "Flat white",
                            "price": 3.00,
                            "instock": true
                          },
                          {
                            "title": "Latte",
                            "price": 3.00,
                            "instock": true
                          },
                          {
                            "title": "Mocha",
                            "price": 4.95,
                            "instock": true
                          },
                        ]
                      },
                      {
                        "title": "Milkshakes",
                        "contents": [
                          {
                            "title": "Chocolate",
                            "price": 2.00,
                            "instock": true
                          },
                          {
                            "title": "Dulce de leche",
                            "price": 2.50,
                            "instock": true
                          },
                          {
                            "title": "Hazelnut",
                            "price": 2.00,
                            "instock": true
                          },
                          {
                            "title": "Lemon",
                            "price": 2.00,
                            "instock": true
                          },
                          {
                            "title": "Inimitable",
                            "price": 2.25,
                            "instock": true
                          },
                          {
                            "title": "Mint",
                            "price": 2.00,
                            "instock": true
                          },
                          {
                            "title": "Sicilian orange",
                            "price": 2.50,
                            "instock": true
                          },
                          {
                            "title": "Strawberry",
                            "price": 2.00,
                            "instock": true
                          },
                          {
                            "title": "Vanilla",
                            "price": 2.00,
                            "instock": true
                          },
                          {
                            "title": "Yogurt and cherries",
                            "price": 2.50,
                            "instock": true
                          }
                        ]
                      }
                    ]
                  });
              }}
            />
            <HomeScreenCell
              title={"Spice Paradise"}
              tagline={"Curry in a hurry ££"}
              eta="15-25"
              imgUri={require("./images/curry.jpg")}
              action={() => {
                navigation.navigate("Menu",
                  {
                    restaurantName: "Spice Paradise",
                    items: [
                      {
                        "title": "Starters (3x item)",
                        "contents": [
                          {
                            "title": "Chicken samosas",
                            "price": 4.99,
                            "instock": true
                          },
                          {
                            "title": "Lentil bites",
                            "price": 2.99,
                            "instock": true
                          },
                          {
                            "title": "Onion bhajis",
                            "price": 2.99,
                            "instock": true
                          },
                          {
                            "title": "Potato paratha",
                            "price": 2.99,
                            "instock": true
                          },
                          {
                            "title": "Vegetarian pakoras",
                            "price": 3.99,
                            "instock": true
                          },
                          {
                            "title": "Vegetarian samosas",
                            "price": 3.99,
                            "instock": true
                          }
                        ]
                      },
                      {
                        "title": "Mains",
                        "contents": [
                          {
                            "title": "Chef's Special Chicken",
                            "subtitle": "Chicken curry with tropical fruits",
                            "price": 10.99,
                            "instock": true
                          },
                          {
                            "title": "Chicken korma",
                            "subtitle": "Sauce made from cream and ground nuts",
                            "price": 10.99,
                            "instock": true
                          },
                          {
                            "title": "Chicken tikka masala",
                            "subtitle": "Creamy tomato sauce",
                            "price": 9.99,
                            "instock": true
                          },
                          {
                            "title": "Chicken jalfrezi",
                            "subtitle": "Pepper and tomato sauce",
                            "price": 9.99,
                            "instock": true
                          },
                          {
                            "title": "Chicken vindaloo",
                            "subtitle": "Vinegary, very spicy sauce",
                            "price": 9.99,
                            "instock": true
                          },
                          {
                            "title": "Chickpea chana masala",
                            "subtitle": "Medium-spicy tomato based sauce",
                            "price": 8.99,
                            "instock": true
                          },
                          {
                            "title": "Fish coconut curry",
                            "subtitle": "Cod in creamy coconut sauce",
                            "price": 12.99,
                            "instock": true
                          },
                          {
                            "title": "Lamb biryani",
                            "subtitle": "Aromatic rice with succulent lamb",
                            "price": 12.99,
                            "instock": true
                          },
                          {
                            "title": "Lamb madras",
                            "subtitle": "Rich and aromatic spice blend",
                            "price": 12.99,
                            "instock": true
                          },
                          {
                            "title": "Lentil dahl",
                            "subtitle": "Spicy mustard and coriander sauce",
                            "price": 8.99,
                            "instock": true
                          },
                          {
                            "title": "Saag aloo",
                            "subtitle": "Dry spinach curry with potatoes",
                            "price": 6.99,
                            "instock": true
                          },
                          {
                            "title": "Prawn jalfrezi",
                            "subtitle": "Pepper and tomato sauce",
                            "price": 12.99,
                            "instock": true
                          },
                          {
                            "title": "Vegetarian balti",
                            "subtitle": "Spicy vegetable stir-fry",
                            "price": 7.99,
                            "instock": true
                          },
                          {
                            "title": "Vegetarian biryani",
                            "subtitle": "Aromatic rice with cauliflower and peas",
                            "price": 7.99,
                            "instock": true
                          }
                        ]
                      },
                      {
                        "title": "Sides",
                        "contents": [
                          {
                            "title": "Coconut rice",
                            "price": 2.99,
                            "instock": true
                          },
                          {
                            "title": "Pilau rice",
                            "price": 2.99,
                            "instock": true
                          },
                          {
                            "title": "Plain rice",
                            "price": 1.99,
                            "instock": true
                          },
                          {
                            "title": "Garlic naan bread",
                            "price": 2.99,
                            "instock": true
                          },
                          {
                            "title": "Plain naan bread",
                            "price": 2.99,
                            "instock": true
                          },
                          {
                            "title": "Cucumber raita",
                            "price": 1.99,
                            "instock": true
                          },
                          {
                            "title": "Selection of pickles",
                            "price": 1.00,
                            "instock": true
                          },
                          {
                            "title": "Poppadums",
                            "price": 1.00,
                            "instock": true
                          },
                        ]
                      },
                      {
                        "title": "Drinks",
                        "contents": [
                          {
                            "title": "Chai masala",
                            "price": 2.50,
                            "instock": true
                          },
                          {
                            "title": "Home-made lemonade",
                            "price": 1.50,
                            "instock": true
                          },
                          {
                            "title": "Salty lassi",
                            "price": 3.50,
                            "instock": true
                          },
                          {
                            "title": "Mango lassi",
                            "price": 3.50,
                            "instock": true
                          },
                          {
                            "title": "Sparkling water",
                            "price": 1.50,
                            "instock": true
                          }
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

  // A custom cell component which permits having a subtitle AND a right-detail for the price
  // In react-native-tableview-simple, you are restricted to only having one "detail", which is
  // unsuitable for having a menu-item with both a subtitle and a price on the right-hand side!
  const CustomCellWithSubtitleAndRightDetail = (props) => (
    <Cell
      {...props}
      isDisabled={props.instock? false : true}
      cellContentView={
        <View style={styles.subtitleCellRowView}>
          <View style={styles.subtitleCellTitleAndSubtitle}>
            <Text style={props.instock? styles.cellHeaderNormal : styles.cellHeaderDisabled}>
              {props.productTitle}
            </Text>
            {/* Displays 'Out of stock!' instead of detailed product description if the product is out of stock */}
            { props.instock && props.productSubtitle ? (
                <Text style={[styles.menuSubtitleCellSubtitle]}>
                  {props.productSubtitle}
                </Text>
            ) : (
              props.instock? null: <Text style={styles.outOfStockMessage}>Out of stock!</Text>
            )}
            
          </View>
          <View style={styles.menuSubtitleCellPriceContainer}>
            <Text style={props.instock? styles.menuSubtitleCellPrice : styles.menuSubtitleCellPriceDisabled}>
              £{props.productPrice}
            </Text>
          </View>
        </View>
      }
    />
  );

  return (
    <View>
      {/* Add a back button */}
      <View style={styles.backButtonView}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => { navigation.goBack() }}
        >
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.scrollView}>
        <TableView>
          {
            // Inside the TableView iterate through "items", creating a new Section each time.
            route.params.items.map((item, idx) => (
              <Section
                key={idx}
                header={item.title}
                headerTextColor="#ed3507"
                headerTextStyle={styles.menuSectionHeaderTextStyle}
              >
                {
                  item.contents.map((product, idx2) => {
                    return (
                      <CustomCellWithSubtitleAndRightDetail
                        key={idx2}
                        productTitle={product.title}
                        productSubtitle={product.subtitle}
                        // Makes sure that 0s are displayed after price up to 2 decimal places
                        productPrice={product.price.toFixed(2)}
                        instock = {product.instock}
                      />
                    );
                  })
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
  scrollView: {
    marginBottom: "18%"
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
  },
  menuSectionHeaderTextStyle: {
    fontSize: 16
  },
  cellHeaderNormal : {
    color: "darkorange",
    fontSize: 16
  },
  cellHeaderDisabled: {
    color: "lightgrey"
  },
  subtitleCellRowView: {
    flexDirection: "row",
    // Stretches View across the whole cell!
    flex: 1,
    justifyContent: "space-between"
  },
  subtitleCellTitleAndSubtitle: {
    alignSelf: "flex-start",
  },
  menuSubtitleCellSubtitle: {
    fontSize: 12,
    color: "#808080"
  },
  outOfStockMessage: {
    fontSize: 12,
    color: 'darkgrey'
  },
  // Position the price in the custom-menu cell at the right of the custom cell View
  menuSubtitleCellPriceContainer: {
    position: "absolute",
    right: 0,
    bottom: 0
  },
  menuSubtitleCellPrice: {
    fontSize: 14,
    color: "darkgrey"
  },
  menuSubtitleCellPriceDisabled:
  {
    fontSize: 14,
    color: 'lightgrey'
  }
});
