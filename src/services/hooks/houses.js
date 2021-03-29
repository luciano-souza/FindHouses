import { getHousesCall } from '../calls';
import { useHousesStore } from '../stores';

export const useHousesHooks = () => {
  const {
    setHousesList,
    setLoadingHousesList,
    offset,
    setOffset,
    housesList,
    query,
    setQuery,
  } = useHousesStore();

  const onGetHouses = async () => {
    setLoadingHousesList(true);
    const result = await getHousesCall({ query, offset });

    if (offset > 0) {
      setHousesList(
        result.properties ? [...housesList, ...result.properties] : housesList,
      );
    } else {
      setHousesList(result.properties ? result.properties : housesList);
    }

    // setHousesList(result.properties ? result.properties : []);

    setLoadingHousesList(false);
    setOffset(offset + 15);
  };

  const onFilterHousesList = async receivedQuery => {
    setLoadingHousesList(true);

    if (receivedQuery !== query) {
      setHousesList([]);
      setOffset(0);
    }

    setQuery(receivedQuery);
    const result = await getHousesCall({ query: receivedQuery, offset });

    setHousesList(result.properties ? result.properties : []);
    setLoadingHousesList(false);
  };

  return {
    onGetHouses,
    onFilterHousesList,
  };
};
