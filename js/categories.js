// Categories Page Logic
document.addEventListener('DOMContentLoaded', () => {
    loadCategories();
});

const categories = [
    { id: 1, name: 'Cakes', count: 24, icon: 'fas fa-birthday-cake', color: '#FF8C42' },
    { id: 2, name: 'Bread', count: 12, icon: 'fas fa-bread-slice', color: '#4ade80' },
    { id: 3, name: 'Pastries', count: 35, icon: 'fas fa-cookie', color: '#a78bfa' },
    { id: 4, name: 'Cookies', count: 18, icon: 'fas fa-cookie-bite', color: '#fbbf24' },
    { id: 5, name: 'Cupcakes', count: 15, icon: 'fas fa-ice-cream', color: '#f472b6' }
];

function loadCategories() {
    const grid = document.getElementById('categoriesGrid');
    grid.innerHTML = categories.map(cat => `
        <div class="glass" style="padding: 1.5rem; position: relative;">
            <div style="display: flex; align-items: center; gap: 1.5rem;">
                <div style="width: 60px; height: 60px; border-radius: 12px; background: ${cat.color}20; color: ${cat.color}; display: flex; align-items: center; justify-content: center; font-size: 1.5rem;">
                    <i class="${cat.icon}"></i>
                </div>
                <div>
                    <h3 style="margin-bottom: 0.2rem;">${cat.name}</h3>
                    <p style="color: var(--text-dim); font-size: 0.9rem;">${cat.count} Products</p>
                </div>
            </div>
            <div style="position: absolute; top: 1rem; right: 1rem; display: flex; gap: 5px;">
                <button class="btn btn-secondary btn-icon" style="font-size: 0.8rem;"><i class="fas fa-edit"></i></button>
                <button class="btn btn-secondary btn-icon" style="font-size: 0.8rem; color: #f87171;"><i class="fas fa-trash"></i></button>
            </div>
        </div>
    `).join('');
}

function showAddModal() {
    document.getElementById('modalOverlay').style.display = 'flex';
}

function closeModal() {
    document.getElementById('modalOverlay').style.display = 'none';
}

function saveCategory() {
    const name = document.getElementById('catName').value;
    if(name) {
        alert('Category "' + name + '" added! (Simulated)');
        closeModal();
    }
}
