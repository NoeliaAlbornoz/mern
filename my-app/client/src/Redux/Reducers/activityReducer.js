import { GET_ACTIVITIES } from "../Actions/types";

const initialState = {
  list: []
}

function getActivities(state = initialState, action){
    switch (action.type) {
      case GET_ACTIVITIES:
        return Object.assign({}, state, {list: action.payload})
      default:
        return state
    }
}

export default getActivities;
