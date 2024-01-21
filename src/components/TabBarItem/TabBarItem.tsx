import React from 'react';
import {View, Text, type ImageSourcePropType, Image} from 'react-native';

import {colors} from '../../utils/colors';

import styles from './tabBarItemStyles';

export interface TabBarItemProps {
  title: string;
  icon: ImageSourcePropType;
  isFocused: boolean;
}

const TabBarItem: React.FC<TabBarItemProps> = ({
  title,
  icon,
  isFocused,
}): JSX.Element => {
  return (
    <View style={styles.container}>
      <Image
        source={icon}
        style={{
          ...styles.icon,
          tintColor: (isFocused && colors.PRIMARY) || colors.BLACK,
        }}
      />
      <Text
        style={{
          ...styles.title,
          color: (isFocused && colors.PRIMARY) || colors.BLACK,
        }}>
        {title}
      </Text>
    </View>
  );
};

export default TabBarItem;
