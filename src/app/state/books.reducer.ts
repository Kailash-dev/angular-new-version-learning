// src/app/state/books.reducer.ts
import { createReducer, on } from '@ngrx/store';
import { initialBooksState, BooksState } from './books.state';
import * as BooksActions from './books.actions';

export const booksReducer = createReducer<BooksState>(
  initialBooksState,
  on(BooksActions.loadBooks, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(BooksActions.loadBooksSuccess, (state, { books }) => ({
    ...state,
    loading: false,
    books,
  })),
  on(BooksActions.loadBooksFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
  on(BooksActions.addBook, (state, { book }) => ({
    ...state,
    books: [...state.books, book],
  })),
  on(BooksActions.deleteBook, (state, { bookId }) => ({
    ...state,
    books: state.books.filter((book) => book.id !== bookId),
  }))
);
