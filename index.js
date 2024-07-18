const ansWerField=document.querySelector('#answer');
function appendValue(value) {
    ansWerField.value += value;
}

function calculateResult() {
    if(!ansWerField.value==''){
        ansWerField.value = eval(ansWerField.value);
    }
}
// evel is a function is uset to do evaluate mathematical expression

function removeLastCharacter() {
    ansWerField.value = ansWerField.value.slice(0, -1);
}

function clearAll() {
    ansWerField.value = '';
}