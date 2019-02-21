import React from 'react';
import { View , ScrollView} from 'react-native';
import Header from './src/components/header';
import InputText from './src/components/InputText';
const App = () => {
	return (
    <View style = {{flex:1}}>
			<Header />
		<ScrollView>
      <InputText />
		</ScrollView>
    </View>
    
	)
};
export default App;
