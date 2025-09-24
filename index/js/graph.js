// On récupère le canvas
const ctx = document.getElementById('myChart').getContext('2d');

// Création du dégradé sous la courbe
const gradient = ctx.createLinearGradient(0, 0, 0, 300);
gradient.addColorStop(0, 'rgba(55, 96, 176, 0.128)'); // vert clair en haut
gradient.addColorStop(1, 'rgba(55, 96, 176, 0)'); // transparent en bas

// Création du graphique
new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'], // Mois
        datasets: [{
            label: 'Ventes',
            data: [200000, 450000, 700000, 950000, 1400000, 1876580], // Données
            borderColor: '#3259a6', // couleur de la ligne
            //fontSize: '5px',
            backgroundColor: gradient, // remplissage sous la courbe
            fill: true, // active le dégradé
            tension: 0.3, // arrondit la courbe
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { display: false }, // on cache la légende
            tooltip: { enabled: true } // info au survol
        },
        scales: {
            x: {
                grid: { display: false } // cache les lignes verticales
            },
            y: {
                grid: { color: '#eee' } // lignes horizontales légères
            }
        }
    }
});