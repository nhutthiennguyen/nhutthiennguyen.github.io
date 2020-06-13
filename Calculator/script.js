function getHistory(){
    return document.getElementById('historyValue').innerText;
};
function printHistory(num){
    document.getElementById('historyValue').innerText=num;
};
printHistory('9*9*9');
function getOutput(){
    return document.getElementById('outputValue').innerText;
};
function printOutput(num){
    if (num === ''){
        document.getElementById('outputValue').innerText=num;
    }else{
        document.getElementById('outputValue').innerText=getFormattedNumber(num);
    }
    
};
function getFormattedNumber(num){
    let n = Number(num);
    let value = n.toLocaleString('en');
    return value;
};
function reverseNumberFormat(num){
    return Number(num.replace(/,/g,''));
};

let operator = document.getElementsByClassName('btnOperator');
for (let i = 0; i < operator.length; i++){
    operator[i].addEventListener('click', function(){
        alert('sad' + this.id)
    })
}

let number = document.getElementsByClassName('btn-num');
for (let i = 0; i < number.length; i++){
    number[i].addEventListener('click', function(){
        let output = reverseNumberFormat(getOutput());
        if (output != NaN){
            output += this.id;
            printOutput(output);
        }
    })
}

printOutput(324324324);
