import {StyleSheet, Text, TouchableOpacity, View, Modal} from 'react-native';
import React, {useState} from 'react';
import SearchBar from '../components/SearchBar';
import Header from '../components/Header';
import CarouselComponent from '../components/crousel';
import {restaurantData} from '../constants/data';
const Home = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedCuisines, setSelectedCuisines] = useState([]);

  const [selectedProteins, setSelectedProteins] = useState([]);
  const [filteredData, setFilteredData] = useState(restaurantData);
  const toggleProteinOption = protein => {
    const isSelected = selectedProteins.includes(protein);

    if (isSelected) {
      setSelectedProteins(prevSelected =>
        prevSelected.filter(selected => selected !== protein),
      );
    } else {
      setSelectedProteins(prevSelected => [...prevSelected, protein]);
    }
  };
  const onPress = () => {
    setModalVisible(!modalVisible);
  };

  const toggleCuisineOption = cuisine => {
    const isSelected = selectedCuisines.includes(cuisine);

    if (isSelected) {
      setSelectedCuisines(prevSelected =>
        prevSelected.filter(selected => selected !== cuisine),
      );
    } else {
      setSelectedCuisines(prevSelected => [...prevSelected, cuisine]);
    }
  };

  const toggleOption = option => {
    const isSelected = selectedOptions.includes(option);

    if (isSelected) {
      setSelectedOptions(prevSelected =>
        prevSelected.filter(selected => selected !== option),
      );
    } else {
      setSelectedOptions(prevSelected => [...prevSelected, option]);
    }
  };

  const filterData = () => {
    let filteredData = restaurantData;
    console.log(filteredData);
    if (selectedOptions.length > 0) {
      filteredData = filteredData.filter(restaurant =>
        selectedOptions.includes(restaurant.diet),
      );
    }

    if (selectedCuisines.length > 0) {
      filteredData = filteredData.filter(restaurant =>
        selectedCuisines.includes(restaurant.cuisines),
      );
    }

    if (selectedProteins.length > 0) {
      filteredData = filteredData.filter(restaurant =>
        selectedProteins.includes(restaurant.proteins),
      );
    }
    console.log(filteredData, 'filter data');
    setModalVisible(false);
    setFilteredData(filteredData);
  };

  return (
    <View style={styles.container}>
      <Header />
      <SearchBar onPress={onPress} />
      <View style={styles.innerContainer}>
        <View style={styles.lefttext}>
          <Text style={styles.heading}>Satisfy Your Cravings</Text>
          <Text style={styles.subheading}>
            Restaurants that suits to your palate
          </Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('View')}>
          <Text style={{color: '#122C3E'}}>View All</Text>
        </TouchableOpacity>
      </View>
      <CarouselComponent data={filteredData} />
      {/*MModal container */}
      <Modal animationType="slide" visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.heading2}>Filters</Text>
          </View>
          <View style={styles.optionContainer}>
            <View>
              <Text style={styles.optionsheading}>Diet</Text>
              <View style={styles.optionsContainer}>
                <TouchableOpacity
                  style={[
                    styles.option,
                    selectedOptions.includes('Vegetarian') &&
                      styles.selectedOption,
                  ]}
                  onPress={() => toggleOption('Vegetarian')}>
                  <Text
                    style={[
                      styles.optionText,
                      selectedOptions.includes('Vegetarian') &&
                        styles.selectedText,
                    ]}>
                    Vegetarian
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.option,
                    selectedOptions.includes('Non-Vegetarian') &&
                      styles.selectedOption,
                  ]}
                  onPress={() => toggleOption('Non-Vegetarian')}>
                  <Text
                    style={[
                      styles.optionText,
                      selectedOptions.includes('Non-Vegetarian') &&
                        styles.selectedText,
                    ]}>
                    Non-Vegetarian
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.option,
                    selectedOptions.includes('Vegan') && styles.selectedOption,
                  ]}
                  onPress={() => toggleOption('Vegan')}>
                  <Text
                    style={[
                      styles.optionText,
                      selectedOptions.includes('Vegan') && styles.selectedText,
                    ]}>
                    Vegan
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View>
              <Text style={styles.optionsheading}>Cuisines</Text>
              <View style={styles.optionsContainer}>
                <View style={styles.optionsContainer}>
                  <TouchableOpacity
                    style={[
                      styles.option,
                      selectedCuisines.includes('Indian') &&
                        styles.selectedOption,
                    ]}
                    onPress={() => toggleCuisineOption('Indian')}>
                    <Text
                      style={[
                        styles.optionText,
                        selectedCuisines.includes('Indian') &&
                          styles.selectedText,
                      ]}>
                      Indian
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[
                      styles.option,
                      selectedCuisines.includes('Mediterranean') &&
                        styles.selectedOption,
                    ]}
                    onPress={() => toggleCuisineOption('Mediterranean')}>
                    <Text
                      style={[
                        styles.optionText,
                        selectedCuisines.includes('Mediterranean') &&
                          styles.selectedText,
                      ]}>
                      Mediterranean
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View>
              <Text style={styles.optionsheading}>Proteins</Text>
              <View style={styles.optionsContainer}>
                <TouchableOpacity
                  style={[
                    styles.option,
                    selectedProteins.includes('Beef') && styles.selectedOption,
                  ]}
                  onPress={() => toggleProteinOption('Beef')}>
                  <Text
                    style={[
                      styles.optionText,
                      selectedProteins.includes('Beef') && styles.selectedText,
                    ]}>
                    Beef
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.option,
                    selectedProteins.includes('Chicken') &&
                      styles.selectedOption,
                  ]}
                  onPress={() => toggleProteinOption('Chicken')}>
                  <Text
                    style={[
                      styles.optionText,
                      selectedProteins.includes('Chicken') &&
                        styles.selectedText,
                    ]}>
                    Chicken
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={styles.footer}>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text style={{color: '#000', fontWeight: '600', fontSize: 16}}>
                Cancel
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.applyBtn} onPress={filterData}>
              <Text style={{color: '#fff', fontWeight: '600', fontSize: 16}}>
                Apply Filters
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FAF9F6 ',
    paddingHorizontal: 20,
  },
  innerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
  },
  heading: {
    color: '#122C3E',
    fontWeight: 'normal',
    fontSize: 20,
    fontFamily: 'Urbanist',
  },
  heading2: {
    color: '#122C3E',
    fontWeight: 'normal',
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'Urbanist',
  },

  subheading: {
    color: '#122C3E',
    fontSize: 11.5,
    fontFamily: 'Urbanist',
  },
  centeredView: {
    // backgroundColor: '#fff',
    flex: 1,
    display: 'flex',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  modalView: {
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  optionContainer: {
    paddingVertical: 16,

    gap: 50,
  },
  optionsheading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#122C3E',
  },
  optionsContainer: {
    flexDirection: 'row',
  },
  option: {
    borderWidth: 1,
    borderColor: '#122C3E',
    borderRadius: 30,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginHorizontal: 4,
    alignItems: 'center',
  },
  selectedOption: {
    backgroundColor: '#122C3E',
  },
  optionText: {
    fontSize: 16,
    color: '#122C3E',
  },
  selectedText: {
    fontSize: 16,
    color: '#fff',
  },
  footer: {
    borderTopWidth: 1,
    display: 'flex',
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  applyBtn: {
    backgroundColor: '#122C3E',
    paddingHorizontal: 50,
    paddingVertical: 15,
    borderRadius: 10,
  },
});
