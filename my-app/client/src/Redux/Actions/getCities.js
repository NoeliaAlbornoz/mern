import {GET_CITIES} from './types';
import axios from 'axios';

export function getCities() {

    return(dispatch, getState) => {
        axios.get('api/cities/all')
            .then((response) => {
                console.log(response.data.cities)
                dispatch({type: GET_CITIES, payload: response.data.cities})
            })
        }
}
