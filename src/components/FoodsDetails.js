import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
const FoodsDetails = props => {
	return (
		<Card>
			<CardSection>
				<View>
					<Image style={styles.thumbnaiStyles} source={{ uri: props.foods.thumbnail }} />
				</View>

				<View style={styles.headerContentStyle}>
					<Text style={{ fontSize: 20 }}>{props.foods.title}</Text>
					<Text style={{ fontSize: 15 }}>{props.foods.ingredients}</Text>
				</View>
			</CardSection>
		</Card>
	);
};
export default FoodsDetails;
const styles = StyleSheet.create({
	headerContentStyle: {
		flexDirection: 'column',
		justifyContent: 'space-around',
	},
	thumbnaiStyles: {
		height: 50,
		width: 50,
	},
});
