import { Component } from '@angular/core';
import { CrudService } from '../../servises/crud.service';
import { CreateUser } from '../../models/create-user';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent {
  myId!: number;
  isSubmitted: boolean = false;
  user: CreateUser = {
    name: "",
    email: "",
    password: "",
    phoneNumber:""
  };

  setValue: CreateUser = {
    name: "",
    email: "",
    password: "",
    phoneNumber:""
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

  setUser(){
    this.http.update(this.myId, this.setValue).subscribe({
      next: (data) => {
        this.user = data;
        this.isSubmitted = true;
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

}
