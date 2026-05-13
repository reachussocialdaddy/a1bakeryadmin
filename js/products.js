// Products Page Logic
document.addEventListener('DOMContentLoaded', () => {
    loadProducts();
});

const products = [
    { id: 1, name: 'Premium Chocolate Cake', category: 'Cakes', price: '$45.00', stock: 12, status: 'Active', img: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=100&h=100&fit=crop' },
    { id: 2, name: 'French Croissant', category: 'Pastries', price: '$3.50', stock: 45, status: 'Active', img: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=100&h=100&fit=crop' },
    { id: 3, name: 'Artisan Sourdough', category: 'Bread', price: '$8.00', stock: 0, status: 'Out of Stock', img: 'https://images.unsplash.com/photo-1585478259715-876a6a81fc08?w=100&h=100&fit=crop' },
    { id: 4, name: 'Strawberry Macarons', category: 'Pastries', price: '$15.00', stock: 24, status: 'Active', img: 'https://images.unsplash.com/photo-1569864358642-9d16197022c4?w=100&h=100&fit=crop' },
    { id: 5, name: 'Gluten-Free Cookies', category: 'Cookies', price: '$12.00', stock: 18, status: 'Active', img: 'https://images.unsplash.com/photo-1499636136210-65422ff04a52?w=100&h=100&fit=crop' },
    { id: 101, name: 'Bread Pakora', category: 'Snacks', price: '$0.00', stock: 50, status: 'Active', img: 'https://drive.google.com/uc?id=16yPatZpmVqi6At2b6_aEloU6_pKSiGKG' },
    { id: 105, name: 'Samosa', category: 'Snacks', price: '$0.00', stock: 100, status: 'Active', img: 'https://drive.google.com/uc?id=13bI2QBquW9O7gOZAnL6OA-RI4a4OrrCd' },
    { id: 201, name: 'Round Biscuits', category: 'Biscuits', price: '$0.00', stock: 30, status: 'Active', img: 'https://drive.google.com/uc?id=1rKUQjZoI1qzfgmKLdoZdlypFC1fKhSkD' },
    { id: 303, name: '2 Tier Wedding Cake', category: 'Cakes', price: '$0.00', stock: 5, status: 'Active', img: 'https://drive.google.com/uc?id=18tnlpmeGsY3GRAu5W95uSZnEfYVIBEsn' }
];

function loadProducts() {
    const tbody = document.getElementById('productsBody');
    tbody.innerHTML = products.map(product => `
        <tr>
            <td><img src="${product.img}" alt="${product.name}" style="width: 50px; height: 50px; border-radius: 8px; object-fit: crop;"></td>
            <td>
                <div style="font-weight: 600;">${product.name}</div>
                <div style="font-size: 0.8rem; color: var(--text-dim);">SKU: BK-${1000 + product.id}</div>
            </td>
            <td>${product.category}</td>
            <td>${product.price}</td>
            <td>${product.stock} pcs</td>
            <td><span class="badge ${product.status === 'Active' ? 'badge-success' : 'badge-danger'}">${product.status}</span></td>
            <td>
                <div style="display: flex; gap: 8px;">
                    <button class="btn btn-secondary btn-icon" onclick="editProduct(${product.id})"><i class="fas fa-edit"></i></button>
                    <button class="btn btn-secondary btn-icon" style="color: #f87171;" onclick="deleteProduct(${product.id})"><i class="fas fa-trash"></i></button>
                </div>
            </td>
        </tr>
    `).join('');
}

function editProduct(id) {
    alert('Edit product ' + id);
    // Redirect to edit page
}

function deleteProduct(id) {
    if(confirm('Are you sure you want to delete this product?')) {
        alert('Product ' + id + ' deleted (Simulated)');
    }
}

// Search functionality
document.getElementById('productSearch').addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const rows = document.querySelectorAll('#productsBody tr');
    rows.forEach(row => {
        const name = row.querySelector('td:nth-child(2)').textContent.toLowerCase();
        row.style.display = name.includes(term) ? '' : 'none';
    });
});
