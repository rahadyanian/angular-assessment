import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { subscribeOn } from 'rxjs';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-create-registration',
  templateUrl: './create-registration.component.html',
  styleUrls: ['./create-registration.component.scss']
})
export class CreateRegistrationComponent implements OnInit {
  public packages = ["Monthly", "Quarterly", "Yearly"];
  public genders = ["Male", "Female"];
  public importantList: string[] = [
    "a",
    "b",
    "c",
    "d",
  ];

  public registerForm!: FormGroup;

  constructor(private fb: FormBuilder, private api: ApiService, private toastService: NgToastService){

  }
  ngOnInit(): void {
    this.registerForm = this.fb.group({
        username: [''],
        firstName: [''],
        lastName: [''],
        email: [''],
        birthDate: [''],
        basicSalary: [''],
        status: [''],
        group: [''],
        description: [''],
    });

  }
  submit(){
    this.api.postRegistration(this.registerForm.value)
    .subscribe(res=>{
      this.toastService.success({detail:"Success", summary:"Enquiry Ditambahkan", duration:3000})
      this.registerForm.reset();
    })
  }
}
