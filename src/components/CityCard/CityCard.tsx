import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './cityCardStyles.phone';
import {City} from '../../models/City';
import {icons} from '../../utils/icons';

interface CityCardProps {
  city: City;
}

const CityCard: React.FC<CityCardProps> = ({city}) => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.titleStyle}>
        <Text style={styles.cityDetailsText}>Details about your search :</Text>
        <View style={styles.detailsStyle}>
          <Text style={styles.cityDetailsText}>
            <Text style={styles.subtitleStyle}>Name: </Text>
            {city.name}
          </Text>
          <Text style={styles.cityDetailsText}>
            <Text style={styles.subtitleStyle}>Population: </Text>
            {city.population}
          </Text>
          <Text style={styles.cityDetailsText}>
            <Text style={styles.subtitleStyle}>Country: </Text>
            {city.country}
          </Text>
          <Text style={styles.cityDetailsText}>
            <Text style={styles.subtitleStyle}> Longitude: </Text>
            {city.longitude}
          </Text>
          <Text style={styles.cityDetailsText}>
            <Text style={styles.subtitleStyle}>Latitude: </Text>
            {city.latitude}
          </Text>
        </View>
      </View>
      <Image style={styles.imageStyle} source={icons.CITY_FOUNDED} />
    </View>
  );
};

export default CityCard;
