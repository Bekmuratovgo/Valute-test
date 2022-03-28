import { ActionTypes } from "../constants/constants";

const initialState = {
    getCurrentData: [],
    getOldData: [],
    loadingCurrent: null,
    errorCurrent: null,
    loadingOld: null,
    errorOld: null
}

export const getDataReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.GET_CURRENT_DATA_REQUEST:
            return {
                ...state,
                loadingCurrent: payload
            }
        case ActionTypes.GET_CURRENT_DATA_SUCCESS:
            return {
                ...state,
                loadingCurrent: false,
                getCurrentData: payload
            }
        case ActionTypes.GET_CURRENT_DATA_FAILURE:
            return {
                ...state,
                loadingCurrent: false,
                errorCurrent: payload
            }
        //---Get Old data
        case ActionTypes.GET_OLD_DATA_REQUEST:
            return {
                ...state,
                loadingOld: payload
            }
        case ActionTypes.GET_OLD_DATA_SUCCESS:
            return {
                ...state,
                loadingOld: false,
                getOldData: payload
            }
        case ActionTypes.GET_OLD_DATA_FAILURE:
            return {
                ...state,
                loadingOld: false,
                errorOld: payload
            }
        
        default:
            return state;
    }
}
export default getDataReducer;