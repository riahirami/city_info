import React from 'react';
import WebviewComponent from '../../components/WebviewComponent/WebviewComponent';

/**
 * Represents MyResume screen ui
 * @returns JSX.Element
 */
interface MyResumeProps {
  onBackPress: () => void;
  webviewRef: React.RefObject<any>;
}

const MyResume: React.FC<MyResumeProps> = ({
  onBackPress,
  webviewRef,
}): JSX.Element => {
  const myResumeUri =
    'https://drive.google.com/file/d/1AFdJ_BVXb8fOtTzjq-mzqac-qPFR_tv6/view?usp=sharing';
  return (
    <WebviewComponent
      webviewUri={myResumeUri}
      headerTitle={'My resume'}
      webviewRef={webviewRef}
      onBackPress={onBackPress}
    />
  );
};

export default MyResume;
