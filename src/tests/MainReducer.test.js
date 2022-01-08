import statsReducer from '../redux/stats/main';

test('should return the initial state', () => {
  expect(statsReducer(undefined, {})).toEqual([]);
});
