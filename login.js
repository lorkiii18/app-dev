const signInTCButton = document.getElementById('signInTC');
const signInSTButton = document.getElementById('signInST');
const signInAdminFromStudent = document.getElementById('signInAdminFromStudent');
const adminBackButton = document.getElementById('adminBackBtn');
const adminToStudent = document.getElementById('adminToStudent');
const adminToTeacher = document.getElementById('adminToTeacher');
const signInADButton = document.getElementById('signInAdmin');
const container = document.getElementById('popup_login');

// for login as teacher
// Update your event listeners to properly handle transitions
signInTCButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
    container.classList.remove('admin-panel-active');
});

// Student login
signInSTButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
    container.classList.remove('admin-panel-active');
});

// Admin login from teacher side
signInADButton.addEventListener('click', () => {
    container.classList.add('admin-panel-active');
});

// Admin login from student side
signInAdminFromStudent.addEventListener('click', () => {
    container.classList.add('admin-panel-active');
});

// Navigation from admin panel
adminToStudent.addEventListener('click', () => {
    container.classList.remove('admin-panel-active');
    container.classList.remove('right-panel-active');
});

adminToTeacher.addEventListener('click', () => {
    container.classList.remove('admin-panel-active');
    container.classList.add('right-panel-active');
});

// Back button functionality
document.getElementById('backbtn').addEventListener("click", function() {
    window.location.href = "../main.html";

});
document.getElementById('signIn-std').addEventListener("click", function() {
    window.location.href = "../studentportal/stdportal.html";

});
document.getElementById('signIn-teacher').addEventListener("click", function() {
    window.location.href = "../teacherportal/teacher.html";

});
document.getElementById('signIn-admin').addEventListener("click", function() {
    window.location.href = "../adminportal/admin.html";

});
