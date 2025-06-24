const form = document.getElementById('alphanumericForm');
const input = document.getElementById('inputField');
const message = document.getElementById('message');

form.addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent actual submission for validation

  const inputValue = input.value.trim();
  const alphaNumericRegex = /^[a-z0-9]+$/i;

  if (!alphaNumericRegex.test(inputValue)) {
    message.textContent = 'Error: Input must be alphanumeric (letters and numbers only).';
    message.className = 'error';
  } else {
    message.textContent = `Success: "${inputValue}" is valid and would be submitted.`;
    message.className = 'success';
    // Simulate form submission here if needed
  }
});
