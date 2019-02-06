import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { firstInput: '', secondInput: '', results: '' };
	}
	addNumber = () => {
		this.setState({ results: parseInt(this.state.firstInput) + parseInt(this.state.secondInput) });
	};
	subtractNumber = () => {
		this.setState({ results: parseInt(this.state.firstInput) - parseInt(this.state.secondInput) });
	};
	render() {
		return (
			<View style={styles.container}>
				<View>
					<Text style={styles.text}>Calculator</Text>
				</View>
				<Text style={styles.text}>Result: {this.state.results}</Text>
				<View />
				<View>
					<TextInput
						style={styles.inputText}
						onChangeText={firstInput => this.setState({ firstInput })}
						value={this.state.firstInput}
						keyboardType = 'numeric'
					/>
				</View>
				<View>
					<TextInput
						style={styles.inputText}
						onChangeText={secondInput => this.setState({ secondInput })}
						value={this.state.secondInput}
						keyboardType = 'numeric'
					/>
				</View>
				<View>
					<View style={styles.buttonText}>
						<View style={styles.button}>
							<Button onPress={this.addNumber} title="+" />
						</View>
						<View style={styles.button}>
							<Button onPress={this.subtractNumber} title="-" />
						</View>
					</View>
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
