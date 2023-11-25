import React from "react";
import conversion_style from "./conversion_style.module.scss"
import { conversion } from "./treatment";

const Conversion = (props) => {

    const allSelectCurrencies = [];

    if (props.state.data !== null)
        props.state.data.forEach(el => allSelectCurrencies.push(<option key={el.cc} value={el.cc}>{el.cc}</option>));


    const [FirstValue, SecondValue] = [React.createRef(), React.createRef()];

    const OnChange = (value = FirstValue.current.value, type = "setFirstInput") => {
        props.dispatch({ type: type, value: value });
        props.dispatch(conversion(props.state.data, type, value));
    }

    return <main className={conversion_style.conversion}>
        <div className={conversion_style.first}>
            <select onChange={() => OnChange()} id="firstSelect">
                {allSelectCurrencies}
            </select>
            <input value={props.state.valueFirstInput} ref={FirstValue} onChange={() => OnChange()}></input>
        </div>
        <img id="direction" src="direction.png"></img>
        <div className={conversion_style.second}>
            <input value={props.state.valueSecondInput} ref={SecondValue} onChange={() => OnChange(SecondValue.current.value, "setSecondInput")}></input>
            <select onChange={() => OnChange()} id="secondSelect">
                {allSelectCurrencies}
            </select>
        </div>
        <div className={conversion_style.message}>Exchange rates taken from <a href="https://bank.gov.ua/">bank.gov.ua</a></div>
    </main>
}

export default Conversion;