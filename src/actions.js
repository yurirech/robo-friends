// 3rd step -> import from constants.js (4th step in reducers.js) and in case your 'type' is a string change to this constant
import { CHANGE_SEARCH_FIELD,
         REQUEST_ROBOTS_PENDING,
         REQUEST_ROBOTS_SUCCESS,
         REQUEST_ROBOTS_FAILED,
} from "./constants";

//1st step -> action done (second step -> constants.js)
export const setSearchField = (text) => ({
  type: CHANGE_SEARCH_FIELD, //preferable to use a constant variable than just a string for error handling
  payload: text
});


export const requestRobots = () => (dispatch) => {
  dispatch({ type: REQUEST_ROBOTS_PENDING}); //dispatches the action ps.: no payload
  fetch('https://jsonplaceholder.typicode.com/users') //fetches the action
    .then(response => response.json())
    .then(data => dispatch ({type: REQUEST_ROBOTS_SUCCESS, payload: data})) //dispatch the data
    .catch(error => dispatch({type: REQUEST_ROBOTS_FAILED, payload: error})) //dispatch the error if that's the case
};
