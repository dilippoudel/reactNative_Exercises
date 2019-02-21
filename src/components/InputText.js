import React from 'react';
import { StyleSheet, Alert, View, TextInput, FlatList, Keyboard } from 'react-native';
import Button from './Button';
import FoodsDetails from './FoodsDetails';
class InputText extends React.Component {
	state = {
		search: '',
		foods: [],
	};

	handleSubmission = () => {
		fetch(`http://www.recipepuppy.com/api/?i=${this.state.search}`)
			.then(response => response.json())
			.then(responseData => this.setState({ foods: responseData.results }));
		Keyboard.dismiss();
	};

	renderFoods() {
		return this.state.foods.map(food => <FoodsDetails key={food.title} foods={food} />);
	}

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.inputContainer}>
					<TextInput
						style={styles.placeInput}
						onChangeText={val => this.setState({ search: val })}
						placeholder="Search an awesome food"
						value={this.state.search}
					/>
					<Button onPress={this.handleSubmission} />
				</View>
				<View>{this.renderFoods()}</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		padding: 10,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'flex-start',
	},
	inputContainer: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	placeInput: {
		width: '70%',
		borderWidth: 1,
		borderColor: '#007aff',
		backgroundColor: '#fff',
		height: 40,
		borderRadius: 5,
	},
});
export default InputText;
