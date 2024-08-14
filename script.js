const inputField = document.querySelector('input');
const buttons = document.querySelectorAll('button');
const validPasswords = ['8-15-2000', '8/15/2000', '08-15-2000', '08/15/2000', '8-15-00', '08-15-00', '8/15/00', '08/15/00'];

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;
    if (value === 'C') {
      inputField.value = '';
    } else if (value === 'Enter') {
      if (validPasswords.includes(inputField.value)) {
        location.href = 'page.html';
      } else {
        alert('Wrong password!');
      }
    } else if (inputField.value.length < 10) {
      inputField.value += value;
    }
  });
});