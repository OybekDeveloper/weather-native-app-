import { useEffect, useState } from "react";
import Loader from "./components/loader";
import Weather from "./components/weather";
import * as Location from "expo-location";
import axios from "axios";
import { Alert } from "react-native";

export default function App() {
  const API_KEY = "c5011a72e95711f0ee5c2f89e78cb8c3";
  const [isLoading, setIsLoading] = useState(true);
  const [searchIsLoading, setSearchIsLoading] = useState(false);
  const [location, setLocation] = useState(null);

  const getWeather = async (longitude, latitude) => {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );
    setLocation(data);
    setIsLoading(false);
  };
  const setWeather = async (query) => {
    setSearchIsLoading(true);
    try{
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${API_KEY}&units=metric`
      );
      setLocation(data);
      setIsLoading(false);
      setSearchIsLoading(false);
    }catch(error){
      setSearchIsLoading(false)
      Alert.alert("Information not found, please try again");
    }
    
  };

  const getLocation = async () => {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      console.log(status);
      if (status !== "granted") {
        Alert.alert("Permission to access location was denied");
        return;
      }
      let {
        coords: { longitude, latitude },
      } = await Location.getCurrentPositionAsync({});
      getWeather(longitude, latitude);
    } catch (error) {
      Alert.alert(" I can't find your current location , so bad :(  ");
    }
  };

  useEffect(() => {
    getLocation();
  }, []);
  return isLoading ? (
    <Loader />
  ) : (
    <Weather
      searchIsLoading={searchIsLoading}
      setWeather={setWeather}
      temp={location.main.temp}
      name={location.name}
      condition={location.weather[0].main}
    />
  );
}
