import React from 'react';
import { StyleSheet } from 'react-native';
import{createAppContainer, createStackNavigator} from'react-navigation';
import HomeScreen from './components/HomeScreen';
import History from './components/History';

const MyApp = createStackNavigator({
 Home: {screen: HomeScreen},
 History: {screen: History}
});

const AppContainer = createAppContainer(MyApp)

export default class App extends React.Component {
  
  render() {
    return (
      <AppContainer style = {styles.container}/>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
