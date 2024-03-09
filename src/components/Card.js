import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import {images} from '../constants/images';

const Card = ({item}) => {
  const {Heart, BookMark, BackImg} = images;

  return (
    <View style={styles.cardContainer}>
      <ImageBackground source={BackImg} style={styles.cardImage}>
        <View style={styles.innerContainer}>
          <View style={styles.topIcons}>
            <TouchableOpacity style={styles.iconContainer}>
              <Image source={Heart} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconContainer}>
              <Image source={BookMark} style={styles.icon} />
            </TouchableOpacity>
          </View>

          <View style={styles.bottomContent}>
            <Text style={styles.dishName}>{item.dish_name}</Text>
            <Text style={styles.restaurantName}>{item.restaurant_name}</Text>
            <View style={styles.tagsContainer}>
              <Text style={styles.tag}>{item.diet}</Text>
              <Text style={styles.tagSeparator}>|</Text>
              <Text style={styles.tag}>{item.cuisines}</Text>
              <Text style={styles.tagSeparator}>|</Text>
              <Text style={styles.tag}>{item.proteins} </Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 16,
    marginHorizontal: 5,
    width: '47%',
  },
  cardImage: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  topIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8,
  },
  iconContainer: {
    padding: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 999,
  },
  icon: {
    width: 18,
    height: 18,
  },
  bottomContent: {
    paddingHorizontal: 10,
    paddingBottom: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust background color for better contrast
  },
  dishName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#fff',
  },
  restaurantName: {
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  tagsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tag: {
    color: '#fff',
    fontSize: 11,
    fontWeight: 'bold',
  },
  tagSeparator: {
    color: '#fff',
    marginHorizontal: 3,
  },
});

export default Card;
