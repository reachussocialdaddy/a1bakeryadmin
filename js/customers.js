// Customers Page Logic
document.addEventListener('DOMContentLoaded', () => {
    loadCustomers();
});

const customers = [
    { name: 'John Doe', email: 'john@example.com', orders: 12, spent: '$540.00', joined: 'Jan 12, 2023' },
    { name: 'Jane Smith', email: 'jane@example.com', orders: 8, spent: '$320.50', joined: 'Feb 05, 2023' },
    { name: 'Mike Johnson', email: 'mike@example.com', orders: 15, spent: '$780.00', joined: 'Mar 15, 2023' },
    { name: 'Sarah Wilson', email: 'sarah@example.com', orders: 4, spent: '$110.00', joined: 'Apr 22, 2023' },
    { name: 'David Brown', email: 'david@example.com', orders: 20, spent: '$1,200.00', joined: 'May 10, 2023' }
];

function loadCustomers() {
    const tbody = document.getElementById('customersBody');
    tbody.innerHTML = customers.map(cust => `
        <tr>
            <td style="display: flex; align-items: center; gap: 12px;">
                <div class="user-avatar" style="width: 35px; height: 35px; font-size: 0.9rem;">${cust.name.split(' ').map(n => n[0]).join('')}</div>
                <div style="font-weight: 600;">${cust.name}</div>
            </td>
            <td>${cust.email}</td>
            <td>${cust.orders} Orders</td>
            <td style="font-weight: 600;">${cust.spent}</td>
            <td style="color: var(--text-dim);">${cust.joined}</td>
            <td>
                <button class="btn btn-secondary btn-icon"><i class="fas fa-envelope"></i></button>
                <button class="btn btn-secondary btn-icon"><i class="fas fa-ellipsis-h"></i></button>
            </td>
        </tr>
    `).join('');
}
