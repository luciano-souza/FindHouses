import React, { useEffect, useState } from 'react';
import 'intl';
import 'intl/locale-data/jsonp/en';

import { getHouseDetail } from '../../services/calls';
import { useHousesStore } from '../../services/stores';

import {
  IconButton,
  DetailSectionTitle,
  DetailSubTitle,
  DetailTitle,
  DetailText,
  Loader,
  HouseFeatureCard,
} from '../../components';
import {
  ScreenContainer,
  ImageBackground,
  BottomScreenContainer,
  FeaturesContainer,
} from './styles';

export const DetailScreen = ({ navigation }) => {
  // const { selectedHouse } = route.params;

  const { selectedHouse } = useHousesStore();

  const [loading, setLoading] = useState(true);
  const [houseDetail, setHouseDetail] = useState(null);

  useEffect(() => {
    async function callGetHouseDetail() {
      const result = await getHouseDetail(selectedHouse.property_id);
      // console.log(result);
      setHouseDetail(result.properties[0] ? result.properties[0] : null);
      setLoading(false);
    }
    callGetHouseDetail();
  }, []);

  const onClickArrowBack = () => {
    navigation.goBack();
  };

  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return (
    <ScreenContainer>
      <ImageBackground source={{ uri: selectedHouse.photos[0].href }}>
        <IconButton
          iconName="chevron-back"
          transparent
          onPress={onClickArrowBack}
        />
        <IconButton iconName="star-outline" transparent />
      </ImageBackground>

      {loading ? (
        <BottomScreenContainer>
          <Loader />
        </BottomScreenContainer>
      ) : (
        <BottomScreenContainer>
          <DetailTitle>{houseDetail.address.line}</DetailTitle>

          <DetailSubTitle>
            {formattedPrice.format(houseDetail.community.price_max)}
          </DetailSubTitle>

          <DetailText>
            {`${houseDetail.address.neighborhood_name} - ${houseDetail.address.state}`}
          </DetailText>

          <DetailSectionTitle mt={24} mb={12}>
            Detalhes
          </DetailSectionTitle>

          <FeaturesContainer>
            <HouseFeatureCard
              iconName="arrow-expand-all"
              iconLib="materialcommunity"
              featureText={`${houseDetail.lot_size.size} ${houseDetail.lot_size.units}`}
            />

            <HouseFeatureCard
              iconName="bed-king-outline"
              iconLib="materialcommunity"
              featureText={`${houseDetail.community.beds_min} - ${houseDetail.community.beds_max} beds`}
            />

            <HouseFeatureCard
              iconName="bath"
              iconLib="fontawesome"
              featureText={`${houseDetail.community.baths_min} - ${houseDetail.community.baths_max} baths`}
            />
          </FeaturesContainer>

          <DetailSectionTitle mt={24} mb={12}>
            Vantagens do Imóvel
          </DetailSectionTitle>

          {houseDetail.features[1]?.text.map(item => (
            <DetailText key={item} mb={2}>
              {' '}
              - {item}
            </DetailText>
          ))}
        </BottomScreenContainer>
      )}
    </ScreenContainer>
  );
};
