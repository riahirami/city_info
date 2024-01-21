import React, {useState} from 'react';

import {WELCOME_STEPS} from '../../utils/constants';

import {setIsFirstConnexion} from '../../store/features/global/globalSlice';
import {useAppDispatch} from '../../store/features/hooks';
import Welcome from './Welcome';

const WelcomeContainer = (): JSX.Element => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const dispatch = useAppDispatch();

  const onPressStart = async (): Promise<void> => {
    dispatch(setIsFirstConnexion({isFirstConnexion: false}));
  };
  return (
    <Welcome
      steps={WELCOME_STEPS}
      onPressStart={() => {
        void onPressStart();
      }}
      setCurrentIndex={setCurrentIndex}
      currentIndex={currentIndex}
    />
  );
};

export default WelcomeContainer;
