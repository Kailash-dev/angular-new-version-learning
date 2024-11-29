import { AsyncPipe, CommonModule, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../../models/book.model';
import { Store, StoreModule } from '@ngrx/store';
import * as BooksActions from '../../state/books.actions';


@Component({
  selector: 'app-books',
  standalone: true,
  imports: [NgIf,NgFor,AsyncPipe,CommonModule],
  templateUrl: './books.component.html',
  styleUrl: './books.component.scss'
})
export class BooksComponent {
  books$!: Observable<Book[]>;
  loading$!: Observable<boolean>;
  error$!: Observable<string | null>;

  constructor(private store: Store){}
  ngOnInit(): void {
    this.store.dispatch(BooksActions.loadBooks());
  }
}
