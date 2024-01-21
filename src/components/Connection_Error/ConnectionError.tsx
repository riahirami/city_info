import React from 'react';
import {Image, Text, View} from 'react-native';
import {icons} from '../../utils/icons';
import {networkErrorMessage} from '../../utils/network';
import styles from './connectionErrorStyles.phone';
interface ConnectionErrorProps {
  errorText?: string;
}

const ConnectionError: React.FC<ConnectionErrorProps> = ({errorText}) => {
  return (
    <View style={styles.emptyListContainer}>
      <Image source={icons.NO_CONNECTION} style={styles.iconStyle} />
      <Text style={styles.emptyListText}>
        {errorText ? errorText : networkErrorMessage}
      </Text>
    </View>
  );
};

export default ConnectionError;
