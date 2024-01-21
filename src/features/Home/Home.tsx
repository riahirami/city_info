import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ImageBackground, Text, View} from 'react-native';
import {icons} from '../../utils/icons';
import styles from './homeStyles.phone';
/**
 * Represents Home screen ui
 * @returns JSX.Element
 */
interface HomeProps {}

const Home: React.FC<HomeProps> = ({}): JSX.Element => {
  return (
    <SafeAreaView style={styles.safeAreaStyle}>
      <View style={styles.container}>
        <ImageBackground
          source={icons.MARSEILLE}
          resizeMode="cover"
          style={styles.image}>
          <Text style={styles.text}>City Info</Text>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

export default Home;
