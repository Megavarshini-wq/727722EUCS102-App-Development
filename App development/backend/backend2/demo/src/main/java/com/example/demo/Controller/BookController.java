// package com.example.demo.Controller;

// import java.util.List;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.web.bind.annotation.*;

// import com.example.demo.Model.Book;
// import com.example.demo.Service.BookService;
// @CrossOrigin("http://localhost:3000")
// @RestController
// @RequestMapping("/books")
// public class BookController {

//     @Autowired
//     private BookService bookService;
    
//     @CrossOrigin(origins="*")
//     @GetMapping
//     public List<Book> getAllBooks() {
//         return bookService.getAllBooks();
//     }

//     @PostMapping
//     public Book addBook(@RequestBody Book book) {
//         return bookService.addBook(book);
//     }
    
//     @CrossOrigin(origins="*")
//     @PutMapping("/{id}")
//     public Book updateBook(@PathVariable Long id, @RequestBody Book bookDetails) {
//         return bookService.updateBook(id, bookDetails);
//     }
//     @CrossOrigin(origins="*")
//     @DeleteMapping("/{id}")
//     public void deleteBook(@PathVariable Long id) {
//         bookService.deleteBook(id);
//     }
// }

package com.example.demo.Controller;

import com.example.demo.Model.Book;
import com.example.demo.Service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("/books")
public class BookController {

    @Autowired
    private BookService bookService;

    // Get all books
    @CrossOrigin(origins="*")
    @GetMapping
    public ResponseEntity<List<Book>> getAllBooks() {
        List<Book> books = bookService.getAllBooks();
        return new ResponseEntity<>(books, HttpStatus.OK);
    }

    // Get a single book by ID
    @CrossOrigin(origins="*")
    @GetMapping("/{id}")
    public ResponseEntity<Book> getBookById(@PathVariable("id") Long id) {
        Book book = bookService.getBookById(id);
        if (book != null) {
            return new ResponseEntity<>(book, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // Add a new book
    @PostMapping
    public ResponseEntity<Book> addBook(@RequestBody Book book) {
        Book newBook = bookService.addBook(book);
        return new ResponseEntity<>(newBook, HttpStatus.CREATED);
    }

    // Update a book by ID
    @CrossOrigin(origins="*")
    @PutMapping("/{id}")
    public ResponseEntity<Book> updateBook(@PathVariable("id") Long id, @RequestBody Book book) {
        Book updatedBook = bookService.updateBook(id, book);
        if (updatedBook != null) {
            return new ResponseEntity<>(updatedBook, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // Delete a book by ID
    @CrossOrigin(origins="*")
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBook(@PathVariable("id") Long id) {
        boolean isRemoved = bookService.deleteBook(id);
        if (isRemoved) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
