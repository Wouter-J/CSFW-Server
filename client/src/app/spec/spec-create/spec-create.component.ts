import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SpecService } from '../../service/spec.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-spec-create',
  templateUrl: './spec-create.component.html',
  styleUrls: ['./spec-create.component.css']
})
export class SpecCreateComponent implements OnInit {
  submitted = false;
  specForm: FormGroup;
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private specApiService: SpecService
  ) {
    this.mainForm();
   }

  ngOnInit() {
  }

  mainForm() {
    this.specForm = this.fb.group({
      name: ['', [Validators.required]],
      type: ['', [Validators.required]],
      amount: ['', [Validators.required]],
      amountType: ['', [Validators.required]],
    })
  }

  // Getter to access form control
  get myForm(){
    return this.specForm.controls;
  }

  onSubmit(){
    this.submitted = true;
    //Validate variables etc
    this.specApiService.createSpec(this.specForm.value).subscribe(
      (res) => {
        console.log("Spec created");
      }, (error) => {
        console.log(error);
      }
    )
  }

}
