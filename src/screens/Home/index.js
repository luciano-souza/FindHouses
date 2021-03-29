import React, { useEffect, useState } from 'react';
import axios from 'axios';

import {
  Title,
  IconButton,
  Input,
  HousesList,
  Loader,
  FilterModal,
} from '../../components';
// import { getHousesCall } from '../../services/calls';
import { useHousesStore } from '../../services/stores';
import { useHousesHooks } from '../../services/hooks';

import {
  ScreenContainer,
  TopContainer,
  TitleContainer,
  ContentContainer,
} from './styles';

export const HomeScreen = () => {
  const { onGetHouses } = useHousesHooks();
  // const [loading, setLoading] = useState(true);
  const [filterModalVisible, setFilterModalVisible] = useState(false);

  const { housesList, loadingHousesList } = useHousesStore();

  // async function callGetHouses() {
  //   const result = await getHousesCall();
  //   setHousesList(result.properties ? result.properties : []);

  //   setLoading(false);
  // }

  useEffect(() => {
    // callGetHouses();
    onGetHouses();
  }, []);

  const openFilterModal = () => {
    setFilterModalVisible(true);
  };

  const closeFilterModal = () => {
    setFilterModalVisible(false);
  };

  return (
    <ScreenContainer>
      <HousesList
        data={housesList}
        loading={loadingHousesList}
        onEndReached={onGetHouses}>
        <ContentContainer>
          <TopContainer>
            <TitleContainer>
              <Title>Encontre aqui seu Imóvel</Title>
            </TitleContainer>
            <IconButton onPress={openFilterModal} iconName="filter" />
          </TopContainer>
          <Input label="Localização" placeholder="Endereco" />
          {loadingHousesList && <Loader />}
        </ContentContainer>
      </HousesList>

      {filterModalVisible && (
        <FilterModal onClose={closeFilterModal} visible={filterModalVisible} />
      )}
    </ScreenContainer>
  );
};
