import { Component, OnInit } from '@angular/core';
import { Hardware } from '../../model/hardware';
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators  } from "@angular/forms";
import { HardwareApiService } from '../../service/hardware-api.service';

@Component({
  selector: 'app-hardware-edit',
  templateUrl: './hardware-edit.component.html',
  styleUrls: ['./hardware-edit.component.css']
})
export class HardwareEditComponent implements OnInit {
  submitted = false;
  editForm: FormGroup;
  hardwareData: Hardware[];

  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private hardwareApiService: HardwareApiService,
    private router: Router
  ) { }

  ngOnInit() {
    this.updateHardware();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getHardware(id);
    this.editForm = this.fb.group({
      Name: ['', [Validators.required]],
      ClientCapacity: [''],
      ClientsSupported: ['']
    })
  }
  // Getter to access form control
  get myForm(){
    return this.editForm.controls;
  }

  getHardware(id) {
    this.hardwareApiService.getHardware(id).subscribe(data => {
      console.log(data)
      this.editForm.setValue({
        Name: data['Name'],
        ClientCapacity: data['Capacity'],
        ClientsSupported: data['Support'],
      });
    });
  }
  
  //TODO: Fix validators here, not working currently
  updateHardware() {
    this.editForm = this.fb.group({
      Name: ['', [Validators.required]],
      //ClientCapacity: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      ClientCapacity: [''],
      ClientsSupported: [''],
    })
  }

  onSubmit() {
    console.log("Submitted")
    console.log(this.editForm.value)
    console.log(this.editForm.valid)
    this.submitted = true;
    if (!this.editForm.valid) {
      return false;
      //TODO: Send back feedback on false data
    } else {
      if (window.confirm('Are you sure?')) {
        let id = this.actRoute.snapshot.paramMap.get('id');
        this.hardwareApiService.updateHardware(id, this.editForm.value)
          .subscribe(res => {
            this.router.navigateByUrl('/list-hardware');
            console.log('Content updated successfully!')
          }, (error) => {
            console.log(error)
          })
      }
    }
  }

}
