import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-all',
  standalone: true,
  imports: [CardComponent,NgFor],
  templateUrl: './all.component.html',
  styleUrl: './all.component.scss'
})
export class AllComponent {
  operators = [
    { name: 'from Event', route: 'from-event' },
    { name: 'map', route: 'map' },
    { name: 'filter', route: 'filter' },
    { name: 'mergeMap', route: 'mergeMap' },
    { name: 'switchMap', route: 'switchMap' },
    { name: 'concatMap', route: 'concatMap' },
    { name: 'take', route: 'take' },
    { name: 'debounceTime', route: 'debounceTime' },
    { name: 'distinctUntilChanged', route: 'distinctUntilChanged' },
  ];
}
