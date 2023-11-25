import React, { useEffect } from "react";
import header_style from "./header_style.module.scss"
import { animation } from "../Conversion/treatment";

const Header = (props) => {

    useEffect(() => { props.dispatch(props.currencyDAL.getRate()) }, [props.refresh]);

    const refreshRate = () => {
        props.dispatch({ type: "refreshRate" });
        animation(document.getElementById("direction"));
    }

    let [USD, EUR] = ["Wait...", "Wait..."];

    if (props.data) {
        USD = ((props.data.find(el => el.cc === "USD")).rate).toFixed(2);
        EUR = ((props.data.find(el => el.cc === "EUR")).rate).toFixed(2);
    }

    return <header>
        <a href="#"><strong className={header_style.logo}><img src="favicon.png"></img>Currency Converter</strong></a>
        <section className={header_style.header_right}>
            <a className={header_style.currency} onClick={refreshRate} ><img src="USD.png"></img> USD: <span className={header_style.rate}>{USD}</span> ₴</a>
            <a className={header_style.currency} onClick={refreshRate} ><img src="EUR.png"></img> EUR: <span className={header_style.rate}>{EUR}</span> ₴</a>
        </section>
    </header >
}

export default Header;