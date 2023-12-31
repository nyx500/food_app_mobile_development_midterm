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
// Shopping cart: <a href="https://www.flaticon.com/free-icons/smart-cart" title="smart cart icons">Smart cart icons created by Freepik - Flaticon</a>
// React useContext tutorials: https://www.w3schools.com/react/react_usecontext.asp, https://dmitripavlutin.com/react-context-and-usecontext/
// Bin logo: <div> Icons made by <a href="https://www.flaticon.com/authors/lakonicon" title="lakonicon"> lakonicon </a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com'</a></div>

import { StatusBar } from 'expo-status-bar';
import { Alert, Button, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// Import Navigation libraries
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// Import TableView components
import { Cell, Section, TableView } from 'react-native-tableview-simple';
import React, { createContext, useEffect, useState, useContext } from 'react';


// LOGO CUSTOM COMPONENT FOR NAVIGATION HEADER
// Replacing the title with a custom component
// Attribution: https://reactnavigation.org/docs/headers/
// Color scheme: #ed3507
function LogoTitle({navigation}) {
  return (
    <TouchableOpacity onPress={()=>{navigation.navigate("Home")}}>
    <Image
      style={styles.logoImage}
      source={require("./images/owl_logo.png")}
    />
    </TouchableOpacity>
  );
}

function LogoCart() {
  return (
    <Image
      style={styles.cartLogo}
      source={require('./images/shopping_cart.png')}
    />
  );
}

// CUSTOM NAVIGATION HEADER CONTAINING LOGO WITH TITLE AS PROP PARAMETER
function Header({ navigation, screenTitle }) {
  const { priceInBasket, clearBasket } = useContext(ShoppingCartContext);
  return (
    <View style={styles.headerView}>
        <LogoTitle navigation={navigation} />
      <Text style={styles.headerTextLogo}>
        FoodWol:
      </Text>
      <Text style={styles.headerTextContent}>
        {screenTitle}
      </Text>
      <View style={styles.cart} >
        <TouchableOpacity 
          style={styles.cartLogoContainer}
          onPress={()=> {navigation.navigate("Basket");}}
        >
          <LogoCart/>
        </TouchableOpacity>
        <Text style={styles.cartText}>£{priceInBasket.toFixed(2)}</Text>
        <TouchableOpacity style={styles.clearButton} onPress={()=>{clearBasket()}}>
          <Text style={[styles.whiteText, styles.clearButtonText]}>Clear</Text>
        </TouchableOpacity>
      </View>
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
      <ScrollView style={styles.scrollViewHome}>
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
                            "title": "Coconut sticky rice",
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
                            "title": "Vegan chocolate fondant",
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

  const { priceInBasket, currentRestaurant, itemsInBasket, addToBasket, clearBasket } = useContext(ShoppingCartContext);

  // A custom cell component which permits having a subtitle AND a right-detail for the price
  // In react-native-tableview-simple, you are restricted to only having one "detail", which is
  // unsuitable for having a menu-item with both a subtitle and a price on the right-hand side!
  const CustomCellWithSubtitleAndRightDetail = (props) => (
    <Cell
      {...props}
      isDisabled={props.instock? false : true}
      // Adds the desired amount and the current restaurant to the basket
      onPress={() => {
        // Create item-object storing product name and price to pass into addToBasket
        let item = {
          "id": itemsInBasket.length,
          "name": props.productTitle,
          "price": props.productPrice,
        }
        addToBasket(props.productPrice, props.currentRestaurant, item); 
      }}
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
          <Text style={[styles.whiteText, styles.backButtonText]}>Back</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.scrollViewMenu}>
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
                        productPrice={product.price}
                        instock = {product.instock}
                        currentRestaurant = {route.params.restaurantName}
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

// Basket Screen
function BasketScreen({ route, navigation }) {
  // Pass in the context to globally update the shopping cart on all the screens
  const { priceInBasket, currentRestaurant, itemsInBasket, addToBasket, clearBasket, removeItemFromBasket } = useContext(ShoppingCartContext);
  return (
    <View>
      <View style={styles.backButtonView}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => { navigation.goBack() }}
        >
          <Text style={[styles.whiteText, styles.backButtonText]}>Back</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        { itemsInBasket.length == 0 ? (
          <View style={styles.emptyCart}>
            <Text style={styles.emptyCartText}>Your shopping cart is currently empty.</Text>
          </View>) :
          (
          <TableView>
          <Section
            header={currentRestaurant}
            headerTextColor="#ed3507"
            headerTextStyle={styles.menuSectionHeaderTextStyle}
          >
          {
            itemsInBasket.map((product, idx) => {
              return (
                <Cell
                  key={idx}
                  title={product.name}
                  cellStyle='RightDetail'
                  style={{flexWrap: "wrap"}}
                  detail={
                    <View style={styles.cartDetailBox}>
                      <Text style={styles.cartDetailBoxPriceText}>{`£${product.price.toFixed(2)}`}</Text>
                      {/* cell detail styles only allow abs values not %-values */}
                      <TouchableOpacity 
                        style={styles.removeItemButton}
                        onPress={()=>{
                          Alert.alert(
                            // Prompt the user to confirm the removal of the item
                            "Remove item?",
                            "Press 'OK' to remove the item from your shopping cart and 'Cancel' to dismiss",
                            [
                              {
                                text: "OK",
                                onPress: () => {
                                  removeItemFromBasket(product.id, product.price);
                                }
                              },
                              {
                                text: 'Cancel',
                                // iOS only
                                style: 'cancel'
                              }
                            ],
                            // Android only
                            {
                              cancelable: true
                            }
                          )
                        }}
                        >
                        <Image style={styles.binLogo} source={require('./images/bin.png')}/>
                      </TouchableOpacity>
                    </View>
                  }
                  />
              );})
            }
            </Section>
          <View style={styles.clearButtonAtBottomOfCartContainer}>
            <TouchableOpacity 
              style={styles.clearButtonAtBottomOfCart}
              onPress={()=>{
                Alert.alert(
                  "Are you sure you want to clear the basket?",
                  "Press 'OK' to clear and 'Cancel' to dismiss",
                  [
                      // Press OK to clear the basket and to add the item from the new restaurant into the basket
                      {
                        text: "OK",
                        onPress: () => {
                          clearBasket();
                          console.log("Cleared");
                        }
                      },
                      // Press Cancel to do nothing and to keep the items from old restaurant in the shopping cart
                      {
                        text: 'Cancel',
                        // iOS only
                        style: 'cancel'
                      }
                    ],
                    // Android only: allow canceling by clicking outside the alert
                    {
                      cancelable: true
                    }
                )
              }}
            >
                <Text style={styles.whiteText}>Clear Basket</Text>
            </TouchableOpacity>
          </View>
          </TableView>
        )}
        
      </ScrollView>
    </View>
  )
}

const ShoppingCartContext = createContext();
const Stack = createStackNavigator();

export default function App() {

  // Stores the total price of items in the shopping cart and uses React context hooks to display this on every screen
  const [priceInBasket, setPriceInBasket] = useState(0);
  const [itemsInBasket, setItemsInBasket] = useState([]);
  // This variable stores which restaurant is being ordered from currently
  const [currentRestaurant, setCurrentRestaurant] = useState("");

  const clearBasket = () => {
    setPriceInBasket(0);
    setCurrentRestaurant("");
    setItemsInBasket([]);
  };
  
  const removeItemFromBasket = (id, price) => {
    // Ref: https://www.w3schools.com/jsref/jsref_filter.asp
    // Re-creates and updates itemsInBasket array in the context to contain only the items excluding the entered ID
    setItemsInBasket((previousItems) => previousItems.filter((item) => item.id !== id));
    setPriceInBasket((prevPrice) => prevPrice - price);
    // Clear all the restaurant settings etc. if no items left
    if (itemsInBasket.length === 0)
    {
      clearBasket();
    }
  };

  const addToBasket = (amount, current_restaurant, item) => {
    if (currentRestaurant.length != 0 && current_restaurant != currentRestaurant)
    {
      Alert.alert(
        "New restaurant selected!", // title
        "Click OK to clear basket and add item from new restaurant", // subtitle
        // Alert buttons array
        [
          // Press OK to clear the basket and to add the item from the new restaurant into the basket
          {
            text: "OK",
            onPress: () => {
              clearBasket();
              setPriceInBasket((prevPrice) => prevPrice + amount);
              setCurrentRestaurant(()=> current_restaurant);
              setItemsInBasket((prevItems) => [...prevItems, item]);
            }
          },
          // Press Cancel to do nothing and to keep the items from old restaurant in the shopping cart
          {
            text: 'Cancel',
            // iOS only
            style: 'cancel'
          }
        ],
        // Android only: allow canceling by clicking outside the alert
        {
          cancelable: true
        }
      );
    } else {
      setPriceInBasket((prevPrice) => prevPrice + amount);
      setCurrentRestaurant(()=> current_restaurant);
      setItemsInBasket((prevItems) => [...prevItems, item]);
    }
    
  };

  // Print out console message after item added to basket!
  useEffect(() => {
    console.log(currentRestaurant);
    console.log(itemsInBasket);
  }, [currentRestaurant, itemsInBasket]);

  const contextValues = {
    priceInBasket,
    currentRestaurant,
    itemsInBasket,
    addToBasket,
    clearBasket,
    removeItemFromBasket
  };

  return (
    <ShoppingCartContext.Provider value={contextValues}>
      <NavigationContainer>
        <Stack.Navigator>
          {/* Styling the navigation headers with custom styles attribution: https://reactnavigation.org/docs/headers/ */}
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={
              ({ navigation }) => ({
                // Use custom components for logo and header (see beginning of this file)
                header: () => <Header navigation={navigation} screenTitle="Restaurants" priceInBasket={priceInBasket}/>,
              })
            }
          />
          <Stack.Screen
            name="Menu"
            component={MenuScreen}
            options={({ navigation, route }) =>
            ({
              // Header displays logo followed by restaurant name for the menu page
              header: () => <Header navigation={navigation} screenTitle={route.params.restaurantName} priceInBasket={priceInBasket}/>
            })}
          />
          <Stack.Screen
            name="Basket"
            component={BasketScreen}
            options={({ navigation, route }) =>
            ({
              // Header displays logo followed by restaurant name for the menu page
              header: () => <Header navigation={navigation} screenTitle="Cart" priceInBasket={priceInBasket}/>
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ShoppingCartContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  whiteText: {
    color: "white"
  },
  logoImage:
  {
    width: 80,
    height: 80,
    aspectRatio: 1
  },
  headerView: {
    flexDirection: "row",
    flexWrap: "wrap",
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
  cart: {
    position: "absolute",
    top: "10%",
    right: 0,
    justifyContent: "flex-start",
    alignItems: "center",
    // This lets the logo be sized in % rather than absolute terms. Parent of the logo needs real dimensions for % to be used
    // Using a blue border to highlight this TouchableOpacity's size helps with this
    width: "26%",
  },
  cartLogoContainer:
  {
    marginBottom: "-20%"
  },
  cartLogo:
  {
    width: "60%",
    height: "60%",
    aspectRatio: 1,
    
  },
  cartText: {
    fontWeight: "bold",
    marginLeft: "7%",
    color: "#ed3507",
  },
  clearButton: {
    marginLeft: "7%",
    marginTop: "8%",
    marginBottom: "2%",
    backgroundColor: "#bc3e06",
    borderRadius: 8,
    paddingVertical: "8%",
    paddingHorizontal: "12%",
  },
  scrollViewHome: {
    marginTop: "8%"
  },
  scrollViewMenu: {
    marginBottom: "18%",
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
  },
  // Cart page styling
  emptyCart: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: "15%"
  },
  emptyCartText: {
    fontWeight: "bold",
    fontSize: 16
  },
  // Right-detail container for Shopping Cart screen cells containing item price and "Remove" button/Touchable Opacity
  cartDetailBox: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center"
  },
  cartDetailBoxPriceText: {
    // cell detail disallows using %-based responsive margins & padding due to 'availableWidth is indefinite error'!
    marginHorizontal: 10
  },
  removeItemButton: {
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "#EC0D00",
    paddingVertical: 4,
    paddingHorizontal: 4,
    marginHorizontal: 10,
    backgroundColor: "#FF5349"
  },
  binLogo: {
    width:25,
    height: 25
  },
  clearButtonAtBottomOfCartContainer: {
    flex: 1,
    justifyContent:"center",
    alignItems: "center"
  },
  clearButtonAtBottomOfCart:
  {
    backgroundColor:"#bc3e06",
    paddingVertical:"2%",
    paddingHorizontal: "8%",
    borderRadius: 6
  }
});
