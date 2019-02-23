import React from 'react';
import {View, Keyboard } from 'react-native';
import EuroConverter from './src/components/EuroConverter';
import Header from './src/components/header'
import Button from './src/components/Button';
import Images from './src/components/Images';

const App = () => {
  return(
    <View style = {{flex: 1}}>
    <Header headerText = {"Euro Converter"}/>
    <Images />
      <EuroConverter/>
     <View style = {{justifyContent: 'flex-end'}}><Button onPress = {()=> {Keyboard.dismiss()}}/></View>
    </View>
  )
}
export default App
