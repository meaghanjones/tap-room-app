import { Component } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-display',
  inputs: ['keg'],
  template:`
  <div>
    <h2 *ngFor="#currentKeg of kegList">{{ keg.name }}, {{ keg.price}}, {{ keg.alcoholcontent }} </h2>
  <div>
  `
})

export class KegComponent {
  public keg: Keg;
  toggleHave(setState: boolean){
    this.keg.have = setState;
  }
}
