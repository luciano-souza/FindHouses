import React from 'react';

import { useHousesHooks } from '../../../services/hooks';
import { Modal, Input } from '../../molecules';
import { InputSectionLabel, Button } from '../../atoms';

import { FilterContainer, InputRowContainer, InputRowItem } from './styles';
import { useState } from 'react';

export const FilterModal = ({ onClose, visible }) => {
  const { onFilterHousesList } = useHousesHooks();
  const [sizeMin, setSizeMin] = useState();
  const [sizeMax, setSizeMax] = useState();
  const [priceMin, setPriceMin] = useState();
  const [priceMax, setPriceMax] = useState();
  const [bedsMin, setBedsMin] = useState();
  const [bathsMin, setBathsMin] = useState();

  const onClickApply = () => {
    onFilterHousesList({
      sizeMin,
      sizeMax,
      priceMin,
      priceMax,
      bedsMin,
      bathsMin,
    });
    onClose();
  };

  return (
    <Modal visible={visible} onClose={onClose} title="Filtrar">
      <FilterContainer>
        <InputSectionLabel mt={12} mb={6}>
          Tamanho
        </InputSectionLabel>
        <InputRowContainer>
          <InputRowItem>
            <Input
              value={sizeMin}
              onChangeText={t => setSizeMin(t)}
              keyboardType="numeric"
              label="Mímino"
              placeholder="Ex: 77"
            />
          </InputRowItem>

          <InputRowItem>
            <Input
              value={sizeMax}
              onChangeText={t => setSizeMax(t)}
              keyboardType="numeric"
              label="Máximo"
              placeholder="Ex: 200"
            />
          </InputRowItem>
        </InputRowContainer>

        <InputSectionLabel mt={12} mb={6}>
          Preço
        </InputSectionLabel>
        <InputRowContainer>
          <InputRowItem>
            <Input
              value={priceMin}
              onChangeText={t => setPriceMin(t)}
              keyboardType="numeric"
              label="Mímino"
              placeholder="Ex: 500"
            />
          </InputRowItem>

          <InputRowItem>
            <Input
              value={priceMax}
              onChangeText={t => setPriceMax(t)}
              keyboardType="numeric"
              label="Máximo"
              placeholder="Ex: 2000"
            />
          </InputRowItem>
        </InputRowContainer>

        <InputSectionLabel mt={12} mb={6}>
          Quartos
        </InputSectionLabel>
        <InputRowContainer>
          <InputRowItem>
            <Input
              value={bedsMin}
              onChangeText={t => setBedsMin(t)}
              keyboardType="numeric"
              label="Mímino"
              placeholder="Ex: 2"
            />
          </InputRowItem>
        </InputRowContainer>

        <InputSectionLabel mt={12} mb={6}>
          Banheiros
        </InputSectionLabel>
        <InputRowContainer>
          <InputRowItem>
            <Input
              value={bathsMin}
              onChangeText={t => setBathsMin(t)}
              keyboardType="numeric"
              label="Mímino"
              placeholder="Ex: 1"
            />
          </InputRowItem>
        </InputRowContainer>
      </FilterContainer>

      <Button onPress={onClickApply} mt={24}>
        Aplicar
      </Button>
    </Modal>
  );
};
