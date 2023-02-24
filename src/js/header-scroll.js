window.onscroll = function () {
  if (window.screen.width >= 768) {
    scrollY <= 70
      ? document.querySelector('.header-js').classList.remove('header-bg')
      : document.querySelector('.header-js').classList.add('header-bg');
  } else {
    scrollY <= 120
      ? document.querySelector('.header-js').classList.remove('header-bg')
      : document.querySelector('.header-js').classList.add('header-bg');
  }
};

// 1. Створити у папці js окремий файл, наприклад, "header-scroll.js" і вставити в нього код, що на 1-11 рядках цього файлу

// 2. Підключити його до index.js

// 3. Встанови клас "header-js" на тег header і додай в css до класу "header-bg" стилі фону

// Після цього фіксований header буде отримувати фон при проскролі сторінки до низу
