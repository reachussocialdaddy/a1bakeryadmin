// Promotions Page Logic
document.addEventListener('DOMContentLoaded', () => {
    loadPromotions();
});

const promotions = [
    { code: 'BAKERY20', discount: '20% OFF', usage: '45/100', expiry: 'Dec 31, 2023', status: 'Active' },
    { code: 'WELCOME10', discount: '$10.00 Fixed', usage: '120/∞', expiry: 'Ongoing', status: 'Active' },
    { code: 'CAKEDAY', discount: '15% OFF', usage: '20/50', expiry: 'Oct 30, 2023', status: 'Expired' },
    { code: 'FREESHIP', discount: 'Free Shipping', usage: '15/∞', expiry: 'Ongoing', status: 'Active' }
];

function loadPromotions() {
    const tbody = document.getElementById('promotionsBody');
    tbody.innerHTML = promotions.map(promo => `
        <tr>
            <td style="font-weight: 700; color: var(--primary); letter-spacing: 1px;">${promo.code}</td>
            <td>${promo.discount}</td>
            <td>${promo.usage}</td>
            <td style="color: var(--text-dim);">${promo.expiry}</td>
            <td><span class="badge ${promo.status === 'Active' ? 'badge-success' : 'badge-danger'}">${promo.status}</span></td>
            <td>
                <button class="btn btn-secondary btn-icon"><i class="fas fa-edit"></i></button>
            </td>
        </tr>
    `).join('');
}
