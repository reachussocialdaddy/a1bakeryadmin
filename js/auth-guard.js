// Auth Guard - Protecting Admin Pages
(function() {
    const isLoggedIn = localStorage.getItem('adminLoggedIn');
    const currentPage = window.location.pathname.split('/').pop();

    if (!isLoggedIn && currentPage !== 'login.html' && currentPage !== '') {
        window.location.href = 'login.html';
    }

    // Handle Logout
    document.addEventListener('DOMContentLoaded', () => {
        const logoutLinks = document.querySelectorAll('a[href="login.html"]');
        logoutLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                localStorage.removeItem('adminLoggedIn');
            });
        });
    });
})();
