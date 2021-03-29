import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import { IconButtonContainer } from './styles';

export const IconButton = ({ transparent, iconName, onPress, fill }) => {
  return (
    <IconButtonContainer onPress={onPress} transparent={transparent}>
      <Icon name={iconName} color={fill ? 'yellow' : 'white'} size={20} />
    </IconButtonContainer>
  );
};
