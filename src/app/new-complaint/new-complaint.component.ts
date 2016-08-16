import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, REACTIVE_FORM_DIRECTIVES } from "@angular/forms";
import { complaintService } from "../shared/complaint.service";

@Component({
  selector: 'new-complaint',
  template: `
      
<h3>Please Register your complaint Below</h3>
        <form [formGroup]="myForm" (ngSubmit)="registerComplaint()">
            <div class="form-group">
                <label for="dept">Department</label>
                <input formControlName="dept" type="text" id="dept" #dept class="form-control">
            </div>
            <div class="form-group">
                <label for="type">Type of Complaint</label>
                <input formControlName="type" type="text" id="type" #type class="form-control">
            </div>
            <div class="form-group">
                <label for="contact">Contact No.</label>
                <input formControlName="contact" type="text" id="contact" #contact class="form-control">
            </div>
            <button type="submit" [disabled]="!myForm.valid" class="btn btn-primary">Submit</button>
        </form>
    `
  
})
export class NewComplaint implements OnInit {
  items: any[] = [];
  asyncString = this.cs.getData();
  myForm: FormGroup;
  constructor(private fb: FormBuilder, private cs: complaintService) {}
  ngOnInit(): any {
        this.myForm = this.fb.group({
            dept: ['', Validators.required],
            type: ['', Validators.required],
            contact: ['', Validators.required],
        });
    }
    registerComplaint() {
      this.cs.sendData(this.myForm.value)
      .subscribe(
        data => console.log(data),
        error => console.log(error)
      );
    }
  onGetData() {
    this.cs.getOwnData()
      .subscribe(
        data => {
          const myArray = [];
          for (let key in data) {
            myArray.push(data[key]);
          }
          this.items = myArray;
        }
      );
  }
}
