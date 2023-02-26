import { Component } from '@angular/core';

@Component({
  selector: 'app-graphical-interaction',
  templateUrl: './graphical-interaction.component.html',
  styleUrls: ['./graphical-interaction.component.css'],
})
export class GraphicalInteractionComponent {
  savebtn: boolean = true;
  Condition1: boolean = true;
  Condition2: boolean = false;

  screen2() {
    this.Condition1 = false;
    this.Condition2 = true;
  }
}
