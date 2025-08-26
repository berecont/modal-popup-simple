// *** popup - once a day *** //
// check this day
const today = new Date().toISOString().slice(0, 10);

// Check if user has already seen the popup today
if (localStorage.getItem('popupShownDate') !== today) {
  const popup = document.querySelector('.popup');
  
  if (popup) {
    // Show the popup
    popup.style.display = 'block';
    
    // Add click event listener to close button
    const close = popup.querySelector('.close');
    if (close) {
      close.addEventListener('click', function() {
        popup.style.display = 'none';
      });
    }
    
    // Save in local storage that popup was shown today
    localStorage.setItem('popupShownDate', today);
  }
}
