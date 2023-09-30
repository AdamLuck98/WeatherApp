import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { Colors } from '../constants/colors';
import { MaterialIcons } from '@expo/vector-icons';
import { useWeather } from '../context/WeatherContext';

type Props = {};

const SearchCity = (props: Props) => {
  const [searchText, setSearchText] = useState('');

  const weather = useWeather();

  const submit = () => {
    weather?.fetchWeatherDataForCity(searchText);
    setSearchText('');
  };
  const changeFun = (val: string) => {
    setSearchText(val);
  };
  return (
    <View style={styles.searchCity}>
      <TextInput
        style={styles.search}
        placeholder='Search Cities'
        placeholderTextColor={'rgba(256,256,256,0.4)'}
        keyboardType='web-search'
        value={searchText}
        selectionColor={Colors.BACKGROUND}
        onChangeText={changeFun}
        returnKeyType='search'
        onSubmitEditing={submit}
      />
      <TouchableOpacity onPress={submit} style={styles.searchBtn}>
        <MaterialIcons name='search' size={24} color='#fff' />
      </TouchableOpacity>
    </View>
  );
};

export default SearchCity;

const styles = StyleSheet.create({
  searchCity: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: '15%',
    marginHorizontal: '4%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  search: {
    backgroundColor: Colors.NAV_BACKGROUND,
    padding: 10,
    flex: 1,
    borderRadius: 30,
    color: 'rgba(256,256,256,0.9)',
    paddingLeft: 25,
  },
  searchBtn: {
    height: 50,
    width: 50,
    backgroundColor: Colors.NAV_BACKGROUND,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    marginLeft: 10,
  },
});
