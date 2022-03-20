import React from 'react';
import { Text, StyleSheet,View,Button,TouchableOpacity } from 'react-native';
// or we can write props as {navigation}
const HomeScreen = (props) => {
  console.log(props.navigation)
  return (
  <View>
  <Text style={styles.text}>HomeScreen</Text>
  <Button
   title="Go to components demo" 
   onPress={()=>props.navigation.navigate('Component')}
   ></Button>
   <Button title="go to list demo" onPress={()=>props.navigation.navigate('List')}></Button>
   <TouchableOpacity
   onPress={()=>props.navigation.navigate('List')}>
     <Text>Go to list demo</Text>
   </TouchableOpacity>
  </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    color:"red",
    fontStyle:'italic',
  },
});

export default HomeScreen;
