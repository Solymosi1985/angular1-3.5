import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-gyakorlas',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './gyakorlas.component.html',
  styleUrl: './gyakorlas.component.css'
})
export class GyakorlasComponent {
  userName:string;
  isIncorrect=true;

 onInputChange(){
  if (this.userName.length>=3){
    this.isIncorrect=false;
  } else {
    this.isIncorrect=true;
  }
 }

 onButtonClicked(){
  this.userName="";
 }
}
