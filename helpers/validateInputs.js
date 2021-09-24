function inputEmpty(inputArrValues) {
    if (inputArrValues.length < 1) {
        return true;
    }
    return false;
}

export function checkCheckboxInputs(input_class) {
    var inputs = document.querySelectorAll(`.${input_class}`),
        checkedCartas = [];

    inputs.forEach(checkbox => {
        if (checkbox.checked) {
            checkedCartas.push(checkbox.value);
        }
    });

    return inputEmpty(checkedCartas) ? alert(`Precisa ter pelo menos uma carta em ${input_class}`) : checkedCartas;
}