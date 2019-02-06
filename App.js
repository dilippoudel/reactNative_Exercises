import React from 'react';
import { StyleSheet, Alert, View, TextInput, Button, Text } from 'react-native';
import ListItem from './components/listItem';

export default class App extends React.Component {
  state = {
    placeName : '',
    places: []
  }
  placeHandler = (val) => {
    this.setState({
      placeName: val
    })
  }
  handleSubmit = () => {
    if(this.state.placeName === ""){
      Alert.alert("Add the item.")
    }
    else{
      this.setState(prevState => {
        return {
          places: [...this.state.places, prevState.placeName]
        }
      })
    }
  }
  handleDelete = () => {
    this.setState({places: [], placeName:""})
  }
  render() {
    const placeOutput = this.state.places.map((place,i) => (
      <ListItem key = {i} placeName = {place}/>
    ))
    return (
      <View style={styles.container}>
      <View style = {styles.inputContainer}>
        <TextInput 
        style = {styles.placeInput}
        onChangeText = {this.placeHandler}
        placeholder = "Add Shopping Lists"
        value = {this.state.placeName}/>
        <Button 
        style = {styles.placeButton} 
        title = "Add"
        onPress = {this.handleSubmit}/>
         <Button 
        style = {styles.placeButton} 
        title = "Clear"
        onPress = {this.handleDelete}/>
      </View>
      <View>
        <Text style = {{fontSize: 20}}>Shopping Lists:</Text>
      </View>
      <View style = {styles.listContainer}>
        {placeOutput}
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  inputContainer: {
    //flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between', 
    alignItems: 'center'
  },
  placeInput: {
    width: '70%'
  },
  placeButton: {
    width: '30%'
  },
  listContainer: {
   width: "100%",
  }
});
