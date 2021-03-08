const btnOne = $('<button>Click Me!</button>').click(() => {
    alert("Thank You!")
});
const body = $('body');
body.append(btnOne);
const txtBox = $('#txtBox');
const sbmtBtn = $('#sbmtBtn');
sbmtBtn.click(() => {
    txtBox.val() == '' ? alert("You haven't typed anything!") : alert(txtBox.val());
    txtBox.val('')
});