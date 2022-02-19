import { BIKES } from "../types";


export function getBikes(pageCurrent, keyword, dateInit, dateFinish){
    let endPointRead = `https://bikeindex.org:443`
    let constructorEndpoint = `${endPointRead}/api/v3/search?page=${pageCurrent}&per_page=10&location=IP&distance=10&stolenness=stolen`;

    if (keyword?.length > 0) {
        constructorEndpoint = `${endPointRead}/api/v3/search?page=${pageCurrent}&per_page=10&query=${keyword}&location=IP&distance=10&stolenness=stolen`;
    }
    if (dateInit?.length > 0 && dateFinish.length > 0) {
        console.log("por fecha, endpoint no filtra por fecha ")
    }

    return async (dispatch) => {
        try {
            fetch(constructorEndpoint, {
                method: 'GET',
            }).then(res => res.json())
                .catch(error => console.error('Error:', error))
                .then(response => dispatch(getDataSuccess(response)))
        } catch (error) {
            console.log(error);
        }
    };
};


const getDataSuccess = (data) => {
    return {
        type: BIKES.READ_BIKE,
        payload: data.bikes
    };
};


export function getTotalBikes(){
    let endPointRead = `https://bikeindex.org:443`
    let constructorEndpoint = `${endPointRead}/api/v3/search?page=1&per_page=10000000&location=IP&distance=10&stolenness=stolen`;
    return async (dispatch) => {
        try {
            fetch(constructorEndpoint, {
                method: 'GET',
            }).then(res => res.json())
                .catch(error => console.error('Error:', error))
                .then(response => dispatch(getTotalDataSuccess(response)))
        } catch (error) {
            console.log(error);
        }
    };
};

const getTotalDataSuccess = (data) => {
    return {
        type: BIKES.TOTAL_BIKE,
        payload: data.bikes.length
    };
};

export function getSelectBike(value){
    let endPointRead = `https://bikeindex.org:443`
    let constructorEndpoint = `${endPointRead}/api/v3/search?page=1&per_page=10&query=${value}&location=IP&distance=10&stolenness=stolen`;
    return async (dispatch) => {
        try {
            fetch(constructorEndpoint, {
                method: 'GET',
            }).then(res => res.json())
                .catch(error => console.error('Error:', error))
                .then(response => dispatch(getSelectBikeSuccess(response)))
        } catch (error) {
            console.log(error);
        }
    };
};

const getSelectBikeSuccess = (data) => {
    return {
        type: BIKES.SELECT_BIKE,
        payload: data?.bikes[0]
    };
};