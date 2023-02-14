import { Component } from '@angular/core';

@Component({
  selector: 'app-card-box',
  templateUrl: './card-box.component.html',
  styleUrls: ['./card-box.component.css']
})
export class CardBoxComponent {

  styleOne: boolean = false;
  styleTwo: boolean = false;
  styleThree: boolean = false;
  styleFour: boolean = false;
  styleFive: boolean = false;

  ConditionDone1: boolean = true;
  ConditionDone2: boolean = false;
  ConditionDone3: boolean = false;
  hideBottomContent: boolean = true;

  constructor() { }

  content() {
    this.ConditionDone1 = false;
    this.ConditionDone2 = true;
  }

  content2() {
    this.ConditionDone2 = false;
    this.ConditionDone3 = true;
  }

  content3() { }

  deleteContent() {
    this.ConditionDone1 = false;
    this.ConditionDone2 = false;
    this.ConditionDone3 = false;
  }

  hideContent() {
    this.hideBottomContent = false;
  }

  boldText() {
    this.styleOne = true;
  }
  italicText() {
    this.styleOne = false;
    this.styleTwo = true;
  }
  underlineText() {
    this.styleOne = false;
    this.styleTwo = false;
    this.styleThree = true;
  }
  leftText() {
    this.styleOne = false;
    this.styleTwo = false;
    this.styleThree = false;
    this.styleFour = true;
  }
  rightText() {
    this.styleOne = false;
    this.styleTwo = false;
    this.styleThree = false;
    this.styleFour = false;
    this.styleFive = true;
  }
}
