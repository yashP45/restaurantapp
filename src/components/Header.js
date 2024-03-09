import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Good Morning</Text>
      <Text style={styles.text}>Mr.Yash!</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
  },
  text: {
    fontFamily: 'Urbanist',
    fontSize: 18,
    color: '#272B33',
    // fontWeight: 'bold',
  },
});
