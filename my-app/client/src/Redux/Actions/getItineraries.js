import {GET_ITINERARIES} from './types';
import axios from 'axios';

export function getItineraries(cityId) {

    return(dispatch, getState) => {
        axios.get(`/api/itineraries/${cityId}`)
            .then((response) => {
                console.log(response.data.itineraries)
                dispatch({type: GET_ITINERARIES, payload: response.data.itineraries})
            })
        }
}
