// Inventory Page Logic
document.addEventListener('DOMContentLoaded', () => {
    loadInventory();
});

const inventory = [
    { name: 'Flour (Premium)', sku: 'RAW-001', stock: 50, reorder: 100, unit: 'kg' },
    { name: 'Sugar (White)', sku: 'RAW-002', stock: 20, reorder: 50, unit: 'kg' },
    { name: 'Butter (Unsalted)', sku: 'RAW-003', stock: 5, reorder: 15, unit: 'kg' },
    { name: 'Chocolate Chips', sku: 'RAW-004', stock: 0, reorder: 10, unit: 'kg' },
    { name: 'Vanilla Extract', sku: 'RAW-005', stock: 2, reorder: 5, unit: 'L' }
];

function loadInventory() {
    const tbody = document.getElementById('inventoryBody');
    tbody.innerHTML = inventory.map(item => `
        <tr>
            <td style="font-weight: 600;">${item.name}</td>
            <td style="color: var(--text-dim);">${item.sku}</td>
            <td>${item.stock} ${item.unit}</td>
            <td>${item.reorder} ${item.unit}</td>
            <td><span class="badge ${getStatusClass(item.stock, item.reorder)}">${getStatusText(item.stock, item.reorder)}</span></td>
            <td>
                <button class="btn btn-secondary btn-icon"><i class="fas fa-plus"></i></button>
            </td>
        </tr>
    `).join('');
}

function getStatusClass(stock, reorder) {
    if (stock === 0) return 'badge-danger';
    if (stock <= reorder) return 'badge-warning';
    return 'badge-success';
}

function getStatusText(stock, reorder) {
    if (stock === 0) return 'Out of Stock';
    if (stock <= reorder) return 'Low Stock';
    return 'In Stock';
}
