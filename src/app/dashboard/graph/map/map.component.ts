import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

interface StateCapital {
  state: string;
  capital: string;
  latitude: number;
  longitude: number;
}

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, AfterViewInit {
  map?: L.Map;

  stateCapitals: StateCapital[] = [
    { "state": "Andhra Pradesh", "capital": "Amaravati", "latitude": 16.5000, "longitude": 80.2167 },
    { "state": "Arunachal Pradesh", "capital": "Itanagar", "latitude": 27.5833, "longitude": 93.6167 },
    { "state": "Maharashtra", "capital": "Mumbai", "latitude": 19.01699038, "longitude": 72.8569893 },
    { "state": "Maharashtra", "capital": "Pune", "latitude": 18.53001752, "longitude": 73.85000362 },
    { "state": "Karnataka", "capital": "Bangalore", "latitude": 12.96999514, "longitude": 77.56000972 },
    { "state": "Telangana", "capital": "Hyderabad", "latitude": 17.39998313, "longitude": 78.47995357 }
  ];
  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.initMap();
  }
  private createMarker(capital: StateCapital): L.Marker {
    const marker = L.marker([capital.latitude, capital.longitude]);
    marker.bindPopup(`<b>${capital.capital}</b>, capital of ${capital.state}`);
    return marker;
  }

  private initMap() {
    try {
      console.log('Initializing map...');

      this.map = L.map('map').setView([20, 77], 4.5); // Center on India with zoom level 4.5

      console.log('Adding base tiles...');

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(this.map);

      this.stateCapitals.forEach(capital => {
        const marker = this.createMarker(capital);
        console.log(`Creating marker for ${capital.capital}`);

        marker.addTo(this.map);

        this.map?.invalidateSize();
        window.addEventListener('resize', () => {
          this.map?.invalidateSize();
        })

      });
    } catch (error) {
      console.error('Error initializing map:', error);
      
    }
  }

}
