// Notifications Page Logic
document.addEventListener('DOMContentLoaded', () => {
    loadNotifications();
});

const notifications = [
    { type: 'order', title: 'New Order Received', message: 'Order #ORD-9921 has been placed by Alice Cooper.', time: '10 mins ago', icon: 'fas fa-shopping-bag', color: '#FF8C42' },
    { type: 'stock', title: 'Low Stock Alert', message: 'Butter (Unsalted) is below reorder level (5kg remaining).', time: '1 hour ago', icon: 'fas fa-exclamation-triangle', color: '#fbbf24' },
    { type: 'system', title: 'Backup Successful', message: 'Weekly system backup completed successfully.', time: '5 hours ago', icon: 'fas fa-check-circle', color: '#4ade80' },
    { type: 'user', title: 'New Customer Registered', message: 'David Brown joined A1 Bakery.', time: '1 day ago', icon: 'fas fa-user-plus', color: '#a78bfa' }
];

function loadNotifications() {
    const list = document.getElementById('notificationsList');
    list.innerHTML = notifications.map(notif => `
        <div class="glass" style="padding: 1.2rem; display: flex; gap: 1.2rem; align-items: center;">
            <div style="width: 45px; height: 45px; border-radius: 12px; background: ${notif.color}20; color: ${notif.color}; display: flex; align-items: center; justify-content: center; font-size: 1.2rem; flex-shrink: 0;">
                <i class="${notif.icon}"></i>
            </div>
            <div style="flex-grow: 1;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
                    <h4 style="font-size: 1rem;">${notif.title}</h4>
                    <span style="font-size: 0.8rem; color: var(--text-dim);">${notif.time}</span>
                </div>
                <p style="font-size: 0.9rem; color: var(--text-dim);">${notif.message}</p>
            </div>
            <button class="btn btn-secondary btn-icon" style="font-size: 0.7rem;"><i class="fas fa-times"></i></button>
        </div>
    `).join('');
}
