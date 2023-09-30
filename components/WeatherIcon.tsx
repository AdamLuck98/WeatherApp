import React from 'react';
import { Image } from 'react-native';
import { weatherIconMap } from '../constants/weatherIconMap';

type Props = {
  type: string;
  small?: boolean;
};

const WeatherIcon = ({ type, small }: Props) => {
  if (weatherIconMap[type]) {
    return (
      <Image
        style={[
          small ? weatherIconMap[type].smStyle : weatherIconMap[type].style,
          {
            resizeMode: weatherIconMap[type].smStyle ? 'contain' : 'stretch',
          },
        ]}
        source={weatherIconMap[type].icon}
      />
    );
  }
};

export default WeatherIcon;
