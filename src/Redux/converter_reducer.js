import { rateAPI } from "../API/api"

const initialState = {
    data: null,
    refresh: false,
    valueFirstInput: "",
    valueSecondInput: ""
}

const converter_reducer = (state = initialState, action) => {

    const _createStateCopy = () => {
        const copyState = {
            data: state.data,
            refresh: state.refresh,
            valueFirstInput: state.valueFirstInput,
            valueSecondInput: state.valueSecondInput
        }

        return copyState;
    }

    let copyState = _createStateCopy();

    switch (action.type) {
        case "setRate":
            copyState.data = action.data;
            return copyState;
        case "refreshRate":
            copyState.refresh = !copyState.refresh;
            return copyState;
        case "setFirstInput":
            copyState.valueFirstInput = action.value;
            return copyState;
        case "setSecondInput":
            copyState.valueSecondInput = action.value;
            return copyState;
        default:
            return copyState;
    }
}

export const currencyDAL = {
    getRate() {
        return async (dispatch) => {
            const data = await rateAPI.getRate();
            dispatch({ type: "setRate", data: data })
        }
    }
}

export default converter_reducer;