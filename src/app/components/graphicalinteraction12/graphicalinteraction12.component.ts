import { Component } from '@angular/core';

@Component({
  selector: 'app-graphicalinteraction12',
  templateUrl: './graphicalinteraction12.component.html',
  styleUrls: ['./graphicalinteraction12.component.css']
})
export class Graphicalinteraction12Component {
    content1: boolean = true;
    content2: boolean = false;

    deletebox(){
       this.content1 = false;
    }

    deletebox1(){
      this.content2 = false;
    }

    screen2(){
      this.content1 = false;
      this.content2=true;
    }
}
