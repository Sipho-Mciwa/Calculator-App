const calBtn = document.querySelectorAll('.btn');
const calScreen = document.querySelector('.screen');
let calValues = [];
let finalVal = "";
let firstNum = "";

function getCalulations(userInpt) {
    let num = userInpt[0];
    let operator = userInpt[1];
    let num2 = userInpt[2];
    let answer;
   

    switch (operator) {
        case '+': answer = (+num + (+num2)); break;
        case '-': answer = (num - num2); break;
        case '*': answer = (num * num2); break;
        case '/':
            if (num2 !== '0') {
                answer = (num / num2);
            }
            else {
                answer = ("Cannot divide by zero");
            }
            break;
    
        default: answer = ("Invalid Input"); break;
    }

    return answer;
}

function display(value) {
    if (value !== "AC" || value !== "DEL" || value !== "="){
        return finalVal += value;
    }
}

calBtn.forEach(calBtn => {
        calBtn.addEventListener('click', (event) => {

        if (event.target.value === '=') {
            calValues.push(firstNum);
            calScreen.textContent = getCalulations(calValues);
            calValues = [];
        } else if (event.target.value === 'AC') {
           
            calValues = [];
            firstNum = '';
            calScreen.textContent = '0';
        } else if (event.target.value === 'DEL') {
            calValues.pop();
            console.log("DEL -->", calValues);
            calScreen.textContent = calValues;
        } else if (event.target.value === '+' || event.target.value === '-' || event.target.value === '/'){
            calValues.push(firstNum);
            firstNum = '';
            calValues.push(event.target.value);
            console.log(calValues)
            calScreen.textContent = display(event.target.value);
            console.log("values -->", event.target.value);
        } else {
            firstNum += event.target.value;
            console.log(firstNum);
            calScreen.textContent = firstNum;
        }
    });
});

