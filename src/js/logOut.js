
const logOutRefs = {
  logOutWindow: document.querySelector('.logged-user'),
};

logOutRefs.logOutWindow.addEventListener('click', openLogOut);

function openLogOut(event) {
  
  event.currentTarget
    .querySelector('.log-out-window')
    .classList.toggle('log-out-hidden');
  
}
