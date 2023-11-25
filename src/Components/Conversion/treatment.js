import conversion_style from "./conversion_style.module.scss";

export const animation = (img) => {
    img.className = conversion_style.direction;
    setTimeout(() => img.className = "off", 600);
}

export const conversion = (data, type, value) => {
    const [FirstSelect, SecondSelect] = [document.getElementById("firstSelect"), document.getElementById("secondSelect")];
    const [FirstCurrency, SecondCurrency] = [data.find(el => el.cc === FirstSelect.value), data.find(el => el.cc === SecondSelect.value)];

    return {
        type: type === "setFirstInput" ? "setSecondInput" : "setFirstInput",
        value: type === "setFirstInput" ? (value * FirstCurrency.rate / SecondCurrency.rate).toFixed(2) :
            (value * SecondCurrency.rate / FirstCurrency.rate).toFixed(2)
    };
}