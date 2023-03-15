const form = document.getElementById('payment-form');
const cardNumberInput = document.getElementById('card-number');
const cardNumberDisplay = document.getElementById('card-number-display');
const nameInput = document.getElementById('name');
const nameDisplay = document.getElementById('card-name');
const expiryInput = document.getElementById('expiration-date');
const expiryDisplay = document.getElementById('card-expiry');
const cvvInput = document.getElementById('cvv');
const cardFront = document.getElementById('card-front');
const cardBack = document.getElementById('card-back');
const cardLogo = document.getElementById('card-logo');
const cardChip = document.getElementById('card-chip');
const cardMagneticStripe = document.getElementById('card-magnetic-stripe');

// Listen for form submission
form.addEventListener('submit', function(event) {
  event.preventDefault();
  updateCardDisplay();
  saveFormData();
});

// Update card display
function updateCardDisplay() {
  const cardNumber = cardNumberInput.value;
  const name = nameInput.value;
  const expiry = expiryInput.value;
  const cvv = cvvInput.value;

  // Update card number display
  cardNumberDisplay.textContent = cardNumber.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ');

  // Update card name display
  nameDisplay.textContent = name.toUpperCase();

  // Update card expiry display
  expiryDisplay.textContent = expiry;

  // Flip card
  cardFront.style.transform = 'rotateY(180deg)';
  cardBack.style.transform = 'rotateY(0deg)';

  // Update card logo and chip
  if (cardNumber.startsWith('4')) {
    // Visa
    cardLogo.className = 'visa-logo';
    cardChip.className = 'visa-chip';
    cardMagneticStripe.className = 'visa-magnetic-stripe';
  } else if (cardNumber.startsWith('5')) {
    // Mastercard
    cardLogo.className = 'mastercard-logo';
    cardChip.className = 'mastercard-chip';
    cardMagneticStripe.className = 'mastercard-magnetic-stripe';
  } else {
    // Unknown card type
    cardLogo.className = '';
    cardChip.className = '';
    cardMagneticStripe.className = '';
  }
}

// Save form data in local storage
function saveFormData() {
  const formData = {
    cardNumber: cardNumberInput.value,
    name: nameInput.value,
    expiry: expiryInput.value,
    cvv: cvvInput.value,
  };
  localStorage.setItem('paymentFormData', JSON.stringify(formData));
}

// Load saved form data from local storage
function loadFormData() {
  const savedFormData = localStorage.getItem('paymentFormData');
  if (savedFormData) {
    const formData = JSON.parse(savedFormData);
    cardNumberInput.value = formData.cardNumber;
    nameInput.value = formData.name;
    expiryInput.value = formData.expiry;
    cvvInput.value = formData.cvv;
    updateCardDisplay();
  }
}

// Flip card back to front when input fields are focused
cardNumberInput.addEventListener('focus', function() {
  cardFront.style.transform = 'rotateY(0deg)';
  cardBack.style.transform = 'rotateY(-180deg)';
});

nameInput.addEventListener('focus', function() {
  cardFront.style.transform = 'rotateY(0deg)';
  cardBack.style.transform = 'rotateY(-180deg)';
});

expiryInput.addEventListener('focus', function() {
  cardFront.style.transform = 'rotateY(0deg)';
  cardBack.style.transform = 'rotateY(-180deg)';
});


