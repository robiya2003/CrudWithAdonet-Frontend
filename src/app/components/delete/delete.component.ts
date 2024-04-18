import { Component } from '@angular/core';
import { CrudService } from '../../servises/crud.service';
import { CreateUser } from '../../models/create-user';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.css'
})
export class DeleteComponent {
  isDeleted: boolean = false;
  myId!: number;
  user: CreateUser = {
    name: "",
    phoneNumber:"",
    email: "",
    password: "",
  };

  constructor(private http : CrudService){
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

  deleteUserById(){
    this.http.delete(this.myId).subscribe({
      next: (data) => {
        console.log(data);
        this.isDeleted = true;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
