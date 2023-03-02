import { DatePipe } from '@angular/common';
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
  datum = new Date();
  link_address: string = 'http://zt-v33.tan/zt_rdf413890998';
  file_name: string = 'Test 2';
  label_test_name: string = 'QTI 2.1 Test Driver';

  screen2() {
    this.Condition1 = false;
    this.Condition2 = true;
  }
}
