// const express = require('express');
// const fs = require('fs');
// const bodyParser = require('body-parser');
// const app = express();
// const PORT = 3002;

// app.use(bodyParser.json());

// const bookFilePath = '../book.json';
// const categoryFilePath = '../category.json';

// app.post('/books', (req, res) => {
//   const newBook = req.body;
//   const filePath = newBook.category ? categoryFilePath : bookFilePath;

//   fs.readFile(filePath, 'utf8', (err, data) => {
//     if (err) {
//       return res.status(500).json({ error: 'Error reading file' });
//     }
//     const books = JSON.parse(data);
//     books.push(newBook);
//     fs.writeFile(filePath, JSON.stringify(books, null, 2), 'utf8', (err) => {
//       if (err) {
//         return res.status(500).json({ error: 'Error writing file' });
//       }
//       res.status(201).json(newBook);
//     });
//   });
// });

// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });
const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3002;

app.use(bodyParser.json());

const bookFilePath = './src/book.json';
const categoryFilePath = './src/category.json';

// Endpoint to add a new book
app.post('/books', (req, res) => {
  const newBook = req.body;
  console.log('Received book data:', newBook); // Log the received data

  const filePath = newBook.category ? categoryFilePath : bookFilePath;

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err); // Log the error
      return res.status(500).json({ error: 'Error reading file' });
    }
    let books = [];
    try {
      books = JSON.parse(data);
    } catch (err) {
      console.error('Error parsing JSON:', err); // Log the error
      return res.status(500).json({ error: 'Error parsing JSON' });
    }
    books.push(newBook);
    fs.writeFile(filePath, JSON.stringify(books, null, 2), 'utf8', (err) => {
      if (err) {
        console.error('Error writing file:', err); // Log the error
        return res.status(500).json({ error: 'Error writing file' });
      }
      console.log('Book added successfully'); // Log successful addition
      res.status(201).json(newBook);
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
