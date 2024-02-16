import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gyakorlas2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gyakorlas2.component.html',
  styleUrl: './gyakorlas2.component.css'
})
export class Gyakorlas2Component {
  myNumber=0;
  buttonLog:number[]=[];
  longEnough=false;

  plusOne(){
    this.myNumber+=1;
    this.buttonLog.push(this.myNumber);
    this.isLongEnough();
  }

  minusOne(){
    this.myNumber-=1;
    this.buttonLog.push(this.myNumber);
    this.isLongEnough();
  }

  isLongEnough(){
    if (this.buttonLog.length>=5){
      this.longEnough=true
    }
  }

  colorMyElement(i:number){
    let bgColor="";
    i>4 ? bgColor="orange" : bgColor="yellow";
    return bgColor; 
  }
}
