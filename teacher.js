document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const openSidebar = document.getElementById('open-sidebar');
    const closeSidebar = document.getElementById('close-sidebar');
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');
    const navLinks = document.querySelectorAll('.sidebar-links a');
    
    // Create overlay element for mobile
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    document.body.appendChild(overlay);
    
    // Function to open sidebar
    function showSidebar() {
        sidebar.classList.add('show');
        overlay.classList.add('active');
        
        // On larger screens, we can push the content
        if (window.innerWidth >= 992) {
            mainContent.classList.add('with-sidebar');
        }
    }
    
    // Function to close sidebar
    function hideSidebar() {
        sidebar.classList.remove('show');
        overlay.classList.remove('active');
        
        // Remove content push if applied
        mainContent.classList.remove('with-sidebar');
    }
// close sidebar when clicking outside of it
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.sidebar') && !openSidebar.contains(e.target)) {
            hideSidebar(); // Remove 'show' class from sidebar
        }
      });
    
    // Event Listeners
    openSidebar.addEventListener('click', showSidebar);
    closeSidebar.addEventListener('click', hideSidebar);
    overlay.addEventListener('click', hideSidebar);
    
    // Handle navigation clicks
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Set active class
            navLinks.forEach(item => item.classList.remove('active'));
            this.classList.add('active');
            
            // For mobile devices, close the sidebar after clicking a link
            if (window.innerWidth < 992) {
                hideSidebar();
            }
            
            // logout functionality
            if (this.id === 'logout-btn') {
                e.preventDefault();
                // Add logout logic here
                alert('Logging out...');
                
            }
        });
    });
    
    // Check for hash in URL to activate the specific section and link
    function checkHash() {
        const hash = window.location.hash || '#dashboard';
        const targetSection = document.querySelector(hash);
        const targetLink = document.querySelector(`a[href="${hash}"]`);
        
        // Hide all sections and show the targeted one
        document.querySelectorAll('section').forEach(section => {
            section.style.display = 'none';
        });
        
        if (targetSection) {
            targetSection.style.display = 'block';
        } else {
            // If no valid section is found, show dashboard as default
            document.querySelector('#dashboard').style.display = 'block';
        }
        
        // Update active link
        navLinks.forEach(link => link.classList.remove('active'));
        if (targetLink)
            {
            targetLink.classList.add('active');
        }
    }
    
    // Check hash on page load and when hash changes
    window.addEventListener('hashchange', checkHash);
    checkHash();
    
    // Responsive behavior for window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth >= 992) {
            if (sidebar.classList.contains('show')) {
                mainContent.classList.add('with-sidebar');
            }
        } else {
            mainContent.classList.remove('with-sidebar');
        }
    });
        // signout functionality
        document.getElementById('logout-btn').addEventListener("click", function() {
            window.location.href = "../login_component/login.html";
        });
});