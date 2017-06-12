const INITIAL_STATE = {
  wines: []
};

const reducer = (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
  case 'FETCH_WINES_SUCCESS':
    return Object.assign({}, state, {
      wines: action.wines.sort((a, b) => {
        return parseInt(a.vintage, 10) > parseInt(b.vintage, 10);
      })
    });
  case 'FETCH_WINES_BY_YEAR_SUCCESS':
    return Object.assign({}, state, {
      wines: action.wines.filter((item)=> {
        return item.vintage == action.year;
      }).sort((a, b) => {
        return parseInt(a.vintage, 10) > parseInt(b.vintage, 10);
      })
    });

  default:
    return state;
  }
};

export default reducer;
