import api from './api';

export const getHousesCall = async () => {
  try {
    // console.log('Here');
    const result = await api.get('/properties/v2/list-for-rent', {
      params: {
        city: 'Miami',
        state_code: 'FL',
        limit: 10,
        offset: 0,
        sort: 'relevance',
      },
    });
    return result.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const getHouseDetail = async property_id => {
  try {
    // console.log('Here');
    const result = await api.get('/properties/v2/detail', {
      params: {
        property_id,
      },
    });
    return result.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
