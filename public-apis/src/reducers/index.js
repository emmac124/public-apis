import { FETCH_PICTURES_LOADING, FETCHING_SUCCESSFUL, FETCHING_ERROR } from './../actions/index';

const initialState = {
    pictures: null,
    isFetching: false,
    error: ''
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case(FETCH_PICTURES_LOADING):
            return state;
        case(FETCHING_SUCCESSFUL):
            return state;
        case(FETCHING_ERROR):
            return state;
        default:
            return state;
    }
}