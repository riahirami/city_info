import React from 'react';
import {Text, View} from 'react-native';
import styles from './cityCardStyles.phone';
import {City} from '../../models/City';

interface CityCardProps {
  city: City;
}

const CityCard: React.FC<CityCardProps> = ({city}) => {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.cityDetailsText}>Details about your search :</Text>
      <Text style={styles.cityDetailsText}>Name: {city.name}</Text>
      <Text style={styles.cityDetailsText}>Population: {city.population}</Text>
      <Text style={styles.cityDetailsText}>Country: {city.country}</Text>
      <Text style={styles.cityDetailsText}>Longitude: {city.longitude}</Text>
      <Text style={styles.cityDetailsText}>Latitude: {city.latitude}</Text>
    </View>
  );
};

export default CityCard;
