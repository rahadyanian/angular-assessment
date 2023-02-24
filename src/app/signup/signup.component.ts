import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Form} from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public signUpForm!: FormGroup;
  constructor(private formBuilder : FormBuilder, private http: HttpClient, private router:Router){

  }
  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      fullname:[''],
      email:[''],
      password: [''],
      mobile: ['']
    })
  }
  signUp(){
    this.http.post<any>("http://localhost:3000/signupUser", this.signUpForm.value)
    .subscribe(res=>{
      alert("Sign Up Sukses");
      this.signUpForm.reset();
      this.router.navigate(['login']);
    },err=>{
      alert("Error")
    })
  }

}
