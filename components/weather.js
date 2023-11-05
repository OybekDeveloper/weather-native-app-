import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import SearchLoader from "./searchLoader";

const weatherOption = {
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#DCDCDC", "#00BFFF"],
    title: "Amazing weather",
    description: "Go for a walk , stop staying at home!",
  },
  Thunderstrom: {
    iconName: "weather-lightning",
    gradient: ["#141E30", "#243B55"],
    title: "Sit at home",
    description: "Do you see what's on the street?",
  },
  Drizzle: {
    iconName: "weather-rainy",
    gradient: ["#3a7bd5", "#3a6073"],
    title: "Take a umbrella",
    description: "Perhaps the rain will increase soon  ",
  },
  Rain: {
    iconName: "weather-pouring",
    gradient: ["#000046", "#1cb5e0"],
    title: "It's raining outside ",
    description: "So there will be a rainbow soon!",
  },
  Snow: {
    iconName: "snowflake",
    gradient: ["#83a4d4", "#b6fbff"],
    title: "There is a snow outside",
    description: "Dress warmly, make snowmen ",
  },
  Dust: {
    iconName: "weather-windy-variant",
    gradient: ["#b79891", "#94716b"],
    title: "Dusty",
    description: "Better close the window ",
  },
  Smoke: {
    iconName: "weather-windy",
    gradient: ["#56ccf2", "#2e80ed"],
    title: "One the streed smog :(",
    description: "I do not advise going out unnecessarily",
  },
  Haze: {
    iconName: "weather-hazy",
    gradient: ["#3e5151", "#desba4"],
    title: "There's a snow outside!",
    description: "Dress warmly , make snowmen ",
  },
  Mist: {
    iconName: "weather-fog",
    gradient: ["#606c88", "#3f4c6b"],
    title: "You can't see a damn thing  in the fog ",
    description: "Do you see what's on the street ",
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#757f9a", "#d7dde8"],
    title: "The clouds",
    description: "Go for a walk , stop staying at home ",
  },
};

export default function Weather({ temp, name, condition, setWeather, searchIsLoading }) {
  const [query, setQuery] = useState("");
  return (
    <LinearGradient
      colors={weatherOption[condition].gradient}
      style={styles.mainContainer}
    >
      <StatusBar barStyle={"light-content"} />
      <View style={styles.container}>
        <MaterialCommunityIcons
          name={weatherOption[condition].iconName}
          size={96}
          color="white"
        />
        <View style={styles.tempDecContainer}>
          <Text style={styles.temp}>{temp}°C </Text>
          <Text style={styles.temp}>| {name}</Text>
        </View>
      </View>
      {searchIsLoading && <SearchLoader />}
      <View style={{ ...styles.container, ...styles.textContainer }}>
        <Text style={styles.title}>{weatherOption[condition].title}</Text>
        <Text style={styles.description}>
          {weatherOption[condition].description}
        </Text>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.input}
            placeholder="City name"
            value={query}
            onChangeText={(text) => setQuery(text)}
          />
          <Button
            style={styles.btn}
            title="Search"
            onPress={() => setWeather(query)}
          />
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  tempDecContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  temp: {
    fontSize: 42,
    fontWeight: "600",
    color: "white",
    textAlign: "center",
  },
  textContainer: {
    flex: 1,
    paddingHorizontal: 30,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  title: {
    fontSize: 38,
    color: "white",
    fontWeight: "300",
    marginBottom: 10,
    textAlign: "left",
  },
  description: {
    fontSize: 24,
    color: "white",
    fontWeight: "600",
    textAlign: "left",
  },
  searchContainer: {
    width: "100%",
    flexDirection: "row",
    backgroundColor: "#F0F8FF",
    justifyContent: "space-between",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  input: {
    width: "70%",
  },
  btn: {
    width: "30%",
  },
});
