var inputs = [].slice.call(document.querySelectorAll('.input-js')),
  button = document.querySelector('.button-js');

inputs.forEach(function (el) {
  el.addEventListener('input', checkInputs, false);
});
function checkInputs() {
  var empty = inputs.filter(function (el) {
    return el.value.trim() === '';
  }).length;
  button.disabled = empty !== 0;
}
checkInputs();

// 1. Створити у папці js окремий файл, наприклад, "form-validation.js" і вставити в нього код, що на 1-13 рядках цього файлу

// 2. Підключити його до index.js

// Після цього будуть перевіряться інпути на яких заданий клас "input-js", також кнопка з класом "button-js" буде не активна, до тих пір поки інпути не будуть заповнені.
