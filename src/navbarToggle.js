// Add this code in your JavaScript file or script tag

document.addEventListener('DOMContentLoaded', function () {
  const checkbox = document.getElementById('check');
  const navList = document.querySelector('nav ul');

  checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
      navList.classList.remove('hidden');
    } else {
      navList.classList.add('hidden');
    }
  });
});
