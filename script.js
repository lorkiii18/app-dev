
document.addEventListener('DOMContentLoaded', function() {
const openMenu = document.querySelector("#menu-open-button");
const closeMenu = document.querySelector("#menu-close-button");

// toggle menu
openMenu.addEventListener("click", () =>{
    document.body.classList.toggle("show-menu");
});
// close the menu
closeMenu.addEventListener("click", () => openMenu.click());

// for login button that will locate to login page
document.getElementById("loginbtn").addEventListener("click", function(event) {
    event.preventDefault(); // Prevents any default behavior (if it's inside a link or form)
    window.location.href = "login_component/login.html"; // path for login
});

// // Simple Expand Functionality
// document.querySelectorAll('.read-more').forEach(button => {
//     button.addEventListener('click', () => {
//         const fullContent = button.previousElementSibling;
//         const isExpanded = fullContent.classList.contains('active');
        
//         fullContent.classList.toggle('active');
//         button.textContent = isExpanded ? 'Read More' : 'Show Less';
//     });
// });
document.getElementById('applynow').addEventListener("click", function() {
    window.location.href = "applicationfom/tcfrom.html";
 
 });
});