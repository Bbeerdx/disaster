import { DisasterMap } from './map.js';
import { DisasterAnalytics } from './analytics.js';
import { Auth } from './auth.js';
import { DonationSystem } from './donation.js';
import { LocationTracker } from './location.js';

// Mock disaster data
const disasters = [
    { 
        type: 'Earthquake',
        location: [28.7041, 77.1025],
        magnitude: 4.5,
        timestamp: new Date()
    },
    {
        type: 'Flood',
        location: [19.0760, 72.8777],
        severity: 'High',
        waterLevel: '10.5m',
        timestamp: new Date()
    }
];

// Initialize all modules
document.addEventListener('DOMContentLoaded', () => {
    const map = new DisasterMap();
    const analytics = new DisasterAnalytics();
    const auth = new Auth();
    const donation = new DonationSystem();
    const locationTracker = new LocationTracker(map.map);

    // Add disaster markers
    disasters.forEach(disaster => map.addDisasterMarker(disaster));

    // Start location tracking
    locationTracker.startTracking();

    // Setup search functionality
    const searchBox = document.querySelector('.search-box input');
    searchBox.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const searchTerm = searchBox.value.toLowerCase();
            const filteredDisasters = disasters.filter(d => 
                d.type.toLowerCase().includes(searchTerm) ||
                d.location.join(',').includes(searchTerm)
            );
            
            map.clearMarkers();
            filteredDisasters.forEach(disaster => map.addDisasterMarker(disaster));
        }
    });
});