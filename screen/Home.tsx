import {
  ActivityIndicator,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { Colors } from '../constants/colors';
import { StatusBar } from 'expo-status-bar';
import SearchCity from '../components/SearchCity';
import FourDaysList from '../components/FourDaysList';
import TodayWeatherDetails from '../components/MainWeatherDetails';
import { useWeather } from '../context/WeatherContext';
import WeatherMain from '../components/WeatherMain';
import Loader from '../components/Loader';

const { height, width } = Dimensions.get('window');

export default function Home() {
  const weather = useWeather();
  return (
    <View style={styles.container}>
      <StatusBar style='inverted' />

      <SearchCity />
      {weather?.loading ? <Loader /> : <WeatherMain />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BACKGROUND,
  },
  date: {
    marginTop: '15%',
    marginLeft: '7%',
  },
  dateText: {
    color: 'rgba(256,256,256,0.63)',
    fontSize: 12,
  },
  location: {
    marginTop: 3,
    marginLeft: '6%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    color: 'rgba(256,256,256,0.9)',
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 4,
  },
  weatherIconView: {
    display: 'flex',
    alignItems: 'center',
    // backgroundColor:'red',
    marginVertical: 30,
  },
  tempText: {
    color: 'rgba(256,256,256,0.9)',
    fontSize: 60,
    alignSelf: 'center',
  },
  tempmodeText: {
    color: 'rgba(256,256,256,0.4)',
  },
  weatherState: {
    color: 'rgba(256,256,256,0.55)',
    fontSize: 16,
    alignSelf: 'center',
    textTransform: 'uppercase',
    fontWeight: '600',
    letterSpacing: 2,
  },
  DailyData: {
    flex: 1,
    width: width - 30,
    alignSelf: 'center',
    borderRadius: 30,
  },
});
