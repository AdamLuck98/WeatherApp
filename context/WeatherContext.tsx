import React, { createContext, useContext, useEffect, useState } from 'react';
import * as Location from 'expo-location';
import Toast from 'react-native-root-toast';

const API_KEY = process.env.EXPO_PUBLIC_WEATHER_KEY;

interface WeatherContextProps {
  currentWeatherData: any;
  fetchWeatherDataForCity: (city: string) => Promise<void>;
  hasFetchError: boolean;
  loading: boolean;
  todayWeatherData: any;
}

const WeatherContext = createContext<WeatherContextProps | null>(null);

export const useWeather = () => useContext(WeatherContext);

function parseFiveDaysData(data: any) {
  const fiveDaysData: any = [];
  data.list.forEach((data: any, index: number) => {
    if (index % 8 === 0) {
      fiveDaysData.push(data);
    }
  });

  return fiveDaysData;
}

const WeatherContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [currentWeatherData, setCurrentWeatherData] = useState(null);
  const [todayWeatherData, setTodayWeatherData] = useState(null);
  const [hasFetchError, setHasFetchError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        alert('Permission is required');
        return;
      }

      try {
        const location = await Location.getCurrentPositionAsync({});
        const { latitude, longitude } = location.coords;
        const weatherDataURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`;
        const response = await fetch(weatherDataURL);
        const data = await response.json();
        let parsedFiveDaysData = parseFiveDaysData(data);
        setCurrentWeatherData(parsedFiveDaysData);
        setTodayWeatherData(parsedFiveDaysData[0]);
      } catch (error) {
        setHasFetchError(true);
        Toast.show('Something went wrong 😞', {
          duration: Toast.durations.LONG,
          position: Toast.positions.BOTTOM,
          shadow: true,
          animation: true,
          hideOnPress: true,
          delay: 0,
        });
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const fetchWeatherDataForCity = async (city: string) => {
    try {
      setLoading(true);
      const weatherDataURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`;
      const response = await fetch(weatherDataURL);
      const data = await response.json();
      checkForError(data);
      let parsedFiveDaysData = parseFiveDaysData(data);
      setCurrentWeatherData(parsedFiveDaysData);
      setTodayWeatherData(parsedFiveDaysData[0]);
    } catch (error) {
      console.log('Fetch error:', error);
      setHasFetchError(true);
    } finally {
      setLoading(false);
    }
  };

  const checkForError = (data: any) => {
    if (data.cod > 400) {
      setHasFetchError(true);
      Toast.show(data.message, {
        duration: Toast.durations.LONG,
        position: Toast.positions.BOTTOM,
        shadow: true,
        animation: true,
        hideOnPress: true,
        delay: 0,
      });
      throw new Error(data);
    }
    //Show Alert message
  };

  const contextValue = React.useMemo(
    () => ({
      currentWeatherData,
      fetchWeatherDataForCity,
      hasFetchError,
      loading,
      todayWeatherData,
    }),
    [
      currentWeatherData,
      fetchWeatherDataForCity,
      hasFetchError,
      loading,
      todayWeatherData,
    ]
  );

  return (
    <WeatherContext.Provider value={contextValue}>
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherContextProvider;
