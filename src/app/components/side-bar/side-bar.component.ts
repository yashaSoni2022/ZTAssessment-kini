import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
})
export class SideBarComponent implements OnInit {
  opened: boolean = false;
  opened_tests: boolean = false;
  expanded:boolean=true
  expanded_tests: boolean = true;
  expandedSideBar: any;
  expandedSideBar_tests: any;
  commonIntrxn: boolean = false;
  inlineIntrxn: boolean = false;
  graphicIntrxn: boolean = false;
  customIntrxn: boolean = false;
  dropp:boolean=false
  itemimg:boolean=true

  constructor() {}

  ngOnInit(): void {}

  menu() {
    this.opened = !this.opened;
    //const expanded = document.querySelector('.expanded');
    

    if (this.opened) {
      this.expandedSideBar = {
        translate: '95%',
        transitionDuration: '600ms',

        // display: 'block',
      };
    } else {
      this.expandedSideBar = {
        translate: '-80%',
        transitionDuration: '600ms',
      };
      // setTimeout(() => {
      //   this.expanded = !expanded;
      // }, 800);
    }
  }

  
  tests() {
    this.opened_tests = !this.opened_tests;
    //const expanded = document.querySelector('.expanded');

    if (this.opened_tests) {
      this.expandedSideBar_tests = {
        translate: '95%',
        transitionDuration: '600ms',

        // display: 'block',
      };
    } else {
      this.expandedSideBar_tests = {
        translate: '-80%',
        transitionDuration: '600ms',
      };
      // setTimeout(() => {
      //   this.expanded = !expanded;
      // }, 800);
    }
  }

  openCommonInteraction() {
    console.log('Hello');
    //const interactions = document.querySelector('#commonInteraction');
    // const childs = document.createElement('p');
    // childs.innerText = 'Hello';
    // interactions?.appendChild(childs);

    this.commonIntrxn = !this.commonIntrxn;
    this.inlineIntrxn = false;
    this.graphicIntrxn = false;
    this.customIntrxn = false;
  }
  newclass(){

  }
  delet(){

  }
  drop(){
    this.dropp=!this.dropp

  }
 
}
