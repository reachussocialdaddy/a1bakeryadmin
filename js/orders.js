// Orders Page Logic
document.addEventListener('DOMContentLoaded', () => {
    loadOrders();
});

const orders = [
    { id: '#ORD-9921', date: 'Oct 25, 2023', customer: 'Alice Cooper', items: 3, total: '$120.50', status: 'Completed' },
    { id: '#ORD-9922', date: 'Oct 25, 2023', customer: 'Bob Marley', items: 1, total: '$45.00', status: 'Processing' },
    { id: '#ORD-9923', date: 'Oct 24, 2023', customer: 'Charlie Brown', items: 2, total: '$32.00', status: 'Pending' },
    { id: '#ORD-9924', date: 'Oct 24, 2023', customer: 'Diana Ross', items: 5, total: '$210.00', status: 'Completed' },
    { id: '#ORD-9925', date: 'Oct 23, 2023', customer: 'Elvis Presley', items: 1, total: '$12.50', status: 'Cancelled' },
    { id: '#ORD-9926', date: 'Oct 23, 2023', customer: 'Frank Sinatra', items: 4, total: '$85.00', status: 'Completed' }
];

function loadOrders() {
    const tbody = document.getElementById('ordersBody');
    tbody.innerHTML = orders.map(order => `
        <tr>
            <td style="font-weight: 600;">${order.id}</td>
            <td style="color: var(--text-dim);">${order.date}</td>
            <td>${order.customer}</td>
            <td>${order.items} Items</td>
            <td style="font-weight: 600;">${order.total}</td>
            <td><span class="badge ${getStatusClass(order.status)}">${order.status}</span></td>
            <td>
                <button class="btn btn-secondary btn-icon" onclick="viewOrder('${order.id}')"><i class="fas fa-eye"></i></button>
            </td>
        </tr>
    `).join('');
}

function getStatusClass(status) {
    switch(status) {
        case 'Completed': return 'badge-success';
        case 'Processing': return 'badge-warning';
        case 'Pending': return 'badge-warning';
        case 'Cancelled': return 'badge-danger';
        default: return '';
    }
}

function viewOrder(id) {
    alert('Viewing details for order ' + id);
}

// Search functionality
document.getElementById('orderSearch').addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const rows = document.querySelectorAll('#ordersBody tr');
    rows.forEach(row => {
        const text = row.textContent.toLowerCase();
        row.style.display = text.includes(term) ? '' : 'none';
    });
});
