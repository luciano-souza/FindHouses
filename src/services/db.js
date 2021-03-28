import AsyncStorage from '@react-native-async-storage/async-storage';

const FAVORITE_KEY = '@FindHouses:Favorites';

export const saveData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    console.log(e);
  }
};

export const getData = async key => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return value;
    } else {
      return null;
    }
  } catch (e) {
    console.log(e);
  }
};

export const saveHouseAsFavorite = async houseId => {
  const savedFavorites = await getData(FAVORITE_KEY);

  let arrayFavorites = [];

  if (savedFavorites) {
    arrayFavorites = JSON.parse(savedFavorites);

    if (arrayFavorites.find(h => h === houseId)) {
      return {
        error: 'Imóvel já é favorito',
      };
    }
  }

  arrayFavorites.push(houseId);
  await saveData(FAVORITE_KEY, JSON.stringify(arrayFavorites));
};

export const getIfHouseIsFavorite = async houseId => {
  const savedFavorites = await getData(FAVORITE_KEY);

  if (savedFavorites) {
    arrayFavorites = JSON.parse(savedFavorites);

    if (arrayFavorites.find(h => h === houseId)) {
      return true;
    }
  }

  return false;
};
