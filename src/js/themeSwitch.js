const themeSwitcher = document.querySelector('.theme-switch__input');

function getTheme() {
  let theme = localStorage.getItem('theme');
  document.documentElement.setAttribute('data-theme', theme);
  if (theme === 'dark') {
    themeSwitcher.checked = true;
  }
}

function changeTheme(event) {
  let theme = '';
  if (event.currentTarget.checked) {
    theme = 'dark';
  } else {
    theme = 'light';
  }
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
}

export { getTheme, changeTheme, themeSwitcher };
