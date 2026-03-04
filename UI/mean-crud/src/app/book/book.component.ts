import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  books: any[] = [];
  newBook = { title: '', author: '', genre: '', year: null };
  editMode = false;
  editId = '';

  constructor(private bookService: BookService) {}

  ngOnInit() { this.loadBooks(); }

  loadBooks() {
    this.bookService.getBooks().subscribe((data: any) => this.books = data);
  }

  addBook() {
    this.bookService.addBook(this.newBook).subscribe(() => {
      this.loadBooks();
      this.newBook = { title: '', author: '', genre: '', year: null };
    });
  }

  editBook(book: any) {
    this.editMode = true;
    this.editId = book._id;
    this.newBook = { title: book.title, author: book.author, genre: book.genre, year: book.year };
  }

  updateBook() {
    this.bookService.updateBook(this.editId, this.newBook).subscribe(() => {
      this.loadBooks();
      this.editMode = false;
      this.newBook = { title: '', author: '', genre: '', year: null };
    });
  }

  deleteBook(id: string) {
    this.bookService.deleteBook(id).subscribe(() => this.loadBooks());
  }
}
