import { BIKES } from "../types";

const initialState = {
    bikes: [],
    numberBikes: 0,
    currentBike: {}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case BIKES.READ_BIKE:
            return {
                ...state,
                bikes: action.payload,
                currentBike: {},
            };

        case BIKES.TOTAL_BIKE:
            return {
                ...state,
                numberBikes: action.payload,
            };

        case BIKES.SELECT_BIKE:
            return {
                ...state,
                currentBike: action.payload,
            };

        default:
            return state;
    }
}
