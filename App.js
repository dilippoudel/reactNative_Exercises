import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {randomNums: null, guessNums: null, count: 0}
  }
  generateRandom(){
    const random = Math.floor(Math.random()*100) + 1;
    this.setState({randomNums: random})
  }
 
  numsCheck = () => { 
    this.generateRandom();
    if(this.state.randomNums !== this.state.guessNums){
      this.setState((prevState)=> {
        return {count: prevState.count + 1}
      });
      return this.state.count;
    }
    return this.state.count;
  }  

  render() {
    const {guessNums, randomNums, count} = this.state;
    const a = parseInt(guessNums);
    const b = parseInt(randomNums);
    const c = !randomNums ? null : <Text>Try Again</Text>;
    const result = (a === b)
    ? <Text style = {{fontWeight: 'bold', fontSize: 20}}>Congratulation! Your guessed is matched in {count} attempts.</Text> 
    : a > b ? <Text>Your guess is too high.</Text>
    : a < b ? <Text>Your guess is too low.</Text>
    : <Text>{c}</Text>
    return (
      <View style={styles.container}>
        <Text style = {{fontWeight: 'bold', flex: 1/10}}>Guess a number between (1 - 100)</Text>
        <View>
        <TextInput 
        onChangeText = {(guessNums) => this.setState({guessNums})}
        value = {this.state.guessNums}
        keyboardType = 'numeric'
         style = {{width: 200, borderColor: 'gray', borderWidth: 1, flex: 1/5}}/>
        </View>
        <View style = {{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor:'skyblue'}}>
        <View style={{flex: 1/3}}>
      <Button  onPress = {this.numsCheck} title = "Make Guess"></Button>

        </View>

        </View>
      <Text>Generate random number: {this.state.randomNums}</Text>
      {result}
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
  }
});
