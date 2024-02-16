import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CandyComponent } from './candy/candy.component';
import { FriendsComponent } from './friends/friends.component';
import { GyakorlasComponent } from './gyakorlas/gyakorlas.component';
import { Gyakorlas2Component } from './gyakorlas2/gyakorlas2.component';
import { TamagochiComponent } from './tamagochi/tamagochi.component';
import { AnimalsComponent } from './animals/animals.component';
import { HighlightDirective } from './highlight.directive';
import { HighlightBetterDirective } from './highlight-better.directive';
import { HighlightWHostbindingDirective } from './highlight-whostbinding.directive';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, 
            RouterOutlet,
            HighlightDirective,
            HighlightBetterDirective,
            HighlightWHostbindingDirective,
            CandyComponent, 
            FriendsComponent, 
            GyakorlasComponent,
            Gyakorlas2Component,
            TamagochiComponent,
            AnimalsComponent
          ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'ElsoProjekt';

  ngOnInit(): void {
    
  }
}

