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