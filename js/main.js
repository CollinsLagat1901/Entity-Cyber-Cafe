// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

  // Close menu when a link is clicked
  const menuLinks = mobileMenu.querySelectorAll('a');
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    });
  });
}

// Copy-to-Clipboard Functionality for Payment Number
const copyPaymentBtn = document.getElementById('copyPaymentBtn');
if (copyPaymentBtn) {
  copyPaymentBtn.addEventListener('click', () => {
    const paymentNumber = document.getElementById('paymentNumber').textContent;
    
    navigator.clipboard.writeText(paymentNumber).then(() => {
      // Visual feedback
      const originalText = copyPaymentBtn.textContent;
      copyPaymentBtn.textContent = 'Copied!';
      copyPaymentBtn.classList.add('bg-green-500');
      copyPaymentBtn.classList.remove('bg-cyan-400');
      
      setTimeout(() => {
        copyPaymentBtn.textContent = originalText;
        copyPaymentBtn.classList.remove('bg-green-500');
        copyPaymentBtn.classList.add('bg-cyan-400');
      }, 2000);
    }).catch(err => {
      console.error('Failed to copy:', err);
      copyPaymentBtn.textContent = 'Copy failed';
    });
  });
}

// Smooth Scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});
