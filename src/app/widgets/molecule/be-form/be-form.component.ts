import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BeFormDetailsService } from 'src/app/core/be-form-details.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-be-form',
  templateUrl: './be-form.component.html',
  styleUrls: ['./be-form.component.scss']
})
export class BeFormComponent {
  @Output() formSubmitted = new EventEmitter<any>();

  

  myForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private formdataService: BeFormDetailsService
  ) {}

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      name: ['', Validators.required],
      company: ['', Validators.required],
      email: ['', [Validators.required]],
      jobRole: ['', Validators.required],
      phone: ['', Validators.required],
      country: ['', Validators.required],
      message: ['', Validators.required],
      image: ['', Validators.required],
      aboutProject: ['', Validators.required],
    });
  }


  hasError(controlName: string, errorName: string) {
    const control = this.myForm.get(controlName);
    return control ? control.hasError(errorName) : false;
  }


  onSubmit() {
    this.myForm.markAllAsTouched();
  
    if (this.myForm.valid) {
      console.log(this.myForm.value);
      this.formdataService.setFormData(this.myForm.value);
      this.formSubmitted.emit(this.myForm.value.valid);
      this.router.navigate(['/detail']);
    }
    else{
      alert("Please fill all the required fields")
    }
  }

}
 // Swal.fire({
      //   position: "top-end",
      //   icon: "success",
      //   title: "Your work has been saved",
      //   showConfirmButton: false,
      //   timer: 1500
      // });