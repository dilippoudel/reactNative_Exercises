import * as React from 'react';

//import { Constants } from 'expo';

import {
  AsyncStorage,
  StyleSheet,
  Text,
  TextInput,
  Button,
  View,
} from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: null,
      youPut: null,
      msg:null,
      highScore:null,
      msgDefault: 'Guess a number between 1-10',
    };
  }
  saveData = () => {
    const { counter } = this.state;
    let myArray = {
      counter: counter + 1,
    };
    AsyncStorage.setItem('myArray', JSON.stringify(myArray));
  };
  showHighestScore = async () => {
    this.saveData();
    let myArray = await AsyncStorage.getItem('myArray');
    let data = JSON.parse(myArray);
    this.setState({
      highScore: 'Highest Score: ' + data.counter + ' guesses!',
    });
  };
  reset = () => {
    this.setState({
      msgDefault: 'Guess a number between 1-10',
      counter:null,
      highScore:null,
      
    });
  };
  compare = () => {
    const randm = Math.floor(Math.random() * 10) + 1;
    this.setState({
      counter: this.state.counter + 1,
    });
    if (parseInt(this.state.youPut) > randm) {
      this.setState({
        msg: 'is too high',
      });
    } else if (parseInt(this.state.youPut) < randm) {
      this.setState({
        msg: ' is too low!',
      });
    } else {
      this.setState({
        msg: ', Correct!!',
       
      });
      this.showHighestScore();
      this.reset();
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.msgDefault}</Text>
        <Text>
          Your guess is {this.state.youPut} {this.state.msg}
        </Text>
        <TextInput
          name="youPut"
          style={{ width: 200, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={youPut => this.setState({ youPut })}
          value={this.state.youPut}
         keyboardType={'numeric'}
        />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Button onPress={this.compare} title="Guess me" />
          <Button onPress={this.reset} title="Reset" />
        </View>

        <Text>{this.state.highScore} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 90,
  },
});
