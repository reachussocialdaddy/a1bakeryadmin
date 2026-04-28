// Support Page Logic
document.addEventListener('DOMContentLoaded', () => {
    loadTickets();
});

const tickets = [
    { id: '#T-101', user: 'Alice Cooper', subject: 'Late Delivery', status: 'Open', priority: 'High', date: '1 hour ago' },
    { id: '#T-102', user: 'Bob Marley', subject: 'Refund Request', status: 'Closed', priority: 'Medium', date: '5 hours ago' },
    { id: '#T-103', user: 'Charlie Brown', subject: 'Wrong Item Received', status: 'Open', priority: 'Critical', date: '1 day ago' }
];

function loadTickets() {
    const list = document.getElementById('ticketsList');
    list.innerHTML = tickets.map(t => `
        <div class="glass" style="padding: 1.2rem; display: flex; justify-content: space-between; align-items: center;">
            <div>
                <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 5px;">
                    <span style="font-weight: 700; color: var(--primary);">${t.id}</span>
                    <h4 style="font-size: 1rem;">${t.subject}</h4>
                    <span class="badge ${t.priority === 'Critical' ? 'badge-danger' : 'badge-warning'}">${t.priority}</span>
                </div>
                <p style="font-size: 0.9rem; color: var(--text-dim);">By ${t.user} • ${t.date}</p>
            </div>
            <div style="display: flex; gap: 1rem; align-items: center;">
                <span class="badge ${t.status === 'Open' ? 'badge-success' : 'badge-secondary'}">${t.status}</span>
                <button class="btn btn-secondary btn-icon"><i class="fas fa-reply"></i></button>
            </div>
        </div>
    `).join('');
}
