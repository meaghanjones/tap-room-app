import {Component, EventEmitter} from 'angular2/core'
import {Keg} from './keg.model'

@Component({
  selector: 'new-keg',
  outputs: ['onSubmitNewKeg'],
  template:`
  <div class="keg-form">
    <h3>Log a Keg</h3>
    <input placeholder="Name" classcol-sm-8 input-lg #newName>
    <button (click)="addKeg(newName)" class="btn-success btn-lg add-button">Add</button>
  </div>
    `
})

export class NewKegComponent {
  public onSubmitNewKeg: EventEmitter<string>;
  constructor(){
    this.onSubmitNewKeg = new EventEmitter();
  }
  addKeg(userName: HTMLInputElement){
    this.onSubmitNewKeg.emit(userName.value);
    userName.value = "";
  }
}
