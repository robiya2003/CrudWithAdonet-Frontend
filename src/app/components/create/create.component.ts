import { Component, OnInit } from '@angular/core';
import { CreateUser } from '../../models/create-user';
import { CrudService } from '../../servises/crud.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent implements OnInit{
  isSubmitted: boolean = false;
  resultdata!:any
  
  setvalue:any={
    name: "",
    phoneNumber:"",
    email: "",
    password: ""
   
  }
  constructor(private crudService:CrudService){}
  ngOnInit(): void {
  }

  createuser(data:any){
    this.crudService.create(data).subscribe({
      next:(result)=>{
        this.resultdata=result;
        this.isSubmitted = true;
        console.log(result)
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
  setUser() {
    this.createuser(this.setvalue);
    
  }
}
