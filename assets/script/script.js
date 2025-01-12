

// Nav for SP
// open the dropdown menu when hamburger icon is clicked

const hamburgerIcon = document.getElementById('hamburgerIcon');
hamburgerIcon.addEventListener('click', function() {
  const dropdownList = document.getElementById('dropdownList');
  if (dropdownList.style.display === 'none') {
    dropdownList.style.display = 'block';
  } else {
    dropdownList.style.display = 'none';
  }
});



// Courses and Purposes
// switch content depends on the tab clicked
function openContent(event, choice) {

  // Get all elements with class="tabcontent" and hide them
  const tabcontents = document.getElementsByClassName("tabcontents");
  Array.from(tabcontents).forEach( tabcontent => {
    tabcontent.style.display = "none";
  });

  // Get all elements with class="tabs" and remove the class "active"
  const tabs = document.getElementsByClassName("tab");
  Array.from(tabs).forEach( tab => {
    tab.className = tab.className.replace(" active", "");
  });

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(choice).style.display = "block";
  event.currentTarget.className += " active";
}


