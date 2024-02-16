import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-friends',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './friends.component.html',
  styleUrl: './friends.component.css'
})
export class FriendsComponent {
  bestFriend='Zsófia';
  allowNewFriend=false;
  myFriends=[['Zsófi', 'oldFriend', 100], 
            ['Csabi', 'oldFriend', 200], 
            ['Orsi', 'newFriend', 160]]

  howManyFriends=3;
  counter=0;
  newFriend="Nincs új barátom :("
 
  constructor(){
    setTimeout(()=>{
      this.allowNewFriend=true;
      this.myFriends[1][1]='newFriend';
    },2000)
  }

  addNewFriend(){
    this.howManyFriends+=1; 
  }

  getNewFriend(event:any){
    this.newFriend=event.target.value;
  }

  
 
  
}

