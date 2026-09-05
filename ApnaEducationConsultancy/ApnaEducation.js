  // ---- "More" dropdown toggle ----
  const moreItem = document.getElementById('moreItem');
  const moreToggle = document.getElementById('moreToggle');

  moreToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    moreItem.classList.toggle('open');
  });

  document.addEventListener('click', (e) => {
    if (!moreItem.contains(e.target)) {
      moreItem.classList.remove('open');
    }
  });

  // ---- Login overlay open/close ----
  const loginBtn = document.getElementById('loginBtn');
  const loginOverlay = document.getElementById('loginOverlay');
  const closeLogin = document.getElementById('closeLogin');

  loginBtn.addEventListener('click', () => {
    loginOverlay.classList.add('show');
    document.body.style.overflow = 'hidden';
  });

  closeLogin.addEventListener('click', () => {
    loginOverlay.classList.remove('show');
    document.body.style.overflow = 'auto';
  });

  // ---- Send OTP form ----
  const loginForm = document.getElementById('loginForm');
  loginForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('studentName').value.trim();
    const mobile = document.getElementById('mobileNumber').value.trim();

    if (name === '' || mobile === '') {
      alert('Please fill in both fields.');
      return;
    }
    if (!/^[0-9]{10}$/.test(mobile)) {
      alert('Please enter a valid 10-digit mobile number.');
      return;
    }
    alert('OTP sent to ' + mobile + ' (demo — connect this to your backend/API).');
    // Here you would call your actual OTP API, e.g.:
    // fetch('/api/send-otp', { method: 'POST', body: JSON.stringify({ name, mobile }) })
  });

  // ---- Dark mode toggle ----
  const themeToggle = document.getElementById('themeToggle');
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
  });

    document.getElementById('newsletterForm').addEventListener('submit', function(e){
    e.preventDefault();
    const emailInput = document.getElementById('newsletterEmail');
    const msg = document.getElementById('newsletterMsg');
    const email = emailInput.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailPattern.test(email)){
      msg.textContent = 'Please enter a valid email address.';
      msg.style.color = '#ff8080';
      return;
    }

    // Placeholder for real subscription logic (API call, etc.)
    msg.textContent = 'Thanks! You are subscribed for updates.';
    msg.style.color = '#e0a940';
    emailInput.value = '';
  });