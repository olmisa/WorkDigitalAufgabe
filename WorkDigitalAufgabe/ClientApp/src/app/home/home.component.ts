import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

  public result = 0;

  public strMatchBy2char(firstString: string, secondString: string) {

    this.result = 0;
    var smallestLength = Math.min(firstString.length, secondString.length);
    var partLength = 2;
    var lastPossibleIndex = smallestLength - partLength;

    for (var i = 0; i <= lastPossibleIndex; i++) {
      if (firstString.substring(i, i + partLength) == secondString.substring(i, i + partLength)) {
        this.result++;
      }
    }
  }

}
