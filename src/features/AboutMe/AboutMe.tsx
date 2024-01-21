import React from 'react';
import {Image, Text, View} from 'react-native';
import {icons} from '../../utils/icons';
import styles from './aboutMeStyles.phone';
import {
  GITHUB_SCREEN,
  LINKEDIN_SCREEN,
  MY_RESUME_SCREEN,
} from '../../utils/screenNames';
import CustomButton from '../../components/CustomButton/CustomButton';
import {colors} from '../../utils/colors';
/**
 * Represents AboutMe screen ui
 * @returns JSX.Element
 */
interface AboutMeProps {
  navigateToWebViewScreen: (webView: string) => void;
}

const AboutMe: React.FC<AboutMeProps> = ({
  navigateToWebViewScreen,
}): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <Image source={icons.MY_AVATAR} style={styles.avatar} />
        <Text style={styles.nameText}>Riahi Rami</Text>
        <Text style={styles.descriptionText}>Software engineer</Text>
        <Text style={styles.descriptionText}>Web/Mobile developer</Text>
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton
          onPress={() => {
            navigateToWebViewScreen(LINKEDIN_SCREEN);
          }}
          icon={icons.LINKEDIN}
          title={'LinkedIn'}
          borderColor={colors.LINKEDIN_BLUE}
          titleColor={colors.LINKEDIN_BLUE}
        />
        <CustomButton
          title="GitHub"
          icon={icons.GITHUB}
          onPress={() => {
            navigateToWebViewScreen(GITHUB_SCREEN);
          }}
        />
        <CustomButton
          title="My resume"
          icon={icons.RESUME}
          titleColor={colors.BLACK}
          borderColor={colors.BLACK}
          onPress={() => {
            navigateToWebViewScreen(MY_RESUME_SCREEN);
          }}
        />
      </View>
    </View>
  );
};

export default AboutMe;
