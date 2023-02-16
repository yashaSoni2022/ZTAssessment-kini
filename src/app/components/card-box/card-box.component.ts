import { Component } from '@angular/core';

@Component({
  selector: 'app-card-box',
  templateUrl: './card-box.component.html',
  styleUrls: ['./card-box.component.css']
})
export class CardBoxComponent {

  choiceBind1:string ="";
  choiceBind2:string ="";
  choiceBind3:string ="";
  choiceBind4:string ="";

  styleOne: boolean = false;
  styleTwo: boolean = false;
  styleThree: boolean = false;
  styleFour: boolean = false;
  styleFive: boolean = false;

  ConditionDone1: boolean = true;
  ConditionDone2: boolean = false;
  ConditionDone3: boolean = false;
  hideBottomContent: boolean = true;

  choiceHide1:boolean= true;
  choiceHide2:boolean= false;
  choiceHide3:boolean= false;
  choiceHide4:boolean= false;

  constructor() { }

  content() {
    this.choiceHide1 = true;
  }

  content2() {
    this.ConditionDone1 = false;
    this.ConditionDone2 = true;
  }

  content3() { 
    this.ConditionDone1 = false;
    this.ConditionDone2 = false;
    this.ConditionDone3 = true;
  }

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
  choice1(){
    this.choiceHide2 = true;
  }
  choice2(){
    this.choiceHide3 = true;
  }
  choice3(){
    this.choiceHide4 = true;
  }
  choice4(){}
}
