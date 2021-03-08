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