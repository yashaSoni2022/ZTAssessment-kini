import { Component,Inject,Input } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-orderinteraction',
  templateUrl: './orderinteraction.component.html',
  styleUrls: ['./orderinteraction.component.css']
})
export class OrderinteractionComponent {
  savebtn:boolean=true;
  savebtn1:boolean=false;
  Condition1: boolean = true;
  autosave: boolean = true;
  bottomSymbol:boolean=true;
  delete1:boolean=true;
  delete2:boolean=true;
  delete3:boolean=true;
  choicebox:boolean=true;
  delete4:boolean=false;
  Condition2: boolean = false;
  Condition3: boolean = false;
  choice1:boolean=true;
  choice2:boolean=true;
  choice3:boolean=true;
  choice4:boolean=false;
  styleBold: boolean = false;
  styleItalic: boolean = false;
  styleUnderline: boolean = false;
  styleFour: boolean = false;
  styleFive: boolean = false;
  value: string = '';


  draggedItem: any;
  droppedItem: any;

  public textInput: string = '';
  public textInput1: string = '';
  public textInput2: string = '';
  public textInput4: string = '';

  getValue(val: string) {
    this.value = val;
  }

  displayText() {
    console.log(this.textInput);
    console.log(this.textInput1);
    console.log(this.textInput2);
    console.log(this.textInput4);
  }

  screen2(){
    this.Condition1=false;
    this.autosave=false;
    this.delete1=false;
    this.delete2=false;
    this.delete3=false;
    this.bottomSymbol=false;
    this.Condition2=true;
    this.savebtn=false;
    this.savebtn1=true;
  }

  screen3(){
    this.Condition2=false;
    this.Condition3=true;
    this.savebtn=false;
    this.savebtn1=true;
  }

  invisiblebox(){
    this.Condition2=false;
  }

  deleteicon1(){
    this.delete1=false;
    this.choice1=false;
  }

  deleteicon2(){
    this.delete2=false;
    this.choice2=false;
  }

  deleteicon3(){
    this.delete3=false;
    this.choice3=false;
  }

  deleteicon4(){
    this.delete4=false;
    this.choice4=false;
  }

  dismiss(){
    this.bottomSymbol=false;
  }

  dismissbox(){
    this.Condition1=false;
    this.autosave=false;
  }

  addChoice(){
      this.delete4=true;
      this.choicebox=false;
      this.choice4=true;
  }

  boldText() {
    if (this.value){
      this.styleBold = !this.styleBold;
    }
  }
 
  italicText() {
    if(this.value){
      this.styleItalic = !this.styleItalic;
    }
  }
 
  underlineText() {
    if(this.value){
      this.styleUnderline = !this.styleUnderline;
    }
  }
  
  Dash1(){
    if(this.value){
     this.styleFour=true;
    }
  }

  Dash2(){
    if(this.value){
      this.styleFive=true;
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