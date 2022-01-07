const FETCH_STATS = 'FETCH_STATS';
const HANDLE_FETCH_ERROR = 'HANDLE_FETCH_ERROR';
const url = 'https://api.covid19tracking.narrativa.com/api/';

const initialState = [];

export const getStats = (data) => ({
  type: FETCH_STATS,
  payload: data,
});

const handleFetchError = () => ({
  type: HANDLE_FETCH_ERROR,
});

export const fetchGetData = (date, country) => async (dispatch) => {
  const countryParam = country;
  const response = await fetch(`${url + date}/country/${countryParam}`).catch((error) => dispatch(handleFetchError(error)));
  if (response.ok) {
    const data = await response.json();
    const today = data.dates;
    const infoObj = Object.values(today)[0].countries;
    const withParam = infoObj[countryParam];
    const withRegion = withParam.regions;
    dispatch(getStats(withRegion));
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STATS:
      if (state !== initialState) {
        return state;
      }
      return action.payload;
    case HANDLE_FETCH_ERROR:
      return state;
    default:
      return state;
  }
};

export default reducer;
