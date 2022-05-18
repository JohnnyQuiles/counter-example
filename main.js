const removeButton = document.querySelector('#remove');
const addButton = document.querySelector('#add');

let ginumber = 0;
document.getElementById('num').innerText = number;

removeButton.addEventListener('click', function () {
    console.log("remove button click");
    number = number - 1;
    document.getElementById('num').innerText = number;

})

addButton.addEventListener('click', function () {
    console.log("add button click");
    number = number + 1;
    document.getElementById('num').innerText = number;
})


