import {CHANGE_SEARCH_FIELD, REQUEST_ROBOTS_FAILED, REQUEST_ROBOTS_PENDING, REQUEST_ROBOTS_SUCCESS} from "./constants";

//4th Step -> create initial state
const initialStateSearch = {
  searchField: ''
};

// 5th step -> create the actual reducer (import constant from constants.js) (6th step in index.js)
export const searchRobots = (state=initialStateSearch, action={}) => { // state equals initialState  and action equals an empty object
  switch(action.type) { //mainly standard Redux syntax you need to get used to. If statement can be used but swtich is easier to add more actions
    case CHANGE_SEARCH_FIELD: {
      return Object.assign({}, state, {searchField: action.payload}) //returning new state, everything in state, update searchField (payload is in actions.js)
  //      the above line could be { ...state, {searchField: action.payload}} it works the same way and it's cleaner
       }
    default:
      return state;
  }
};

const initialStateRobots = {
  isPending: false,
  robots: [],
  error: ''
};

export const requestRobots = (state=initialStateRobots, action={}) => {
  switch(action.type) {
    case REQUEST_ROBOTS_PENDING:
      return Object.assign({}, state, { isPending: true }); //no payload since it's just sending a request but it needs to assing a value if it's peding or not
    case REQUEST_ROBOTS_SUCCESS:
      return Object.assign({}, state, { robots: action.payload, isPending: false}); //payload AND set isPending to false since it got a response
    case REQUEST_ROBOTS_FAILED:
      return Object.assign({}, state, {error: action.payload, isPending: false}); //same as above
    default:
      return state;
  }
};
