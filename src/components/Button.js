import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
const Button = ({onPress})=> {
  return(
    <TouchableOpacity 
    onPress = {onPress}
    style = {styles.buttonStyles}>
    <Text style = {styles.textStyles}>Find</Text>
    </TouchableOpacity>
  )
}
export default Button;
const styles = StyleSheet.create({
  textStyles: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyles: {
    flex: 1, 
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderColor: '#007aff',
    borderWidth: 1,
    borderRadius: 5,
    marginLeft: 5,
    marginRight: 5
  }
})