import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Observable } from 'rxjs';
import { GroupInterface } from 'src/app/shared/interfaces/groupInterface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GroupsService {

  apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  list(pagination?: PageEvent, filter ?: string, sort?: { direction: string; active: string } ): Observable<HttpResponse<GroupInterface>> {
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
    return this.http.get<GroupInterface>(`${this.apiUrl}v1/examen/groups/` + query , {observe: 'response'});
  }

  detail(id: string): Observable<HttpResponse<GroupInterface>> {
    return this.http.get<GroupInterface>(`${this.apiUrl}v1/examen/employees/giovani/getByGroup?id=${id}`, {
      observe: 'response',
    });
  }
}
