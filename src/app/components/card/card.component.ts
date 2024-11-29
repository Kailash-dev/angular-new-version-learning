import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() label: string = 'Default Label';
  @Input() route: string = '/';
  fullRoute: string = '';
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    // Dynamically construct the full route
    const parentRoute = this.activatedRoute.parent?.snapshot.url.map(segment => segment.path).join('/') || '';
    this.fullRoute = `${parentRoute}/${this.route}`;
  }
  navigateToRoute(): void {
    this.router.navigate([this.fullRoute]);
  }
}
