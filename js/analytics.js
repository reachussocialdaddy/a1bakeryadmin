// Analytics Page Logic
document.addEventListener('DOMContentLoaded', () => {
    const ctxTraffic = document.getElementById('trafficChart').getContext('2d');
    new Chart(ctxTraffic, {
        type: 'bar',
        data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [{
                label: 'Visitors',
                data: [450, 600, 550, 800, 950, 1200, 1100],
                backgroundColor: '#FF8C42',
                borderRadius: 8
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#A0A0A0' } },
                x: { grid: { display: false }, ticks: { color: '#A0A0A0' } }
            }
        }
    });

    const ctxDevice = document.getElementById('deviceChart').getContext('2d');
    new Chart(ctxDevice, {
        type: 'pie',
        data: {
            labels: ['Mobile', 'Desktop', 'Tablet'],
            datasets: [{
                data: [65, 25, 10],
                backgroundColor: ['#FF8C42', '#a78bfa', '#fbbf24'],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { position: 'bottom', labels: { color: '#A0A0A0' } }
            }
        }
    });
});
