const calBtn = document.querySelectorAll('.btn');
const calScreen = document.querySelector('.screen');
const calValues = [];
let finalVal = "";

function display(value) {

    return finalVal += value;
}

calBtn.forEach(calBtn => {
        calBtn.addEventListener('click', (event) => {
        calValues.push(event.target.value);
        console.log(calValues);
        calScreen.textContent = display();
    });
});
