import React from 'react';
//Contexto de temas do styled-components
import 'react-native-gesture-handler'
import 'intl';
import 'intl/locale-data/jsonp/pt-BR'
import { ThemeProvider } from 'styled-components'
import AppLoading from 'expo-app-loading';

import { NavigationContainer } from '@react-navigation/native'

import { 
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins'

import theme from './src/global/styles/theme';
import { AppRoutes } from './src/routes/app.routes';


import { Register } from './src/screens/Register';

export default function App() {
  const [ fontsLoaded ] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  });

  if (!fontsLoaded){
    return <AppLoading />
  }
  
  return( 
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </ThemeProvider>
  )
}