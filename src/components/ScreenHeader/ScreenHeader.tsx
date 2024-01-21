import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {icons} from '../../utils/icons';
import styles from './screenHeaderStyles.phone';

interface ScreenHeaderProps {
  onBackPress?: () => void;
  title: string;
  hasBackButton?: boolean;
}

const ScreenHeader: React.FC<ScreenHeaderProps> = ({
  title,
  onBackPress,
  hasBackButton = true,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          onBackPress?.();
        }}>
        {hasBackButton && (
          <Image source={icons.ARROW_LEFT} style={styles.arrowLeftIcon} />
        )}
      </TouchableOpacity>
      <Text style={styles.screenHeaderTitle}>{title}</Text>
    </View>
  );
};

export default ScreenHeader;
