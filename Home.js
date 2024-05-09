
const searchInput = document.querySelector('.search-bar input[name="q"]');

searchInput.addEventListener('keyup', () => {
  const searchTerm = searchInput.value;
  alert(`You searched for: ${searchTerm}`);
});


const contactForm = document.querySelector('.contactform form');

contactForm.addEventListener('submit', (event) => {
  const fullNameInput = document.querySelector('.inputBox input[name=""]'); // Update selector if name attribute is different
  const emailInput = document.querySelector('.inputBox input[type="email"]'); // Add type="email" for email validation
  const messageInput = document.querySelector('.inputBox textarea');

  let isValid = true;

  if (fullNameInput.value === '') {
    isValid = false;
    alert('Please enter your full name');
  }

  if (emailInput.value === '' || !emailInput.value.includes('@')) { // Check for "@" symbol
    isValid = false;
    alert('Please enter a valid email address');
  }

  if (messageInput.value === '') {
    isValid = false;
    alert('Please enter your message');
  }

  if (!isValid) {
    event.preventDefault(); // Prevent form submission if validation fails
  }
});
