const calBtn = document.querySelectorAll('.btn');
const calScreen = document.querySelector('.screen');
let calValues = [];
let finalVal = "";
let currentNum = '';
let currentAns = '';
let displayedEquation = '';

function getCalulations(userInpt) {
    console.log("user: ", userInpt);
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
    finalVal = "";
    if (value !== "AC" || value !== "DEL" || value !== "="){
        return finalVal += value;
    }
}

calBtn.forEach(calBtn => {
        calBtn.addEventListener('click', (event) => {
            
        if (event.target.value === '=') {
            calValues.push(currentNum);
            currentAns = getCalulations(calValues).toString();
            calScreen.textContent = currentAns;
            calValues = [];
        } else if (event.target.value === 'AC') {
            calValues = [];
            currentNum = '';
            currentAns = '';
            displayedEquation = '';
            calScreen.textContent = '0';
        } else if (event.target.value === 'DEL') {
            calValues.pop();
            currentNum = '';
            calScreen.textContent = calValues;
        } else if (event.target.value === '+' || event.target.value === '-' || event.target.value === '/' || event.target.value === '*'){
           if (currentAns === '') {
               displayedEquation += event.target.value;
               calScreen.textContent = displayedEquation;
               calValues.push(currentNum);
               currentNum = '';
               calValues.push(event.target.value);
            } else {
                calValues.push(currentAns);
                displayedEquation = currentAns + event.target.value;
                calValues.push(event.target.value);
                calScreen.textContent = displayedEquation;
           }
        } else {
            if (currentAns === '') {
                displayedEquation += event.target.value;
                currentNum += event.target.value;
                calScreen.textContent = displayedEquation;
            } else {
                displayedEquation += event.target.value;
                currentNum = event.target.value;
                calScreen.textContent = displayedEquation;
            }
        }
    });
});

