import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Animal } from '../animal.model';

@Component({
  selector: 'app-animaldetails',
  standalone: true,
  imports: [],
  templateUrl: './animaldetails.component.html',
  styleUrl: './animaldetails.component.css'
})
export class AnimaldetailsComponent {
 @Input() pickedAnimal:Animal;

 @Output() isLovedChange = new EventEmitter<boolean>();

 LoveChange(){
  this.isLovedChange.emit(!this.pickedAnimal.isLoved);
 }
}