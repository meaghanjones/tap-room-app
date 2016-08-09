import {Pipe, PipeTransform} from 'angular2/core';
import {Keg} from './keg.model'

@Pipe({
  name: "have",
  pure: false
})

export class HavePipe implements PipeTransform {
  transform(input: Keg [], args) {
    var desiredHaveState = args[0];
    if (desiredHaveState === "have") {
      return input.filter((keg) => {
        return keg.have;
        });
      } else if (desiredHaveState === "noHave") {
        return input.filter((keg) => {
          return !keg.have;
      });
    } else {
      return input;
    }
  }
}
