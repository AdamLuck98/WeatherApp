import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useWeather } from '../context/WeatherContext';
import WeatherIcon from '../components/WeatherIcon';
import TodayWeatherDetails from './MainWeatherDetails';
import FourDaysList from './FourDaysList';
import { Colors } from '../constants/colors';
type Props = {};

const WeatherMain = (props: Props) => {
  const weather = useWeather();
  return (
    <View style={styles.container}>
      <View style={[styles.weatherIconView]}>
        <WeatherIcon type={weather?.todayWeatherData?.weather[0]?.main} />
      </View>

      <View>
        <Text style={styles.weatherState}>
          {weather?.todayWeatherData?.weather[0]?.main}
        </Text>
      </View>

      <View>
        <Text style={styles.tempText}>
          {parseInt(weather?.todayWeatherData?.main?.temp)}
          <Text style={styles.tempmodeText}> °C</Text>
        </Text>
      </View>

      <TodayWeatherDetails />

      <FourDaysList />
    </View>
  );
};

export default WeatherMain;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BACKGROUND,
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
});
