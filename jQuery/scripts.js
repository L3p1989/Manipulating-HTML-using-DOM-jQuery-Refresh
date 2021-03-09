//btnOne is a button element with a click function
const btnOne = $('<button>Click Me!</button>').click(() => {
    //alert "Thank You!"
    alert("Thank You!")
});
//grab body element
const body = $('body');
//insert btnOne at the end of body
body.append(btnOne);
//grab #txtBox
const txtBox = $('#txtBox');
//grab #sbmtBtn
const sbmtBtn = $('#sbmtBtn');
//give sbmtBtn click event handler
sbmtBtn.click(() => {
    //if there is no tex in txtBox alert "You haven't typed anything!" else alert the text inside txtBox
    txtBox.val() == '' ? alert("You haven't typed anything!") : alert(txtBox.val());
    //clear text inside txtBox
    txtBox.val('')
});
//colorDiv is a div element with 100px height, 100px width, text is center aligned, and has a hover function
const colorDiv = $('<div style="height: 100px; Width: 100px; text-align: center;">Hover over me!</div>').hover(() => {
    //when hovered over background-color is green
    colorDiv.css('background-color', "green");
}, () => {
    //when no longer hovered over background-color changes to white
    colorDiv.css('background-color', 'white');
});
//insert colorDiv to end of body
body.append(colorDiv);
//p is a paragraph element
const p = $('<p style="cursor: pointer; user-select: none">this text changes colors when you click on it!</p>').click(() => {
    //create randomColor function
    const randomColor = () => {
        //r = number between 1-255
        const r = Math.floor(Math.random() * 256);
        //g = number between 1-255
        const g = Math.floor(Math.random () * 256);
        //b = number between 1-255
        const b = Math.floor(Math.random () * 256);
        //return "rgb(r value, g value, b value)"
        return `rgb(${r}, ${g}, ${b})`;
    };
    //p text color randomColor
    p.css('color', randomColor);
});
//insert p to end of body
body.append(p);
//nameBtn is a button element
const nameBtn = $('<button>My name</button>').click(() => {
    //nameSpan is a span element
    const nameSpan = $('<span>L3p</span>');
    //if div has a span alert, otherwise insert span to nameDiv
    $('div').has('span').length ? alert('You know my name') : nameDiv.append(nameSpan);
});
//nameDiv is a div element
const nameDiv = $('<div></div>');
//add nameBtn and nameDiv to body
body.append(nameBtn, nameDiv);
//grab #frndBtn
const frndBtn = $('#frndBtn');
//grab #frndLst
const frndLst = $('#frndLst');
//counter
let counter = 0;
//array of friends
const friends = ['Stephanie', 'Julius', 'Glenn', 'Luke', 'Siacca', 'Irish', 'Lynds', 'Necco', 'Andi'];
//click event listener for frndBtn
frndBtn.click(() => {
    //if counter equals 9 alert, otherwise append a list item with a friends name in it
    counter == 9 ? alert("That's all my friends") : frndLst.append($(`<li>${friends[counter]}</li>`));
    //counter + 1
    counter++;
});