import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import WeatherIcon from './WeatherIcon';
import { Colors } from '../constants/colors';
import { useWeather } from '../context/WeatherContext';
import moment from 'moment';

interface IWeatherData {
  dt_txt?: string;
  weather: any;
  main?: any;
  dt?: string;
}

const Item = ({ dt_txt, weather, main }: IWeatherData) => {
  const date = moment(dt_txt).format('Do MMM');
  return (
    <View style={styles.weatherExtraInfo}>
      <Text style={styles.otherDataValueText}>{date}</Text>
      <WeatherIcon small={true} type={weather[0].main} />
      <Text style={styles.otherDataText}>
        {parseInt(main.temp)}
        <Text style={styles.tempmodeText}> °C</Text>
      </Text>
    </View>
  );
};

const FourDaysList = () => {
  const renderItem = ({ item }: { item: IWeatherData }) => <Item {...item} />;
  const weather = useWeather();
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.weatherState}>Next four days 🌦️ </Text>
      </View>
      <FlatList
        data={weather?.currentWeatherData?.slice(1)}
        renderItem={renderItem}
        keyExtractor={item => item.dt!}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
    borderRadius: 30,
  },
  weatherExtraInfo: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 120,
    width: 100,
    backgroundColor: Colors.NAV_BACKGROUND,
    borderRadius: 20,
    marginHorizontal: 5,
  },
  otherDataText: {
    fontSize: 14,
    color: 'rgba(256,256,256,0.55)',
    marginTop: 10,
    textTransform: 'capitalize',
  },
  weatherState: {
    color: 'rgba(256,256,256,0.55)',
    fontSize: 16,
    alignSelf: 'center',
    textTransform: 'uppercase',
    fontWeight: '600',
    letterSpacing: 2,
    marginVertical: 5,
  },
  tempmodeText: {
    color: 'rgba(256,256,256,0.4)',
  },
  otherDataValueText: {
    fontSize: 12,
    color: 'rgba(256,256,256,0.9)',
    marginBottom: 10,
  },
});

export default FourDaysList;
