// Gallery Page Logic
document.addEventListener('DOMContentLoaded', () => {
    loadGallery();
});

const media = [
    'https://images.unsplash.com/photo-1578985545062-69928b1d9587',
    'https://images.unsplash.com/photo-1555507036-ab1f4038808a',
    'https://images.unsplash.com/photo-1585478259715-876a6a81fc08',
    'https://images.unsplash.com/photo-1569864358642-9d16197022c4',
    'https://images.unsplash.com/photo-1499636136210-65422ff04a52',
    'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3',
    'https://images.unsplash.com/photo-1519340333755-5672c7ec902c',
    'https://images.unsplash.com/photo-1509440159596-0249088772ff'
];

function loadGallery() {
    const grid = document.getElementById('galleryGrid');
    grid.innerHTML = media.map((url, i) => `
        <div class="glass" style="padding: 0.5rem; overflow: hidden; position: relative; group;">
            <img src="${url}?w=400&h=400&fit=crop" style="width: 100%; height: 200px; border-radius: 12px; object-fit: cover; display: block;">
            <div style="padding: 0.8rem; display: flex; justify-content: space-between; align-items: center;">
                <span style="font-size: 0.8rem; color: var(--text-dim);">IMG_${100 + i}.jpg</span>
                <button class="btn btn-secondary btn-icon" style="font-size: 0.7rem; color: #f87171;"><i class="fas fa-trash"></i></button>
            </div>
        </div>
    `).join('');
}
