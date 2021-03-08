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