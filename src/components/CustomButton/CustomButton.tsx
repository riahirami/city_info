import React from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import styles from './customButtonStyles.phone';
import {colors} from '../../utils/colors';
interface CustomButtonProps {
  icon?: any;
  onPress: () => void;
  disabled?: boolean;
  title: string;
  titleColor?: string;
  borderColor?: string;
  iconColor?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  icon,
  onPress,
  disabled = false,
  title,
  titleColor = colors.BLACK,
  borderColor = colors.BLACK,
  iconColor,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.buttonContainer,
        {borderColor: !disabled ? borderColor : colors.GREY_LIGHT},
      ]}>
      <Image
        source={icon}
        style={[
          styles.iconStyle,
          {tintColor: !disabled ? iconColor : colors.GREY_LIGHT},
        ]}
      />
      <Text
        style={[
          styles.titleStyle,
          {
            color: !disabled ? titleColor : colors.DISABLED_BUTTON_TEXT,
          },
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
