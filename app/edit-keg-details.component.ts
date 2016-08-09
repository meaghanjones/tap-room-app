import { Component } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'edit-keg-details',
  inputs: ['keg'],
  template:`
    <div class="keg-form">
      <h3>Edit Keg Name:</h3>
      <input [(ngModel)]="keg.name" class="col-sm-8 input-lg task-form"/>
    </div>
  `
})

export class EditKegDetailsComponent {
  public keg: Keg;
}
