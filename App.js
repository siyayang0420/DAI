/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Mid from './comps/Mid'
import TopSiya from './comps/Top-Siya'
import Bot from './comps/Bot'


function App(){
  return (
    <View>

      <TopSiya />
      <Mid />
      <Bot />
    </View>
  );
};

export default App;
