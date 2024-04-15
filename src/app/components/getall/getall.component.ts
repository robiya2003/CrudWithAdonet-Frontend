import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../servises/crud.service';
import { GetAll } from '../../models/get-all';

@Component({
  selector: 'app-getall',
  templateUrl: './getall.component.html',
  styleUrl: './getall.component.css'
})
export class GetallComponent implements OnInit {
  users!:GetAll[]
    constructor(private crudservise:CrudService) {}
    ngOnInit(): void {
      this.GetAllUsers();
    }
    GetAllUsers(){
      this.crudservise.getAll().subscribe({
        next: (data) => {
          this.users = data;
          console.log(data);
        },
        error: (err) => {
          console.log(err);
        }
      })
    }
}
