// Analytics and charts handling
export class DisasterAnalytics {
    constructor() {
        this.chart = null;
        this.initializeChart();
    }

    initializeChart() {
        const ctx = document.getElementById('analyticsChart').getContext('2d');
        this.chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [
                    {
                        label: 'Earthquakes',
                        data: [4, 2, 3, 1, 5, 2],
                        borderColor: '#e74c3c',
                        tension: 0.1
                    },
                    {
                        label: 'Floods',
                        data: [1, 3, 5, 2, 4, 6],
                        borderColor: '#3498db',
                        tension: 0.1
                    }
                ]
            },
            options: {
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: 'Disaster Incidents in India'
                    }
                }
            }
        });
    }

    updateData(newData) {
        this.chart.data = newData;
        this.chart.update();
    }
}