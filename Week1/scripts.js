console.log(myButton);

let count = 0;

function changeButtonText(){
    count++;
    myButton.textContent = `I've been clicked ${count} times!`;
    myButton.classList.add('clicked');

}

myButton.addEventListener('click', changeButtonText);