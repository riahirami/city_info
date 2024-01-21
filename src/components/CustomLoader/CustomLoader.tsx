import React from 'react';
import {View} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';

import {customLoaderStyles} from './customLoaderStyles';
import {colors} from '../../utils/colors';
import {LOADER_SIZE} from '../../utils/constants';

interface CustomLoaderProps {
  size?: 'large' | 'small';
  height?: number | string;
  paddingHorizontal?: number | string;
  color?: string;
}

const CustomLoader = ({
  size,
  height,
  paddingHorizontal,
  color,
}: CustomLoaderProps): JSX.Element => {
  return (
    <View
      style={{
        ...customLoaderStyles.loader,
        height: height ?? 'auto',
        paddingHorizontal: paddingHorizontal ?? 0,
      }}
      pointerEvents="box-none">
      <ActivityIndicator
        color={color ?? colors.PRIMARY}
        size={size ?? LOADER_SIZE}
      />
    </View>
  );
};

export default CustomLoader;
