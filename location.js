// Location tracking
export class LocationTracker {
    constructor(map) {
        this.map = map;
        this.currentLocation = null;
    }

    startTracking() {
        if (navigator.geolocation) {
            navigator.geolocation.watchPosition(
                position => this.updateLocation(position),
                error => console.error('Error tracking location:', error),
                { enableHighAccuracy: true }
            );
        }
    }

    updateLocation(position) {
        const { latitude, longitude } = position.coords;
        this.currentLocation = { latitude, longitude };

        // Only update if within India's boundaries
        if (this.isWithinIndia(latitude, longitude)) {
            this.map.setView([latitude, longitude], 13);
            this.updateLocationMarker(latitude, longitude);
        }
    }

    isWithinIndia(lat, lng) {
        return lat >= 8.4 && lat <= 37.6 && lng >= 68.7 && lng <= 97.25;
    }

    updateLocationMarker(lat, lng) {
        if (this.locationMarker) {
            this.locationMarker.setLatLng([lat, lng]);
        } else {
            this.locationMarker = L.marker([lat, lng])
                .addTo(this.map)
                .bindPopup('Your Location');
        }
    }
}