import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-candy',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './candy.component.html',
  styleUrl: './candy.component.css'
})

export class CandyComponent {
  favCandy="sacher torta";
  isLoggedIn=false;
  favCandies=['étcsoki', 'sacher torta', 'mézeskalács', 'flódni', 'zserbó']
  newCandy:string;
  isEnough=false;

  constructor(){
    setTimeout(()=>{
      this.isEnough=true;
    },3000)

  }

  onButtonClicked(){
    this.isLoggedIn ? this.isLoggedIn=false : this.isLoggedIn=true;
    console.log(this.isLoggedIn)
  }

  onSaveNewCandy(){
    this.favCandies.push(this.newCandy);
    this.newCandy="";
  }

  decorMyCandy(candyIndex:number){
    let underline="none";
    if (this.favCandies[candyIndex].length>7){
      underline="underline"
    }
    return underline;
  }

  onFavCandyAdded(){
    if (!this.favCandies.includes(this.favCandy)) {
      this.favCandies.push(this.favCandy)
    }
    
  }
}



