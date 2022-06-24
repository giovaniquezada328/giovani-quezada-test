import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Observable } from 'rxjs';
import { EmployeeInterface } from 'src/app/shared/interfaces/employeeInterface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  list(pagination?: PageEvent, filter ?: string, sort?: { direction: string; active: string } ): Observable<HttpResponse<EmployeeInterface>> {
    let paginationQuery = '';
    if (pagination) {
      paginationQuery = `page[size]=${pagination.pageSize}&page[number]=${
        pagination.pageIndex + 1
      }&`;
    }
    let filterQuery = 'giovani';
    if (filter !== undefined) {
      filterQuery = `filter[name]=${filter}&`;
    }
    let sortQuery = '';
    if (sort !== undefined) {
      if (sort.direction === '') {
        sort.direction = 'ASC';
      }
      sortQuery = `sort[direction]=${sort.direction.toUpperCase()}&sort[active]=${sort.active}`;
    }
    const query = paginationQuery + filterQuery  + sortQuery;
    return this.http.get<EmployeeInterface>(`${this.apiUrl}v1/examen/employees/` + query , {observe: 'response'});
  }

  create(data: object): Observable<HttpResponse<EmployeeInterface>> {
    return this.http.post<EmployeeInterface>(`${this.apiUrl}v1/examen/employees/giovani`, data, {
      observe: 'response',
    });
  }
}
