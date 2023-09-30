import { Dimensions, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Colors } from '../constants/colors';
import { useWeather } from '../context/WeatherContext';

const { width } = Dimensions.get('window');

type Props = {};

const TodayWeatherDetails = (props: Props) => {
  const weather = useWeather();

  return (
    <View style={styles.otherData}>
      <View style={styles.weatherExtraInfo}>
        <MaterialCommunityIcons
          name='water-outline'
          size={36}
          color='rgba(256,256,256,0.9)'
        />
        <Text style={styles.otherDataValueText}>
          {weather?.todayWeatherData?.main?.humidity}{' '}
          <Text style={styles.unitText}>%</Text>
        </Text>
        <Text style={styles.otherDataText}>Humidity</Text>
      </View>
      <View style={styles.weatherExtraInfo}>
        <MaterialCommunityIcons
          name='weather-windy'
          size={36}
          color='rgba(256,256,256,0.9)'
        />
        <Text style={styles.otherDataValueText}>
          {weather?.todayWeatherData?.wind?.speed}{' '}
          <Text style={styles.unitText}>km/h</Text>
        </Text>
        <Text style={styles.otherDataText}>Wind</Text>
      </View>
      <View style={styles.weatherExtraInfo}>
        <MaterialCommunityIcons
          name='weather-pouring'
          size={36}
          color='rgba(256,256,256,0.9)'
        />
        <Text style={styles.otherDataValueText}>
          {weather?.todayWeatherData?.main?.pressure}{' '}
          <Text style={styles.unitText}>hPa</Text>
        </Text>
        <Text style={styles.otherDataText}>pressure</Text>
      </View>
    </View>
  );
};

export default TodayWeatherDetails;

const styles = StyleSheet.create({
  otherData: {
    alignContent: 'center',
    flexDirection: 'row',
    width: width - 30,
    alignSelf: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
    borderRadius: 30,
    backgroundColor: Colors.BACKGROUND,
  },
  weatherExtraInfo: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 120,
    width: '30%',
    backgroundColor: Colors.NAV_BACKGROUND,
    borderRadius: 20,
    marginHorizontal: 5,
  },
  otherDataValueText: {
    fontSize: 14,
    color: 'rgba(256,256,256,0.9)',
  },
  otherDataText: {
    fontSize: 14,
    color: 'rgba(256,256,256,0.55)',
    marginTop: 10,
    textTransform: 'capitalize',
  },
  unitText: {
    fontSize: 11,
    color: 'rgba(256,256,256,0.55)',
  },
});
