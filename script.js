function displayNum(num){
    result.value+=num

}
function clearBox(){
    result.value=""
}

function  evaluateExpression(){
    result.value=eval(result.value)
}

function slice(){
    result.value=slice(result[1])
}