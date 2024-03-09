import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import Card from '../components/Card';
import {restaurantData} from '../constants/data';
import HeaderComponent from '../components/BackHeader';

const ViewAll = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <HeaderComponent title="Satisfy your Cravings" />
      {restaurantData.map((data, index) => (
        <Card item={data} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FAF9F6',
    paddingHorizontal: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default ViewAll;
