// Dashboard Logic
document.addEventListener('DOMContentLoaded', () => {
    initCharts();
    loadRecentOrders();
});

function initCharts() {
    // Revenue Chart
    const ctxRevenue = document.getElementById('revenueChart').getContext('2d');
    new Chart(ctxRevenue, {
        type: 'line',
        data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [{
                label: 'Revenue',
                data: [1200, 1900, 1500, 2100, 2400, 3200, 2800],
                borderColor: '#FF8C42',
                backgroundColor: 'rgba(255, 140, 66, 0.1)',
                borderWidth: 3,
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { display: false }
            },
            scales: {
                y: {
                    grid: { color: 'rgba(255,255,255,0.05)' },
                    ticks: { color: '#A0A0A0' }
                },
                x: {
                    grid: { display: false },
                    ticks: { color: '#A0A0A0' }
                }
            }
        }
    });

    // Category Chart
    const ctxCategory = document.getElementById('categoryChart').getContext('2d');
    new Chart(ctxCategory, {
        type: 'doughnut',
        data: {
            labels: ['Cakes', 'Pastries', 'Bread', 'Cookies'],
            datasets: [{
                data: [40, 25, 20, 15],
                backgroundColor: ['#FF8C42', '#a78bfa', '#4ade80', '#fbbf24'],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: { color: '#A0A0A0', padding: 20 }
                }
            }
        }
    });
}

function loadRecentOrders() {
    const orders = [
        { id: '#ORD-7742', customer: 'John Doe', product: 'Chocolate Fudge Cake', date: 'Oct 24, 2023', amount: '$45.00', status: 'Completed' },
        { id: '#ORD-7743', customer: 'Jane Smith', product: 'Sourdough Bread', date: 'Oct 24, 2023', amount: '$12.50', status: 'Processing' },
        { id: '#ORD-7744', customer: 'Mike Johnson', product: 'Blueberry Muffins', date: 'Oct 23, 2023', amount: '$22.00', status: 'Pending' },
        { id: '#ORD-7745', customer: 'Sarah Wilson', product: 'Croissant Box', date: 'Oct 23, 2023', amount: '$35.00', status: 'Completed' },
        { id: '#ORD-7746', customer: 'David Brown', product: 'Red Velvet Cake', date: 'Oct 22, 2023', amount: '$48.00', status: 'Cancelled' }
    ];

    const tbody = document.getElementById('recentOrdersBody');
    tbody.innerHTML = orders.map(order => `
        <tr>
            <td>${order.id}</td>
            <td style="display: flex; align-items: center; gap: 10px;">
                <div class="user-avatar" style="width: 30px; height: 30px; font-size: 0.8rem;">${order.customer.split(' ').map(n => n[0]).join('')}</div>
                ${order.customer}
            </td>
            <td>${order.product}</td>
            <td>${order.date}</td>
            <td>${order.amount}</td>
            <td><span class="badge ${getStatusClass(order.status)}">${order.status}</span></td>
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
