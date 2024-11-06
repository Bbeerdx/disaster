// Map initialization and handling

export class DisasterMap {
    constructor() {
        this.map = L.map('map').setView([20.5937, 78.9629], 5);
        this.markers = [];
        this.initializeMap();
    }

    initializeMap() {
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map);
    }

    addDisasterMarker(disaster) {
        const marker = L.marker(disaster.location)
            .addTo(this.map)
            .bindPopup(this.createPopupContent(disaster));
        this.markers.push(marker);
    }

    createPopupContent(disaster) {
        return `
            <div class="disaster-popup">
                <h3>${disaster.type}</h3>
                ${disaster.magnitude ? `<p>Magnitude: ${disaster.magnitude}</p>` : ''}
                ${disaster.severity ? `<p>Severity: ${disaster.severity}</p>` : ''}
                ${disaster.waterLevel ? `<p>Water Level: ${disaster.waterLevel}</p>` : ''}
                <p>Last Updated: ${new Date().toLocaleString()}</p>
            </div>
        `;
    }

    clearMarkers() {
        this.markers.forEach(marker => marker.remove());
        this.markers = [];
    }
}