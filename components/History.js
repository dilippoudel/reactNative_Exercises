import React, { Component } from 'react';
import { Text, StyleSheet, View, FlatList } from 'react-native';

class History extends Component {
    static navigationOptions = {title: "History"};
    render() {
  const {params} = this.props.navigation.state;
        return (
            <View style = {styles.container}>
            <Text style = {{fontSize: 25}}>
            History
            </Text>
            <FlatList
          data={params.data}
          renderItem={({ item }) => <Text>{item}</Text>}
        />
            </View>
        );
    }
}
const styles = StyleSheet.create({
   container: {
     flex:1,
     justifyContent: 'flex-start',
     alignItems: 'center'
   }
})

export default History;