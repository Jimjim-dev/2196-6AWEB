const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/MyDb');

// Book Schema
const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  genre: String,      // extra field 1
  year: Number        // extra field 2
});

const Book = mongoose.model('Book', bookSchema);

// CREATE
app.post('/books', async (req, res) => {
  const book = new Book(req.body);
  await book.save();
  res.json(book);
});

// READ ALL
app.get('/books', async (req, res) => {
  const books = await Book.find();
  res.json(books);
});

// UPDATE
app.put('/books/:id', async (req, res) => {
  const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(book);
});

// DELETE
app.delete('/books/:id', async (req, res) => {
  await Book.findByIdAndDelete(req.params.id);
  res.json({ message: 'Book deleted' });
});

app.listen(3000, () => console.log('API running on port 3000'));