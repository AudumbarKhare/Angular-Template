import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { DashboardService } from '../../../service/dashboard.service';
import { BranchLocation } from 'src/app/share/interface/branchDetials';

interface Statelocation {
  state: string;
  city: string;
  latitude?: number;
  longitude?: number;
  owner?: string;
}

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  map?: L.Map;

  statelocations: BranchLocation[] = [];

  constructor(private _dashboardService: DashboardService) { }

  ngOnInit(): void {
    this._dashboardService.getBranchData().subscribe(res => {
      this.statelocations = res;
      this.initMap();
    });
  }

  private createMarker(location: Statelocation): L.Marker {
    const marker = L.marker([location.latitude, location.longitude]);
    marker.bindPopup(`<b>${location.city}</b>, location of ${location.state}`);
    return marker;
  }

  private initMap() {
    try {
      this.map = L.map('map').setView([20, 77], 4.5);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map);

      this.statelocations.forEach(location => {
        const marker = this.createMarker(location);
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
