import axios from "axios"
import { ActionTypes } from "../constants/constants" 

export const fetchGetCurrentt = () => dispatch => {
    
    const fetchGetCurrenttRequest = () => ({ type: ActionTypes.GET_CURRENT_DATA_REQUEST })
    dispatch(fetchGetCurrenttRequest) 

    axios.get('https://www.cbr-xml-daily.ru/archive/2022/02/11/daily_json.js')
        .then(res => {
            // console.log(res.data, "res");
            dispatch( { type: ActionTypes.GET_CURRENT_DATA_SUCCESS , payload: res.data } )})
        .catch(err => { 
            // console.log(err, "err-1");
            dispatch( { type: ActionTypes.GET_CURRENT_DATA_FAILURE, payload: err } )})
}

export const fetchGetOld = () => dispatch => {
    let prevURL = null;
    dispatch({ type: ActionTypes.GET_OLD_DATA_REQUEST }) 

    axios.get('https://www.cbr-xml-daily.ru/archive/2022/02/11/daily_json.js')
        .then(res => { 
            prevURL = res.data.PreviousURL;
            async();
            // console.log(prevURL, "url");
        });

    function async() {
        axios.get(`https:${prevURL}`)
            .then(res => { 
                // console.log(res.data, "res-2");
                dispatch( { type: ActionTypes.GET_OLD_DATA_SUCCESS, payload: res.data }) })
            .catch(err => {
                // console.log(err,"err-2");
                dispatch( { type: ActionTypes.GET_OLD_DATA_FAILURE, payload: err })
            })
    }

}