import React from 'react';
import { useNavigation } from '@react-navigation/native';
import 'intl';
import 'intl/locale-data/jsonp/en';

import { useHousesStore } from '../../../services/stores';
import { CardTitle, CardDescription, CardHighLightText } from '../../atoms';

import {
  CardContainer,
  CardImage,
  TextContainer,
  TextContainerLeft,
  TextContainerRight,
} from './styles';

export const HouseCard = ({ imgSource, title, description, price, item }) => {
  const navigation = useNavigation();

  const { setSelectedHouse } = useHousesStore();

  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  const onClickItemContainer = () => {
    setSelectedHouse(item);
    // navigation.navigate('Detail', { selectedHouse: item });
    navigation.navigate('Detail');
  };

  return (
    <CardContainer
      onPress={() => {
        onClickItemContainer();
      }}>
      <CardImage source={{ uri: imgSource }} />
      <TextContainer>
        <TextContainerLeft>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </TextContainerLeft>
        <TextContainerRight>
          <CardHighLightText>{formattedPrice.format(price)}</CardHighLightText>
        </TextContainerRight>
      </TextContainer>
    </CardContainer>
  );
};
