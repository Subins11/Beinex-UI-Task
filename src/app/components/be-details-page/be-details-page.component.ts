import { Component, OnInit } from '@angular/core';
import { BeFormDetailsService } from 'src/app/core/be-form-details.service';

@Component({
  selector: 'app-be-details-page',
  templateUrl: './be-details-page.component.html',
  styleUrls: ['./be-details-page.component.scss']
})
export class BeDetailsPageComponent implements OnInit {
  formData: any;

  constructor(private formdataService: BeFormDetailsService) {}

  ngOnInit(): void {
    this.formData = this.formdataService.getFormData();
    console.log('Form Data in DetailsComponent:', this.formData);
  }
}
