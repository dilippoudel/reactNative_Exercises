import React from 'react';
import { View, Text, TextInput, Picker } from 'react-native';
import API_KEY from './api';
class EuroConverter extends React.Component {
  state = {
    ratesValue: [],
    selectedKey: 'EUR',
    rateCurrency: 0,
    selectedValue: 0,
    amount: '1',
  };

  componentDidMount() {
    fetch(
      `http://data.fixer.io/api/latest?access_key=8f53c0112b37c99d6f240341ba3e3cb1`
    )
      .then(response => response.json())
      .then(responseData => this.setState({ ratesValue: responseData.rates }));
  }
  
helperMethod(){
    const obj = this.state.ratesValue;
    const k = this.state.selectedKey;
    const c = parseFloat(obj[k]);
    const result = this.state.amount / c;
    return  (<View>
          <Text style={{ marginTop: 40, fontSize: 30, marginLeft: 70 }}>{result.toFixed(2)} €</Text>
        </View>);
}


  render() {
   
    return (
      <View>

        <View style = {{justifyContent: 'center' , alignItems: 'center', flexDirection: 'row', marginTop: 5}}>
          <TextInput
            style={styles.inputField}
            placeholder = "Amount"
            keyboardType = "numeric"
            onChangeText={text => this.setState({ amount: text })}
            value={this.state.amount}
          />
         <Text style = {{fontSize : 20}}>Select Currency</Text>
        </View>

        <View style = {{alignItems: 'flex-end', marginRight: 20}}>
          <Picker
            selectedValue={this.state.selectedKey}
            style={{ height: 50, width: 100 }}
            onValueChange={(itemValue, itemIndex) =>
            this.setState({ selectedKey: itemValue })
            }>
            {Object.keys(this.state.ratesValue).map(labeel => (
              <Picker.Item key = {labeel} label={labeel} value={labeel} />
            ))}
          </Picker>
          
          </View>

{this.helperMethod()}
               
      </View>
    );
  }
}

export default EuroConverter;
const styles = {
  keyPicker: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 30,
  },
  inputField: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 10,
    height: 30,
    width: '50%',
    fontSize: 30,
    alignItems: 'center',
  },
};
