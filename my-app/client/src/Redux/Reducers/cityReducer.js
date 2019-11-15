import { GET_CITIES } from "../Actions/types";

const initialState = {
  list: []
}

function getCities(state = initialState, action){
    switch (action.type) {
      case GET_CITIES:
        return Object.assign({}, state, {list: action.payload})
      default:
        return state
    }
}

export default getCities;
