import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  url = 'http://localhost:3000/books';

  constructor(private http: HttpClient) {}

  getBooks()                        { return this.http.get(this.url); }
  addBook(book: any)                { return this.http.post(this.url, book); }
  updateBook(id: string, book: any) { return this.http.put(`${this.url}/${id}`, book); }
  deleteBook(id: string)            { return this.http.delete(`${this.url}/${id}`); }
}
