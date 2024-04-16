import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetAll } from '../models/get-all';
import { CreateUser } from '../models/create-user';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
baseurl:string="https://localhost:7153/api/Users/";
  constructor(private http:HttpClient) { }
  
  getAll(): Observable<GetAll[]> {
    return this.http.get<GetAll[]>(this.baseurl+"GetUsers");
  }
  create(data:any):Observable<any>{
    return this.http.post<any>(this.baseurl+"PostUsers",data)
  }
}
