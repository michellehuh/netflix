import { MOST_RECENT_MOVIE_OF_GENRE_SUCCESS, NESTED_AGGREGATION_SUCCESS } from '../types';

export const getMostRecentMovieOfGenreSuccess = data => ({
    type: MOST_RECENT_MOVIE_OF_GENRE_SUCCESS,
    data
});

export const getNestedAggregationSuccess = data => ({
    type: NESTED_AGGREGATION_SUCCESS,
    data
});

export const getMostRecentMovieOfGenre = data => dispatch =>
    fetch("http://localhost:8080/movie/MostRecentMovieOfGenre", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => {
            if (res.status !== 200)
                return Promise.reject({
                    message: "Invalid"
                });
            return res.json();
    }).then(resObj => dispatch(getMostRecentMovieOfGenreSuccess(resObj.data)));

export const getMoviesInCommon = data => dispatch =>
    fetch("http://localhost:8080/admin/movieStats", {
        method: "POST",
        body: JSON.stringify({id: data}),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => {
        if (res.status !== 200)
            return Promise.reject({
                message: "Invalid"
            });
        return res.json();
    }).then(resObj =>
    {   console.log(resObj);
        dispatch(getMostRecentMovieOfGenreSuccess(resObj.data))});



export const getMoviesInCommonMax = data => dispatch =>
    fetch("http://localhost:8080/admin/movieStats/max", {
        method: "POST",
        body: JSON.stringify({id: data}),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => {
        if (res.status !== 200)
            return Promise.reject({
                message: "Invalid"
            });
        return res.json();
    }).then(resObj =>
    {   console.log(resObj);
        dispatch(getNestedAggregationSuccess(resObj.data))});

export const getMoviesInCommonMin = data => dispatch =>
    fetch("http://localhost:8080//admin/movieStats/min", {
        method: "POST",
        body: JSON.stringify({id: data}),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => {
        if (res.status !== 200)
            return Promise.reject({
                message: "Invalid"
            });
        return res.json();
    }).then(resObj =>
    {   console.log(resObj);
        dispatch(getNestedAggregationSuccess(resObj.data))});
