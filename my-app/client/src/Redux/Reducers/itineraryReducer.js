import { GET_ITINERARIES } from "../Actions/types";

const initialState = {
  list: []
}

function getItineraries(state = initialState, action){
    switch (action.type) {
      case GET_ITINERARIES:
        return Object.assign({}, state, {list: action.payload})
      default:
        return state
    }
}

export default getItineraries;
