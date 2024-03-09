import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import {images} from '../constants/images';
import Carousel from 'react-native-snap-carousel';

const CarouselComponent = ({data}) => {
  const carouselRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const {Heart, BookMark, BackImg} = images;
  const getActiveSlideAlignment = () => {
    if (activeSlide === 0) {
      return 'start';
    }
    return 'start';
  };

  const renderItem = ({item, index}) => {
    return (
      <View style={styles.containerdiv}>
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
                <Text style={styles.restaurantName}>
                  {item.restaurant_name}
                </Text>
                <View style={styles.tagsContainer}>
                  <Text style={styles.tag}>{item.diet}</Text>
                  <Text style={styles.tagSeparator}>|</Text>
                  <Text style={styles.tag}>{item.cuisines}</Text>
                  <Text style={styles.tagSeparator}>|</Text>
                  <Text style={styles.tag}>Meat </Text>
                </View>
              </View>
            </View>
          </ImageBackground>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Carousel
        ref={carouselRef}
        data={data}
        renderItem={renderItem}
        sliderWidth={Dimensions.get('window').width}
        itemWidth={170}
        onSnapToItem={index => setActiveSlide(index)}
        activeSlideAlignment={getActiveSlideAlignment()}
        inactiveSlideOpacity={1}
        inactiveSlideScale={1}
      />
    </View>
  );
};

export default CarouselComponent;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'black',
    // height: 200,
    // marginRight: 20,
  },
  cardContainer: {
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 16,
    marginRight: 15,
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
    marginHorizontal: 1,
  },
});
