let storage = window.localStorage;
let form = document.querySelector("#reg");
let input = document.querySelectorAll('.input');
window.onbeforeunload = function () {
    storage.setItem('username', input[0].value);
    storage.setItem('email', input[1].value);
    storage.setItem('password', input[2].value);
}
window.onload = function () {
    input[0].value = storage.getItem('username');
    input[1].value = storage.getItem('email');
    input[2].value = storage.getItem('password');
}
form.addEventListener('submit', (event) => {
    form.submit();
    storage.clear();
    input[0].value = '';
    input[1].value = '';
    input[2].value = '';
})

