import {Component, EventEmitter } from 'angular2/core';
import {KegListComponent} from './keg-list.component';
import { Keg } from './keg.model';

@Component({
  selector: 'my-app',
  directives: [KegListComponent],
  template: `
  <div class="container">
    <h1>Keep Track of Kegs</h1>
    <keg-list
      [kegList] = "kegs"
      (onKegSelect)="kegWasSelected($event)">
    </keg-list>
  </div>
  `
})

export class AppComponent {
    public kegs: Keg [];
    constructor (){
      this.kegs = [
        new Keg("Anchor Porter", "Anchor", 10, 5.66),
        new Keg("Green Bamboo", "Great Wall Imported Chinese Beer", 11, 4.63),
        new Keg("Miller High Life Genuine Draft Beer", "Miller", 5, 4.8)
      ];
    }
    kegWasSelected(clickedKeg: Keg): void {
    }
}
