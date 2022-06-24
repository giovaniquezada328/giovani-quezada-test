import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  private apiUrl = environment.menu;

  constructor(private http: HttpClient) { }

  listMenu() {
    const url = `${this.apiUrl}/menu.json`;
    return this.http.get(url);
  }
}
