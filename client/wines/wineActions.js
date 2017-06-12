// import data from './wines.json';

export function receiveWines(wines) {
  return {
    type: 'FETCH_WINES_SUCCESS',
    wines
  };
}

export function fetchWines() {
  return function(dispatch) {

    return getAllWines().then(data => {
      console.log(data);
      dispatch(receiveWines(data.wines));
    }).catch(error => {
      throw(error);
    });
    // dispatch(receiveWines(data.wines));
  };
}
export function receiveUpdatedWines(wines, year) {
  return {
    type: 'FETCH_WINES_BY_YEAR_SUCCESS',
    wines,
    year
  };
}
export function fetchWinesByYear(year) {
  return function(dispatch) {

    return getAllWines().then(data => {
      console.log(data);
      dispatch(receiveUpdatedWines(data.wines, year));
    }).catch(error => {
      throw(error);
    });
};
}

function getAllWines() {
    return fetch('http://localhost:8080/api/v1/wines').then(response => {
      // console.log(response);
      return response.json();
    }).catch(error => {
      return error;
    });
}
