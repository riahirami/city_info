import React from 'react';
import {Image, Text, View} from 'react-native';
import {icons} from '../../utils/icons';
import styles from './emptyResultStyles.phone';
import {EMPTY_RESULT_TEXT} from '../../utils/constants';
interface EmptyResultProps {}

const EmptyResult: React.FC<EmptyResultProps> = ({}) => {
  return (
    <View style={styles.emptyListContainer}>
      <Image source={icons.EMPTY_RESULT} style={styles.emptyListImage} />
      <Text style={styles.emptyListText}>{EMPTY_RESULT_TEXT}</Text>
    </View>
  );
};

export default EmptyResult;
