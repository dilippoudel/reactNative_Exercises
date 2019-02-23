import React from 'react';
import {Image, View} from 'react-native';
const Images = () => {
  return(
<View>
<Image 
  style={{height : 100, width : 200, alignItems: 'center', marginLeft: 60}}
  source={require('./Image/euro_converter.jpg')}
   />
</View>

  )
}
export default Images;