
function inputEmpty(inputArrValues) {
    if (inputArrValues.length < 1) {
        return inputArrValues;
    }
    return false;
}

export function checkCheckboxInputs(input_class) {
    var inputs = document.querySelectorAll(`.${input_class}`),
        checkedCartas = [];

    inputs.forEach(checkbox => {
        if (checkbox.checked) {
            checkedCartas.push(Number(checkbox.value));
        }
    });

    if (inputEmpty(checkedCartas)) {
        alert(`Precisa ter pelo menos uma carta em ${input_class}`);
        return null;
    }
    return checkedCartas;
}

export function checkNumeroDeAdversarios(id) { 
    var selector = document.querySelector(`#${id}`);
    if (!(selector.value && selector.value > 0 && selector.value < 7)) {
        alert('Selecione um número de adversários de 1 a 6');
        return null;
    }
    return selector.value;
}