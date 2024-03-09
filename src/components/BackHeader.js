import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {images} from '../constants/images';
import {useNavigation} from '@react-navigation/native';
const HeaderComponent = ({title}) => {
  const navigation = useNavigation();
  const {Back} = images;
  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
        <Image source={Back} style={styles.icon} />
      </TouchableOpacity>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 30,

    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0', // Set your desired border color
  },
  backButton: {
    marginRight: 16,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'medium',
    fontFamily: 'Urbanist',
    color: '#000000',
  },
  icon: {
    width: 18,
    height: 18,
  },
});

export default HeaderComponent;
