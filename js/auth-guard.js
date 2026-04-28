// Auth Guard - Protecting Admin Pages
(function() {
    const isLoggedIn = localStorage.getItem('adminLoggedIn') || sessionStorage.getItem('adminLoggedIn');
    const path = window.location.pathname;
    const currentPage = path.split('/').pop() || 'index.html';

    // If not logged in and not on login page, redirect to login
    if (!isLoggedIn && currentPage !== 'login.html') {
        window.location.href = 'login.html';
        return;
    }

    // If already logged in and on login page, redirect to index
    if (isLoggedIn && (currentPage === 'login.html' || currentPage === '')) {
        window.location.href = 'index.html';
        return;
    }

    // Handle Logout
    document.addEventListener('DOMContentLoaded', () => {
        const logoutLinks = document.querySelectorAll('a[href="login.html"], .logout-btn');
        logoutLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                localStorage.removeItem('adminLoggedIn');
                sessionStorage.removeItem('adminLoggedIn');
            });
        });
    });
})();
