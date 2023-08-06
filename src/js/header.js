import { getTheme, changeTheme, themeSwitcher } from './themeSwitch';

getTheme();
themeSwitcher.addEventListener('click', changeTheme);
