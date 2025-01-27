function toggleForms() {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    loginForm.style.display = loginForm.style.display === 'none' ? 'block' : 'none';
    registerForm.style.display = registerForm.style.display === 'none' ? 'block' : 'none';
}

function register() {
    const userEmail = document.getElementById('userEmail').value;
    const userMobile = document.getElementById('mobileNumber').value;
    const userDOB = document.getElementById('userDOB').value;
    const userPassword = document.getElementById('userPassword').value;
    if (userEmail && userMobile && userDOB && userPassword) {
        localStorage.setItem('userEmail', userEmail);
        localStorage.setItem('userPassword', userPassword);
        localStorage.setItem('userMobile', userMobile);
        localStorage.setItem('userDOB', userDOB);
        alert('Registration successful!');
        toggleForms();
    } else {
        alert('Please fill out all fields.');
    }
}

function login() {
    const userEmail = document.getElementById('userEmail').value;
    const userPassword = document.getElementById('userPassword').value;
    const storedEmail = localStorage.getItem('userEmail');
    const storedPassword = localStorage.getItem('userPassword');

    if (userEmail === storedEmail && userPassword === storedPassword) {
        alert('Login successful!');
        window.location.href = '/HTML&CSS/index.html';
    } else {
        alert('Incorrect username or password.');
    }
}