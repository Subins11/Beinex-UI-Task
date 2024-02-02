import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-be-global-cards',
  templateUrl: './be-global-cards.component.html',
  styleUrls: ['./be-global-cards.component.scss']
})
export class BeGlobalCardsComponent {
  @Input() countries!: any[]
}
