import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

// Specify {navigation} passes in the property props.navigation
const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Hi There!</Text>
      <Button 
        onPress={() => navigatio.navigate('Components')}
        title="Go to Components Demo"
      />      
      <Button 
      onPress={() => navigation.navigate('List')}
      title="Go to List Demo"
      />
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
