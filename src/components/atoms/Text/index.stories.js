import styled from 'styled-components/native';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';

import {
  Title,
  CardTitle,
  CardDescription,
  CardHighLightText,
  DetailSectionTitle,
  DetailSubTitle,
  DetailTitle,
  DetailText,
  InputLabel,
} from './index';

const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.backgroundDark};
`;

const stories = storiesOf('Text', module);

stories.addDecorator(getStory => <Wrapper>{getStory()}</Wrapper>);

stories.add('Title', () => {
  const value = text('Title', 'Exemplo de title');
  return <Title>{value}</Title>;
});

stories.add('CardTitle', () => {
  const value = text('CardTitle', 'Exemplo de CardTitle');
  return <CardTitle>{value}</CardTitle>;
});

stories.add('CardDescription', () => {
  const value = text('CardDescription', 'Exemplo de CardDescription');
  return <CardDescription>{value}</CardDescription>;
});

stories.add('CardHighLightText', () => {
  const value = text('CardHighLightText', 'Exemplo de CardHighLightText');
  return <CardHighLightText>{value}</CardHighLightText>;
});

stories.add('DetailSectionTitle', () => {
  const value = text('DetailSectionTitle', 'Exemplo de DetailSectionTitle');
  return <DetailSectionTitle>{value}</DetailSectionTitle>;
});

stories.add('DetailSubTitle', () => {
  const value = text('DetailSubTitle', 'Exemplo de DetailSubTitle');
  return <DetailSubTitle>{value}</DetailSubTitle>;
});

stories.add('DetailTitle', () => {
  const value = text('DetailTitle', 'Exemplo de DetailTitle');
  return <DetailTitle>{value}</DetailTitle>;
});

stories.add('DetailText', () => {
  const value = text('DetailText', 'Exemplo de DetailText');
  return <DetailText>{value}</DetailText>;
});

stories.add('InputLabel', () => {
  const value = text('InputLabel', 'Exemplo de InputLabel');
  return <InputLabel>{value}</InputLabel>;
});
