import React from "react";
import Header from "./Components/Header/header.jsx";
import Conversion from "./Components/Conversion/conversion.jsx"

const App = (props) => {
    return <div>
        <Header data={props.state.converter_reducer.data} refresh={props.state.converter_reducer.refresh} dispatch={props.dispatch} currencyDAL={props.currencyDAL} />
        <Conversion state={props.state.converter_reducer} dispatch={props.dispatch} />
    </div>
}

export default App;