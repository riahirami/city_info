import React from 'react';
import {View} from 'react-native';

import CustomLoader from '../../components/CustomLoader/CustomLoader';
import ScreenHeader from '../../components/ScreenHeader/ScreenHeader';

import styles from './webviewComponentStyles';
import WebView from 'react-native-webview';
import {SafeAreaView} from 'react-native-safe-area-context';

export interface WebviewComponentProps {
  webviewUri: string;
  onBackPress?: () => void;
  headerTitle: string;
  fromBottomSheet?: boolean;
  webviewRef: React.RefObject<WebView>;
}

const renderLoading = (): JSX.Element => (
  <View style={styles.loaderContainer}>
    <CustomLoader size={'large'} />
  </View>
);

const WebviewComponent: React.FC<WebviewComponentProps> = ({
  webviewUri,
  headerTitle,
  onBackPress,
  webviewRef,
}) => (
  <SafeAreaView style={styles.container}>
    <ScreenHeader title={headerTitle} onBackPress={onBackPress} />
    <WebView
      ref={webviewRef}
      source={{uri: webviewUri}}
      style={styles.container}
      startInLoadingState
      renderLoading={renderLoading}
      nestedScrollEnabled
    />
  </SafeAreaView>
);

export default WebviewComponent;
