import React from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import {images} from '../constants/images';
const SearchBar = ({onPress}) => {
  const {Search, filter} = images;
  return (
    <View style={styles.searchContainer}>
      <TouchableOpacity style={styles.iconContainer}>
        <Image source={Search} height="100%" width="100%" />
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        placeholder="Search..."
        placeholderTextColor="#888"
      />
      <TouchableOpacity style={styles.iconContainer} onPress={onPress}>
        <Image source={filter} height="100%" width="100%" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 5,
    paddingVertical: 5,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  iconContainer: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    height: 40,
    color: '#333',
  },
});

export default SearchBar;
