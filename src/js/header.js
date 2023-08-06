const themeSwitcher = document.querySelector('.theme-switch__input');
getTheme();
themeSwitcher.addEventListener('click', event => {
  let theme = '';
  if (themeSwitcher.checked) {
    theme = 'dark';
  } else {
    theme = 'light';
  }
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
});

function getTheme() {
  let theme = localStorage.getItem('theme');
  document.documentElement.setAttribute('data-theme', theme);
  if (theme === 'dark') {
    themeSwitcher.checked = true;
  }
}
