import axios from "axios";

const SET_FETCHING_STATUS = "service/SET_FETCHING_STATUS"
const LOAD_DATA = "service/LOAD_DATA"
const SET_ERROR = "service/SET_ERROR"

const initialState = {
    isFetching: false,
    error: false,
    service: {}
}

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_DATA:
            return { ...state, service: action.payload }
        case SET_FETCHING_STATUS:
            return { ...state, isFetching: action.payload }
        case SET_ERROR:
            return { ...state, error: action.payload }
        default:
            return state;
    }
}



// Actions

export const setFetchingStatus = (status) => {
    return {
        type: SET_FETCHING_STATUS,
        payload: status
    }
}

export const loadData = (data) => {
    return {
        type: LOAD_DATA,
        payload: data
    }
}

export const setError = (error) => {
    return {
        type: SET_ERROR,
        payload: error
    }
}


// Thunks

export const loadServiceDataTC = (serviceId) => (dispatch) => {

    dispatch(setFetchingStatus(true));

    axios.get(`http://localhost:7070/api/services/${serviceId}`)
        .then(res => res.data)
        .then(data => dispatch(loadData(data)))
        .catch(error => dispatch(setError(true)))
        .finally(() => dispatch(setFetchingStatus(false)))
}



export default mainReducer;