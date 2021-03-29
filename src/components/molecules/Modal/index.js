import React from 'react';
import { View } from 'react-native';

import { Title, IconButton } from '../../atoms';
import {
  ModalContainer,
  ModalBackground,
  BottomScreenContainer,
  HeaderContainer,
} from './styles';

export const Modal = ({ visible, onClose, title, children }) => {
  return (
    <View>
      <ModalContainer transparent visible={visible} onRequestClose={onClose}>
        <ModalBackground>
          <BottomScreenContainer>
            <HeaderContainer>
              <Title>{title}</Title>
              <IconButton iconName="close" onPress={onClose} />
            </HeaderContainer>

            {children}
          </BottomScreenContainer>
        </ModalBackground>
      </ModalContainer>
    </View>
  );
};
