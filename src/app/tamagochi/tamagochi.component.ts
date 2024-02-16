import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-tamagochi',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tamagochi.component.html',
  styleUrl: './tamagochi.component.css'
})
export class TamagochiComponent {
  isSleepy=false;
  isHungry=false;  
  deepSleeping=false;
  dead=true;
  sleepyTimeout;
  hungryTimeout;
  deadOfHunger;
  deadofSleepingDeprivation;

onFeedMe(){
  clearTimeout(this.hungryTimeout);
  clearTimeout(this.deadOfHunger);
  this.isHungry=false;
  this.whenWellFed();
}

whenWellFed(){
  this.hungryTimeout=setTimeout(()=>{
    this.isHungry=true;
  },3000);

  this.deadOfHunger=setTimeout(()=>{
    this.isDead();
  },10000)
}

onGoToSleep(){
  clearTimeout(this.sleepyTimeout);
  clearTimeout(this.deadofSleepingDeprivation);
  this.deepSleeping=true;
  this.isSleepy=false;
  setTimeout(()=>{
    this.deepSleeping=false;
  },2000);
  this.whenSleptWell();
}

whenSleptWell(){
  this.sleepyTimeout=setTimeout(()=>{
    this.isSleepy=true;
  },4000);

  this.deadofSleepingDeprivation=setTimeout(()=>{
    this.isDead();
  },13000)
}

onStartGame(){
  this.dead=false;
  this.whenWellFed();
  this.whenSleptWell();
}

isDead(){
  this.dead=true;
  this.isHungry=false;
  this.isSleepy=false;
  this.deepSleeping=false;
  clearTimeout(this.deadOfHunger);
  clearTimeout(this.deadofSleepingDeprivation);
  clearTimeout(this.sleepyTimeout);
  clearTimeout(this.hungryTimeout);
}
}
