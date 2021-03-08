const btnOne = $('<button>Click Me!</button>').click(() => {
    alert("Thank You!")
});
const body = $('body');
body.append(btnOne);