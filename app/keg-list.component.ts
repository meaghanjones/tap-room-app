import { Component, EventEmitter } from 'angular2/core';
import { KegComponent } from './keg.component';
import { Keg } from './keg.model';
import { EditKegDetailsComponent } from './edit-keg-details.component';
import { NewKegComponent } from './new-keg.component';
import { HavePipe } from './have.pipe';

@Component({
  selector: 'keg-list',
  inputs: ['kegList'],
  outputs: ['onKegSelect'],
  directives: [KegComponent, EditKegDetailsComponent, NewKegComponent],
  pipes: [HavePipe],
  template: `
  <select (change)="onChange($event.target.value)" class="filter">
  <option value="all">Show All</option>
  <option value="have">Show Have</option>
  <option value="noHave" selected="selected">Show Don't Have</option>
</select>
 <keg-display *ngFor="#currentKeg of kegList | have:filterHave"
   (click)="kegClicked(currentKeg)"
   [class.selected]="currentKeg === selectedKeg "
   [keg]="currentKeg">
 </keg-display>
 <edit-keg-details *ngIf="selectedKeg" [keg]="selectedKeg">
 </edit-keg-details>
 <new-keg (onSubmitNewKeg)="createKeg($event)"></new-keg>
 `
})

export class KegListComponent {
  public kegList: Keg [];
  public onKegSelect: EventEmitter<Keg>;
  public selectedKeg: Keg;
  public filterHave: string = "noHave";
  constructor(){
    this.onKegSelect = new EventEmitter();
  }
  kegClicked(clickedKeg: Keg): void {
    this.selectedKeg =clickedKeg;
    this.onKegSelect.emit(clickedKeg);
  }
  createKeg(description: string): void {
    this.kegList.push(
      new Keg (name, this.kegList.length)
    );
  }
  onChange(filterOption) {
    this.filterHave = filterOption;
  }
}
