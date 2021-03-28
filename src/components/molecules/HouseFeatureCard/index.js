import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';

import { DetailText } from '../../atoms';

import { FeatureCardContainer } from './styles';

export const HouseFeatureCard = ({ iconName, featureText, iconLib }) => {
  return (
    <FeatureCardContainer>
      {iconLib === 'fontawesome' && (
        <IconFontAwesome name={iconName} color="white" size={36} />
      )}

      {iconLib === 'materialcommunity' && (
        <Icon name={iconName} color="white" size={36} />
      )}

      <DetailText>{featureText}</DetailText>
    </FeatureCardContainer>
  );
};
