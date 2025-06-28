//your JS code here. If required.
//your JS code here. If required.
// Apply saved preferences on page load
window.addEventListener('DOMContentLoaded', () => {
  const fontsize = getCookie('fontsize');
  const fontcolor = getCookie('fontcolor');

  if (fontsize) {
    document.documentElement.style.setProperty('--fontsize', `${fontsize}px`);
    document.getElementById('fontsize').value = fontsize;
  }

  if (fontcolor) {
    document.documentElement.style.setProperty('--fontcolor', fontcolor);
    document.getElementById('fontcolor').value = fontcolor;
  }
});

// Handle form submission
document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent page reload

  const fontsize = document.getElementById('fontsize').value;
  const fontcolor = document.getElementById('fontcolor').value;

  // Save to cookies
  setCookie('fontsize', fontsize, 365);
  setCookie('fontcolor', fontcolor, 365);

  // Apply changes immediately
  document.documentElement.style.setProperty('--fontsize', `${fontsize}px`);
  document.documentElement.style.setProperty('--fontcolor', fontcolor);
});

// Helper functions
function setCookie(name, value, days) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${value}; expires=${expires}; path=/`;
}

function getCookie(name) {
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  return match ? match[2] : null;
}