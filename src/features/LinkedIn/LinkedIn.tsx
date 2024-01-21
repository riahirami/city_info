import React from 'react';
import WebView from 'react-native-webview';
import WebviewComponent from '../../components/WebviewComponent/WebviewComponent';

/**
 * Represents LinkedIn screen ui
 * @returns JSX.Element
 */
interface LinkedInProps {
  onBackPress: () => void;
  webviewRef: React.RefObject<WebView>;
}

const LinkedIn: React.FC<LinkedInProps> = ({
  onBackPress,
  webviewRef,
}): JSX.Element => {
  return (
    <WebviewComponent
      onBackPress={onBackPress}
      headerTitle={'Linkedin'}
      webviewUri={'http://www.linkedin.com/in/rami-riahi/'}
      webviewRef={webviewRef}
    />
  );
};

export default LinkedIn;
