import { Component } from '@angular/core';
import { AnimaldetailsComponent } from './animaldetails/animaldetails.component';
import { Animal } from './animal.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-animals',
  standalone: true,
  imports: [AnimaldetailsComponent, CommonModule],
  templateUrl: './animals.component.html',
  styleUrl: './animals.component.css'
})
export class AnimalsComponent {
  animals:Animal[]=[
    new Animal('víziló', 
    'emlős', 
    '1300-1500 kg tömegű állat, 3,5m hosszú és kb. 1,5 méter magas, amivel nagyjából a kilencvenes évek átlagos autójával',
    '../../assets/pics/hippo.jpeg',
    true),
    new Animal('kutya', 
    'emlős', 
    'Pár kilótól 40-50 kilóig (kis felnőtt) nőhet. Alapvetően nem harcias állat, okos és emberbarát. Amelyik mégsem, azt jó eséllyel az ember tette olyanná.',
    '../../assets/pics/dog.jpeg',
    false),
    new Animal('szarvas', 
    'emlős', 
    'A rénszarvas a Mikulás szánjának húzóállata. A nyolc csodás agancsos pedig mind tehén, mivel a rénszarvasok télre elvesztik az agancsot.',
    '../../assets/pics/deer.jpeg',
    false)
  ]
  pickedElement:Animal;

  pickedOne(index:number){
    this.pickedElement=this.animals[index];
  }

  onisLovedChange($event:boolean){
    this.pickedElement.isLoved=$event;
  }
} 
  
