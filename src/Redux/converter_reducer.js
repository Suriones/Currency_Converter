const initialState = {
    start: "Hello World!"
}

const converter_reducer = (state = initialState, action) => {

    const _createStateCopy = () => {
        let stateCopy = {
            start: state.start
        }

        return stateCopy;
    }

    let copyState = _createStateCopy();

    switch (action.type) {
        default:
            return copyState;
    }
}

export default converter_reducer;