import axios from 'axios';

export const FETCH_PICTURES_LOADING = "FETCH_PICTURES_LOADING";
export const FETCHING_SUCCESSFUL = "FETCHING_SUCCESSFUL";
export const FETCHING_ERROR = "FETCHING_ERROR";

export const getPicture = () => {

    return dispatch => {

        dispatch(fetchingError());

        axios
            .get("https://api.giphy.com/v1/gifs/random?api_key=xnpBl1UAfoqQj7mYnsjozUbDwcO8i3Be&tag=&rating=pg-13")
            .then(res => {
                dispatch(fetchingSuccessful(res.data.images.original));
            })
            .catch(err => {
                dispatch(fetchingError(err.Response.code))
            })
    }
}

export const fetchingPicturesLoading = () => {
    return ({ type: FETCH_PICTURES_LOADING });
}

export const fetchingSuccessful = (picture) => {
    return ({ type: FETCHING_SUCCESSFUL, payload: picture });
}

export const fetchingError = (error) => {
    return ({ type: FETCHING_ERROR, payload: error })
}