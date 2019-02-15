import React, { Component } from 'react';
import { View, Text, StyleSheet, Button , TextInput, FlatList} from 'react-native';
class HomeScreen extends Component {
  state = {firstInput: 0, secondInput : 0, result : 0, data : []}
  static navigationOptions = { title: 'Home'};
  addNumber = () => {
		const sum = parseInt(this.state.firstInput) + parseInt(this.state.secondInput);
		const sumtext = `${this.state.firstInput} + ${this.state.secondInput}  =  ${sum}`;
		this.setState({ 
    result: sum,
    data: [...this.state.data,  sumtext] });
	};
  subtractNumber = () => {
		const minus = parseInt(this.state.firstInput) - parseInt(this.state.secondInput);
    
		const minustext = `${this.state.firstInput} - ${this.state.secondInput}  =  ${minus}`;
		this.setState({ 
      result: minus,
      data: [...this.state.data, minustext ]});
	};
  render() {
    const {navigate}= this.props.navigation
    const result = <FlatList data={this.state.data} renderItem={({ item }) => <Text>{item.key}</Text>} />
		return (
			<View style={styles.container}>
				<View>
					<Text style={styles.text}>Calculator</Text>
				</View>
				<Text style={styles.text}>Result: {this.state.result}</Text>
				<View />
				<View>
					<TextInput
            name = "first"
						style={styles.inputText}
						onChangeText={firstInput => this.setState({ firstInput })}
						value={this.state.firstInput}
						keyboardType="numeric"
					/>
			
					<TextInput
            name = "second"
						style={styles.inputText}
						onChangeText={secondInput => this.setState({ secondInput })}
						value={this.state.secondInput}
						keyboardType="numeric"
					/>
            <Button onPress = {()=> navigate('History', {
              data: this.state.data
            })} title = "History"/>
				
					<View style={styles.buttonText}>
						<View style={styles.button}>
							<Button onPress={this.addNumber} title="+" />
						</View>
						<View style={styles.button}>
							<Button onPress={this.subtractNumber} title="-" />
              
						</View>
					</View>
				</View>
			{result}
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
	inputText: {
		marginTop: 10,
		height: 30,
		width: 200,
		padding: 5,
		borderColor: 'gray',
		borderWidth: 1,
	},
	text: {
		fontSize: 25,
	},
	buttonText: {
		marginTop: 10,
		marginLeft: 10,
		padding: 10,
		flexDirection: 'row',
		justifyContent: 'space-around',
		backgroundColor: 'lightgray',
	},
	button: {
		marginHorizontal: 20,
	},
});
export default HomeScreen;