import axios from "axios";

const SET_FETCHING_STATUS = "mainPage/SET_FETCHING_STATUS"
const LOAD_DATA = "mainPage/LOAD_DATA"
const SET_ERROR = "mainPage/SET_ERROR"


const initialState = {
    isFetching: false,
    error: false,
    data: []
}

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_DATA:
            return { ...state, data: action.payload }
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

export const loadDataTC = () => (dispatch) => {

    dispatch(setFetchingStatus(true));

    axios.get('http://localhost:7070/api/services')
        .then(res => res.data)
        .then(data => dispatch(loadData(data)))
        .catch(error => dispatch(setError(true)))
        .finally(() => dispatch(setFetchingStatus(false)))
}



export default mainReducer;