import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Title, IconButton, Input, HousesList, Loader } from '../../components';
import { getHousesCall } from '../../services/calls';
import { useHousesStore } from '../../services/stores';

import {
  ScreenContainer,
  TopContainer,
  TitleContainer,
  ContentContainer,
} from './styles';

export const HomeScreen = () => {
  // const [housesListData, setHousesListData] = useState([]);
  const [loading, setLoading] = useState(true);

  const { housesList, setHousesList } = useHousesStore();

  async function callGetHouses() {
    const result = await getHousesCall();
    // setHousesListData(result.properties ? result.properties : []);
    setHousesList(result.properties ? result.properties : []);

    setLoading(false);
  }

  useEffect(() => {
    callGetHouses();
  }, []);

  return (
    <ScreenContainer>
      <HousesList data={housesList} loading={loading}>
        <ContentContainer>
          <TopContainer>
            <TitleContainer>
              <Title>Encontre aqui seu Imóvel</Title>
            </TitleContainer>
            <IconButton iconName="filter" />
          </TopContainer>
          <Input label="Localização" placeholder="Endereco" />
          {loading && <Loader />}
        </ContentContainer>
      </HousesList>
    </ScreenContainer>
  );
};
