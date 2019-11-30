import {GET_ACTIVITIES} from './types';
import axios from 'axios';

export function getActivities(itineraryId) {

    return(dispatch, getState) => {
        axios.get(`/api/activities/all`)
            .then((response) => {
                console.log(response.data.activities)
                dispatch({type:GET_ACTIVITIES, payload: response.data.activities})
            })
        }
}