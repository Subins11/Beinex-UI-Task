import { Component } from '@angular/core';

@Component({
  selector: 'app-be-offerings',
  templateUrl: './be-offerings.component.html',
  styleUrls: ['./be-offerings.component.scss']
})
export class BeOfferingsComponent {
  industry = [
    {
      icon: '../../../../assets/icons/IT.svg',
      label: 'Information Technology',
      sign: '../../../../assets/icons/rightArrow.svg',
    },
    {
      icon: '../../../../assets/icons/HR.svg',
      label: 'Human Resources',
      sign: '../../../../assets/icons/rightArrow.svg',
    },
    {
      icon: '../../../../assets/icons/procurement.svg',
      label: 'Procurement',
      sign: '../../../../assets/icons/rightArrow.svg',
    },
    {
      icon: '../../../../assets/icons/finace.svg',
      label: 'Finance',
      sign: '../../../../assets/icons/rightArrow.svg',
    },
    {
      icon: '../../../../assets/icons/banking.svg',
      label: 'Banking',
      sign: '../../../../assets/icons/rightArrow.svg',
    },
  ];

  offerings = [
    {
      label: 'Ticket Response',
      sign: '../../../../assets/icons/rightArrow.svg',
    },
    {
      label: 'Sentiment Analysis',
      sign: '../../../../assets/icons/rightArrow.svg',
    },
    { label: 'Procurement', sign: '../../../../assets/icons/rightArrow.svg' },
    {
      label: 'Project Capabilities',
      sign: '../../../../assets/icons/rightArrow.svg',
    },
    {
      label: 'Error reduction',
      sign: '../../../../assets/icons/rightArrow.svg',
    },
  ];
}
