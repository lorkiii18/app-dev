document.addEventListener('DOMContentLoaded', function() {
    // DOM elements
    const openSidebar = document.getElementById('open-sidebar');
    const closeSidebar = document.getElementById('close-sidebar');
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');
    const sidebarLinks = document.querySelector('.sidebar-links');


    // Create overlay element for mobile
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    document.body.appendChild(overlay);

    function updateLayout() {
      const isDesktop = window.innerWidth >= 992;
      const sidebarVisible = sidebar.classList.contains('show');
      
      // Apply to both main content and schedule
    [mainContent].forEach(element => {
          element.classList.toggle('with-sidebar', isDesktop && sidebarVisible);
      });
  }
  // Function to open sidebar
  function showSidebar() {
      sidebar.classList.add('show');
      overlay.classList.add('active');
      updateLayout();
  }
  
  // Function to close sidebar
  function hideSidebar() {
      sidebar.classList.remove('show');
      overlay.classList.remove('active');
      updateLayout();
  }
  // Handle window resize
  window.addEventListener('resize', updateLayout);

    // if the user clicks outside of the sidebar, close the sidebar
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.sidebar') && !openSidebar.contains(e.target)) {
          sidebar.classList.remove('show'); 
          hideSidebar();// Remove 'show' class from sidebar
      }
    });

    // Event Listeners
    openSidebar.addEventListener('click', showSidebar);
    closeSidebar.addEventListener('click', hideSidebar);
    overlay.addEventListener('click', hideSidebar);

    
//   handles all dropdowns in the sidebar
const dropdowns = document.querySelectorAll('.dropdown-toggle');
dropdowns.forEach(dropdown => {
    dropdown.addEventListener('click', function(e) {
      e.preventDefault(); // Stop links from navigating

      // Close other open dropdowns first
      dropdowns.forEach(otherToggle => {
        if (otherToggle !== this) { 
          otherToggle.parentElement.classList.remove('active'); // Remove 'active' class
        }
      });
      // Toggle current dropdown
      this.parentElement.classList.toggle('active'); // Add/remove 'active' class
    });
  });

//   if the user clicks outside of the dropdown, close all dropdowns
  document.addEventListener('click', (e) => {
    // Check if click is NOT inside any dropdown
    if (!e.target.closest('.dropdown')) {
      // Close all dropdowns
        dropdowns.forEach(dropdown => {
            dropdown.parentElement.classList.remove('active'); // Remove 'active' class
        });
    }
  });

  // signout functionality
  document.getElementById('logout-btn').addEventListener("click", function() {
    window.location.href = "../login_component/login.html";
});

});