import { Component } from '@angular/core';

@Component({
  selector: 'app-match-interaction',
  templateUrl: './match-interaction.component.html',
  styleUrls: ['./match-interaction.component.css']
})
export class MatchInteractionComponent {
  
  inputprompt="";
  Rindex=[0]
  public textInput=[""]
  Cindex=[0]
  public CtextInput=[""]
  arr=[[0]];
  
  Changearr(val1:number,val2:number){
  
  if(this.arr[val1][val2]==0){this.arr[val1][val2]=1;console.log(val1,val2,"selected");}
  else {this.arr[val1][val2]=0;console.log(val1,val2,"deselected");}

  }
  choicebox: boolean = true;
  bottomSymbol: boolean = true;
  Condition1: boolean = true;
  Condition2: boolean = false;
  Condition3: boolean = false;  
  save(){
    for (let i = 0; i < this.Rindex.length; i++)if(this.textInput[i].length==0)this.textInput[i]="choices"+(i+1);
    for (let i = 0; i < this.Cindex.length; i++)if(this.CtextInput[i].length==0)this.CtextInput[i]="choices"+(i+1);
    this.Condition1=false;
    this.Condition2=true;

  }
  deleteicon(val:number,value=1){
    if(value==1&&this.Cindex.length>1){
      
    this.CtextInput.splice(val,1);
    this.Cindex.splice(this.Cindex.length-1,1);
    this.arr.splice(1,this.arr.length-1);
    this.arr[0].splice(this.arr.length-1,1);
      for (let i = this.arr.length; i < this.Rindex.length; i++) {
        this.arr.push([...this.arr[0]]);
      }
    }
    else if(value!=1&&this.Rindex.length>1){
    this.textInput.splice(val,1);
    this.Rindex.splice(this.Rindex.length-1,1);
    this.arr.splice(this.arr.length-1,1);
  }
  }
  addChoice(val=1){
    if(val==1){
      //if(this.Cindex.length==7)return;
      this.Cindex.push(this.Cindex.length); 
      this.CtextInput.push(""); 
      this.arr.splice(1,this.arr.length-1);
      for (let i = this.arr[0].length; i < this.Cindex.length; i++) {
        this.arr[0].push(0);
      }
      for (let i = this.arr.length; i < this.Rindex.length; i++) {
        this.arr.push([...this.arr[0]]);
      }
    }
    else{
      //if(this.Rindex.length==4)return;
      this.Rindex.push(this.Rindex.length);
      this.textInput.push(""); 
      this.arr.push([...this.arr[0]]);
    }
    
  }
  dismissbox(val:number){             
    if(val==0)this.Condition1=false;
    else this.Condition2=false; 
  }
  dismiss(){             
    this.bottomSymbol=false;              
  }
}
