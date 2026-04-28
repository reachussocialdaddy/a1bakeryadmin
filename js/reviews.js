// Reviews Page Logic
document.addEventListener('DOMContentLoaded', () => {
    loadReviews();
});

const reviews = [
    { name: 'John Doe', rating: 5, comment: 'The chocolate fudge cake was absolutely amazing! Best bakery in town.', date: '2 hours ago' },
    { name: 'Jane Smith', rating: 4, comment: 'Loved the sourdough, but it was slightly overbaked. Will try again!', date: '5 hours ago' },
    { name: 'Mike Johnson', rating: 5, comment: 'Perfect croissants, felt like I was in Paris. 10/10!', date: '1 day ago' },
    { name: 'Sarah Wilson', rating: 3, comment: 'The muffins were a bit dry today. Disappointed.', date: '2 days ago' }
];

function loadReviews() {
    const list = document.getElementById('reviewsList');
    list.innerHTML = reviews.map(rev => `
        <div class="glass" style="padding: 1.5rem;">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1rem;">
                <div style="display: flex; gap: 12px; align-items: center;">
                    <div class="user-avatar">${rev.name.split(' ').map(n => n[0]).join('')}</div>
                    <div>
                        <h4 style="margin-bottom: 2px;">${rev.name}</h4>
                        <div style="color: #fbbf24; font-size: 0.8rem;">
                            ${Array(rev.rating).fill('<i class="fas fa-star"></i>').join('')}
                            ${Array(5 - rev.rating).fill('<i class="far fa-star"></i>').join('')}
                        </div>
                    </div>
                </div>
                <span style="color: var(--text-dim); font-size: 0.8rem;">${rev.date}</span>
            </div>
            <p style="margin-bottom: 1.5rem;">"${rev.comment}"</p>
            <div style="display: flex; gap: 1rem;">
                <button class="btn btn-secondary" style="font-size: 0.8rem;">Respond</button>
                <button class="btn btn-secondary" style="font-size: 0.8rem; color: #f87171;">Flag as Inappropriate</button>
            </div>
        </div>
    `).join('');
}
