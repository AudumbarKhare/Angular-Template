import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BranchLocation } from '../share/interface/branchDetials';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private _http: HttpClient) { }

  getBranchData(): Observable<BranchLocation[]> {
    return this._http.get<BranchLocation[]>('assets/data/branchLocation.json');
  }

  getChartData():Observable<any>{
    return this._http.get<any>('assets/data/chartData.json');
  }
}
