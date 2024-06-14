document.addEventListener('DOMContentLoaded', function () {
    // Placeholder data for charts
    const occupancyData = {
        labels: ['Building 4633', 'Building 4655', 'Building 4677', 'Building 4699'],
        datasets: [{
            label: 'Occupied Sqft',
            data: [45000, 48000, 42000, 47000],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }, {
            label: 'Vacant Sqft',
            data: [5000, 2000, 8000, 3000],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        }]
    };

    const leasingTrendsData = {
        labels: ['2021', '2022', '2023', '2024'],
        datasets: [{
            label: 'Leases Expiring',
            data: [10, 15, 20, 5],
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
            borderColor: 'rgba(153, 102, 255, 1)',
            borderWidth: 1
        }]
    };

    const industryData = {
        labels: ['Technology', 'Legal Services', 'Property Management', 'Foodservice Parts', 'Architecture'],
        datasets: [{
            label: 'Industry Distribution',
            data: [25, 10, 15, 5, 15],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
        }]
    };

    const sizeCategoryData = {
        labels: ['1-1000 sqft', '1001-2000 sqft', '2001-3500 sqft', '3500+ sqft'],
        datasets: [{
            label: 'Size Category Distribution',
            data: [20, 25, 15, 10],
            backgroundColor: 'rgba(255, 206, 86, 0.2)',
            borderColor: 'rgba(255, 206, 86, 1)',
            borderWidth: 1
        }]
    };

    // Create charts
    new Chart(document.getElementById('occupancyChart'), {
        type: 'bar',
        data: occupancyData,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    new Chart(document.getElementById('leasingTrendsChart'), {
        type: 'line',
        data: leasingTrendsData,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    new Chart(document.getElementById('industryChart'), {
        type: 'pie',
        data: industryData
    });

    new Chart(document.getElementById('sizeCategoryChart'), {
        type: 'doughnut',
        data: sizeCategoryData
    });
});
