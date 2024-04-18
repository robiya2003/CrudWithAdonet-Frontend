import { Component } from '@angular/core';
import { CreateUser } from '../../models/create-user';
import { CrudService } from '../../servises/crud.service';

@Component({
  selector: 'app-getbyid',
  templateUrl: './getbyid.component.html',
  styleUrl: './getbyid.component.css'
})
export class GetbyidComponent {
  myId!: number;
  user: CreateUser = {
    name:"",
    phoneNumber:"",
    email:"",
    password:""
  };

  constructor(private http :CrudService){
    this.getById();
  }

  ngOnInit(): void {

    this.getById();
  }



  getById(){

    this.http.getById(this.myId).subscribe({
      next: (data) => {
        this.user = data;
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      }
    })

  }
}
