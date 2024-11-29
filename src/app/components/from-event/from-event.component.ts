import { AfterViewInit, Component, ElementRef, ViewChild, viewChild, ViewChildren } from '@angular/core';
import { fromEvent } from 'rxjs/internal/observable/fromEvent';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-from-event',
  standalone: true,
  imports: [],
  templateUrl: './from-event.component.html',
  styleUrl: './from-event.component.scss'
})
export class FromEventComponent implements AfterViewInit {
 
  clickCount = 0;
  subscription!: Subscription;
  @ViewChild('clickMe', { static: false }) btnRef!: ElementRef;
  ngAfterViewInit(): void {
    
    if (this.btnRef) {
      this.subscription = fromEvent(this.btnRef.nativeElement, 'click').subscribe(() => {
        this.clickCount++;
      });
    }
  }


  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
