const btnOne = $('<button></button>').append('Click Me!').click(() => {
    alert("Thank You!")
});
$('body').prepend(btnOne);