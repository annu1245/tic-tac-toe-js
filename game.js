let boxes = document.querySelectorAll('.box');
console.log(boxes);

function user() {
    console.log(`You clicked on ${this}`);
    console.log(this.getAttribute('id')); // logs the element that was clicked upon to
}
boxes.forEach(elem => {
    elem.addEventListener("click", user);
})

