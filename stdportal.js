document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const openSidebar = document.getElementById('open-sidebar');
    const closeSidebar = document.getElementById('close-sidebar');
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');
    const schedule = document.querySelector('.schedule-container');
    const balance = document.querySelector('.balance-content');
    const navLinks = document.querySelectorAll('.sidebar-links a');
    
    // Create overlay element for mobile
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    document.body.appendChild(overlay);
    
    function updateLayout() {
        const isDesktop = window.innerWidth >= 992;
        const sidebarVisible = sidebar.classList.contains('show');
        
        // Apply to both main content and schedule
        [mainContent, schedule, balance].forEach(element => {
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
    
    // For the specific hash
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
            //  show dashboard as default
            document.querySelector('#dashboard').style.display = 'block';
        }
        
        // Update active link
        navLinks.forEach(link => link.classList.remove('active'));
        if (targetLink)  {
            targetLink.classList.add('active');
        }
    }
    // Check hash on page load and when hash changes
    window.addEventListener('hashchange', checkHash);
    checkHash();

    // signout functionality
    document.getElementById('logout-btn').addEventListener("click", function() {
        window.location.href = "../login_component/login.html";
    });
});