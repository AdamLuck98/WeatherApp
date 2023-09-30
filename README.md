# Welcome to WeatherWhisk

Your simple solution to staying weather-aware throughout your business week!


## Installations

Run following commands

 1. `npm install` 
 2. `cp .env.example .ios.env && \`
-  Create an account and generate your own API key at [OpenWeather](https://openweathermap.org/) in order to get the weather data. Add your API key value against  **EXPO_PUBLIC_WEATHER_KEY**
 2. `npx expo start`


## Third party libraries

 - `expo-location`
It allows for accurate retrieval of the user's current location
 - `react-native-root-toast`
It helps representing floating toast

## Folder Structure

```
├───Project Directory/
└─── assets / -> App Assets
└─── components / -> Reusable/Isolated Components
└─── constants / -> App Constant
└─── context / -> Weather Context
└─── screens / -> Main Container
```


## Design Patterns used

 - Provider Pattern ( Context API )
 - Container Component Design
 - Hooks


 ## Future Plans
 - Show Details against each day in a bottomsheet 
 - Multiple Locations Support
 - Show 14 days forecast
 - Push Notification to inform against harsh weather
 - Personal Account + Personalization
 - Work/School time sync which will help manage ones travelling ( e:g It going to rainy carry an umbrella )
 