import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-be-offering-cards',
  templateUrl: './be-offering-cards.component.html',
  styleUrls: ['./be-offering-cards.component.scss']
})
export class BeOfferingCardsComponent {
  
  @Input() industry!: any[];
  @Input() offerings!: any[];

}
