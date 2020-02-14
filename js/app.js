
// header variables
let alertWrapper = document.querySelector('.alert-wrapper');
let alert = document.querySelector('.button-X-alert');
let tealDot = document.querySelector('.teal-dot');
let bell = document.querySelector('.bell-icon');

// dashboard variables
let dashboardSearch = document.querySelector('.dashboard-search');
let magBox = document.querySelector('.mag-box');

// user variables
let messageFields = document.querySelector('.message-fields').clientHeight;
let userFields = document.querySelector('.user-fields');
let userSearch = document.querySelector('.user-search');
let userMessage = document.querySelector('.user-message');


alert.addEventListener('click', () => {
  alertWrapper.innerHTML = "";
  tealDot.style.display = "none";
});


bell.addEventListener('click', () => {
  window.alert('Read the ALERT message.');
  window.alert('Click the X to close the alertbox.');
});

dashboardSearch.addEventListener('focus', () => {
  magBox.style.boxShadow = '4px 0 4px 2px rgba(140, 140, 140, 0.2)';
});

dashboardSearch.addEventListener('blur', () => {
  magBox.style.boxShadow = '';
});

userFields.style.height = messageFields + 'px';

userFields.addEventListener('submit', (e) => {
  e.preventDefault();
  let user = userSearch.value;
  let message = userMessage.value;
  if (user == '' && message == '') {
    window.alert('Enter a user message');
  } else if (user == '') {
    window.alert('Enter a user');
  } else if (message == '') {
    window.alert('Enter a user message');
  } else {
    window.alert('Message Delivered.!');
  }
});
