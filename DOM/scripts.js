//create first button
const btnOne = document.createElement('button');
//create text
const btnOneTxt = document.createTextNode('Click Me!')
//add btnOneTxt to btnOne
btnOne.appendChild(btnOneTxt);
//grab body
const body = document.body;
//insert btnOne
body.appendChild(btnOne);
//create click event listener for btnOne
btnOne.addEventListener('click', () => {
    //alert 'Thank you!'
    alert('Thank you!')
});
//create input
const textInput = document.createElement('input');
//make textInput a text input
textInput.setAttribute('type', 'text');
//create second button
const btnTwo = document.createElement('button');
//create text
const btnTwoTxt = document.createTextNode('Submit');
//add btnTwoTxt to btnTwo
btnTwo.appendChild(btnTwoTxt);
//create div
const containerDiv = document.createElement('div');
//insert containerDiv into body
body.appendChild(containerDiv);
//insert textInput into containerDiv
containerDiv.appendChild(textInput);
//insert btnTwo into containerDiv
containerDiv.appendChild(btnTwo);
//click event listener for btnTwo
btnTwo.addEventListener('click', () => {
   textInput.value == '' ? alert("You haven't typed anything!") : alert(textInput.value); 
});
//grab colorDiv
const colorDiv = document.getElementById('colorDiv');
//add mouseover event
colorDiv.addEventListener('mouseover', () => {
    //change background color to green
    colorDiv.style.backgroundColor = 'green';
}, addEventListener('mouseout', () => {
    //change background color to white
    colorDiv.style.backgroundColor = 'white';
}));