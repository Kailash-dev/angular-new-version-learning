// src/app/state/books.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as BooksActions from './books.actions';
import { BookService } from '../services/book.service';


@Injectable()
export class BooksEffects {
  constructor(
    private actions$: Actions,
    private booksService: BookService
  ) {}

  loadBooks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BooksActions.loadBooks),
      mergeMap(() =>
        this.booksService.getBooks().pipe(
          map((books) => BooksActions.loadBooksSuccess({ books })),
          catchError((error) =>
            of(BooksActions.loadBooksFailure({ error: error.message }))
          )
        )
      )
    )
  );
}
