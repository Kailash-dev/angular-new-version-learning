// src/app/state/books.state.ts
import { Book } from '../models/book.model';

export interface BooksState {
  books: Book[];
  loading: boolean;
  error: string | null;
}

export const initialBooksState: BooksState = {
  books: [],
  loading: false,
  error: null,
};
