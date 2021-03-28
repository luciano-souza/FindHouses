import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { SectionView, SectionText, SectionImage } from './styles';
import SplashLogo from '../../assets/img/SevenHousesLogo.png';

export const SplashScreen = () => {
  const navigator = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigator.navigate('Home');
    }, 3000);
  }, []);

  return (
    <SectionView>
      <StatusBar translucent backgroundColor="transparent" />
      <SectionImage source={SplashLogo} resizeMode="contain" />
    </SectionView>
  );
};
