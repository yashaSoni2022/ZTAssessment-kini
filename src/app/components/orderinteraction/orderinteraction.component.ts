import { Component,Inject,Input } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-orderinteraction',
  templateUrl: './orderinteraction.component.html',
  styleUrls: ['./orderinteraction.component.css'],
})
export class OrderinteractionComponent {
  savebtn: boolean = true;
  savebtn1: boolean = false;
  Condition1: boolean = true;
  autosave: boolean = true;
  bottomSymbol: boolean = true;
  delete1: boolean = true;
  delete2: boolean = true;
  delete3: boolean = true;
  choicebox: boolean = true;
  delete4: boolean = false;
  Condition2: boolean = false;
  Condition3: boolean = false;
  choice1: boolean = true;
  choice2: boolean = true;
  choice3: boolean = true;
  choice4: boolean = false;
  styleBold: boolean = false;
  styleItalic: boolean = false;
  styleUnderline: boolean = false;
  styleFour: boolean = false;
  styleFive: boolean = false;
  value: string = '';
  draggedItem: any;
  droppedItem: any;
  imgshow = false;

  // choices = ["","",""];
  choices = [{text: ''}, {text: ''}, {text: ''}];

  getValue(val: string) {
    this.value = val;
    if (!this.value) {
      this.deleteTextDecoration();
    }
  }

  deleteTextDecoration() {
    this.styleBold = false;
    this.styleItalic = false;
    this.styleUnderline = false;
  }

  displayText() {
    this.imgshow = this.checkChoices();
  }

  checkChoices(): boolean {
    for (let i = 0; i < this.choices.length; i++) {
      if (this.choices[i].text !== '') {
        return true;
      }
    }
    return false;
  }

  screen2() {
    this.Condition1 = false;
    this.autosave = false;
    this.delete1 = false;
    this.delete2 = false;
    this.delete3 = false;
    this.bottomSymbol = false;
    this.Condition2 = true;
    this.savebtn = false;
    this.savebtn1 = true;
  }

  screen3() {
    this.Condition2 = false;
    this.Condition3 = true;
    this.savebtn = false;
    this.savebtn1 = true;
  }

  invisiblebox() {
    this.Condition2 = false;
  }

  deleteicon(index: number) {
    this.choices.splice(index, 1);
  }

  dismiss() {
    this.bottomSymbol = false;
  }

  dismissbox() {
    this.Condition1 = false;
    this.autosave = false;
  }

  addChoice() {
    if(this.choices.length == 4)
        return;
    this.choices.push({text: ''});
  }

  boldText() {
    if (this.value) {
      this.styleBold = !this.styleBold;
    }
  }

  italicText() {
    if (this.value) {
      this.styleItalic = !this.styleItalic;
    }
  }

  underlineText() {
    if (this.value) {
      this.styleUnderline = !this.styleUnderline;
    }
  }
  
  Dash1(){
    if(this.value){
     this.styleFour = !this.styleFour;
    }
  }

  Dash2(){
    if(this.value){
      this.styleFive= !this.styleFive;
    }
  }

  

  onDrop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    }
  }

  onDragStarted() {
    document.body.classList.add('dragging');
  }
  
  onDragEnded() {
    document.body.classList.remove('dragging');
  }
}
