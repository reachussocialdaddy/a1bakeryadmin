// Login Page Logic
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const email = loginForm.querySelector('input[type="text"]').value;
        const password = loginForm.querySelector('input[type="password"]').value;
        const rememberMe = loginForm.querySelector('input[type="checkbox"]').checked;

        if (email === 'admin' && password === 'Socialdaddy') {
            // Add a small loading effect
            const btn = loginForm.querySelector('button');
            btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Authenticating...';
            btn.style.opacity = '0.7';
            btn.disabled = true;

            // Set session
            if (rememberMe) {
                localStorage.setItem('adminLoggedIn', 'true');
            } else {
                sessionStorage.setItem('adminLoggedIn', 'true');
            }

            setTimeout(() => {
                window.location.href = 'index.html';
            }, 1000);
        } else {
            alert('Invalid credentials. Please use admin / Socialdaddy');
        }
    });
});
