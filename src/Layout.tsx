import React from 'react';
import {UIManager} from 'react-native';
import {Toast} from 'react-native-toast-message/lib/src/Toast';

import {TOAST_DURATION} from './utils/constants';
import {toastConfig} from './utils/customToastConfig/toastConfig';
import {isAndroidDevice} from './utils/helpers';
import {useAppSelector} from './store/features/hooks';
import {selectPopupConfig} from './store/features/popup/popupSlice';
import CustomPopup from './components/CustomPopup/CustomPopup';
import Navigation from './navigation/NavigationContainer';

if (isAndroidDevice() && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const Layout = (): JSX.Element => {
  const popupConfig = useAppSelector(selectPopupConfig);

  return (
    <>
      {popupConfig.isVisible && <CustomPopup popupConfig={popupConfig} />}
      <Navigation />
      <Toast
        autoHide={true}
        visibilityTime={TOAST_DURATION}
        config={toastConfig}
        position="top"
      />
    </>
  );
};

export default Layout;
