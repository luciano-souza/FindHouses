import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { NavigationContainer } from '@react-navigation/native';

import { Navigator } from './routes';
import { theme } from './styles/theme';

const App = () => {
  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <StatusBar translucent backgroundColor={theme.colors.backgroundDark} />
        <Navigator />
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default App;

// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */

//  import React, { useEffect, useState } from 'react';
//  import {
//    SafeAreaView,
//    ScrollView,
//    StatusBar,
//    StyleSheet,
//    Text,
//    useColorScheme,
//    View,
//  } from 'react-native';

//  import axios from 'axios';

//  const App = () => {
//    // const [a, setA] = useState('aaaa');
//    const [a, setA] = useState({ title: 'Titulo' });
//    useEffect(() => {
//      async function getData() {
//        const response = await axios.get(
//          'https://jsonplaceholder.typicode.com/todos/1',
//        );
//        // console.log(response);
//        setA(response.data);
//      }
//      getData();
//    }, []);
//    return (
//      <SafeAreaView>
//        <View>
//          <Text>Hello World Home Mesmo {a.title}</Text>
//        </View>
//      </SafeAreaView>
//    );
//  };

//  export default App;
