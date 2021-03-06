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
//create p
const p = document.createElement('p');
//create text
const pTxt = document.createTextNode('This text changes colors when you click on it!');
//insert pTxt into p
p.appendChild(pTxt);
//insert p into body
body.appendChild(p);
//click event listener
p.addEventListener('click', () => {
    //random color generator
    const randomColor = () => {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random () * 256);
        const b = Math.floor(Math.random () * 256);
        return `rgb(${r}, ${g}, ${b})`;
    };
    //change text color to random color
    p.style.color = randomColor();
});
//create button
const btnThree = document.createElement('button');
//create text
const btnThreeTxt = document.createTextNode('My name');
//add btnThreeTxt to btnThree
btnThree.appendChild(btnThreeTxt);
//create div
const nameDiv = document.createElement('div');
//insert btnThree into body
body.appendChild(btnThree);
//insert nameDiv into body
body.appendChild(nameDiv);
//btnThree click event
btnThree.addEventListener('click', () => {
    //create text
    const name = document.createTextNode('L3p');
    //if nameDiv doesn't have any text insert name, otherwise alert
    nameDiv.textContent == '' ? nameDiv.appendChild(name) : alert('You already know my name.');
});
//friends array
const friends = ['Stephanie', 'Julius', 'Glenn', 'Luke', 'Siacca', 'Irish', 'Lynds', 'Necco', 'Andi'];
//grab frndBtn
const frndBtn = document.getElementById('frndBtn');
//grab frndLst
const frndLst = document.getElementById('frndLst');
//counter
let counter = 0
//click event for frndBtn
frndBtn.addEventListener('click', () => { 
    //create li
    const li = document.createElement('li');
    //create text
    const liTxt = document.createTextNode(friends[counter]);
    //add liTxt to li
    li.appendChild(liTxt);
    //if counter equals 9 alert, otherwise add new li to frndLst and add 1 to counter
    counter == 9 ? alert("That's all my friends") : frndLst.appendChild(li) && counter++;
})