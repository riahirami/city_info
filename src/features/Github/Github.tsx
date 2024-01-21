import React from 'react';
import {WebView} from 'react-native-webview';
import WebviewComponent from '../../components/WebviewComponent/WebviewComponent';

/**
 * Represents Github screen ui
 * @returns JSX.Element
 */
interface GithubProps {
  onBackPress: () => void;
  webviewRef: React.RefObject<WebView>;
}
const Github: React.FC<GithubProps> = ({
  onBackPress,
  webviewRef,
}): JSX.Element => {
  return (
    <WebviewComponent
      onBackPress={onBackPress}
      headerTitle={'Github'}
      webviewUri={'http://github.com/riahirami/'}
      webviewRef={webviewRef}
    />
  );
};

export default Github;
