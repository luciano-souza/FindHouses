import create from 'zustand';

export const useHousesStore = create(set => ({
  housesList: [],
  setHousesList: housesList => set({ housesList }),

  selectedHouse: null,
  setSelectedHouse: selectedHouse => set({ selectedHouse }),
}));
