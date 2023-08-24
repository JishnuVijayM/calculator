
// display
function display(num) {
    output.value += num
    // id.value=to get value
}

// clear all --- AC
function clearAll(){
    output.value=''
}

// eval - predefined function -- perform operations
function evaluateExp(){
    output.value=eval(output.value)
}

// remove last - DE
function removeLast(){
    currentExp=output.value
    output.value=currentExp.slice(0,-1)
}