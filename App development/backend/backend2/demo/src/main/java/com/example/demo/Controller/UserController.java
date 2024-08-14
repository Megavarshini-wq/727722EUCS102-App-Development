// package com.example.demo.Controller;


// import java.util.List;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.http.ResponseEntity;

// import org.springframework.web.bind.annotation.*;

// import com.example.demo.Model.Profile;
// import com.example.demo.Model.UserInfo;
// import com.example.demo.Model.Book;
// import com.example.demo.Service.ProfileService;
// import com.example.demo.Service.AdminService;
// import com.example.demo.Service.BookService;

// @CrossOrigin("http://localhost:3000")
// @RestController
// @RequestMapping("/admin")
// public class AdminController {

//     @Autowired
//     private AdminService adminService;

//     // User Management
//     @CrossOrigin(origins="*")
//     @DeleteMapping("/users/{id}")
//     public void deleteUser(@PathVariable Long id) {
//         adminService.deleteUser(id);
//     }


//     // Book Management
//     @CrossOrigin(origins="*")
//     @GetMapping("/books")
//     public List<Book> getAllBooks() {
//         return adminService.getAllBooks();
//     }

//     @PostMapping("/books")
//     public Book addBook(@RequestBody Book book) {
//         return adminService.addBook(book);
//     }
//     @CrossOrigin(origins="*")
//     @PutMapping("/books/{id}")
//     public Book updateBook(@PathVariable Long id, @RequestBody Book bookDetails) {
//         return adminService.updateBook(id, bookDetails);
//     }
//     @CrossOrigin(origins="*")
//     @DeleteMapping("/books/{id}")
//     public void deleteBook(@PathVariable Long id) {
//         adminService.deleteBook(id);
//     }

    
// }

package com.example.demo.Controller;

import com.example.demo.Model.UserInfo; // Update to UserInfo
import com.example.demo.Service.UserInfoService; // Update to UserInfoService
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserInfoService userService; // Update to UserInfoService

    // Get all users
    @CrossOrigin(origins="*")
    @GetMapping
    public ResponseEntity<List<UserInfo>> getAllUsers() {
        List<UserInfo> users = userService.getAllUsers();
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    // Get a single user by ID
    @CrossOrigin(origins="*")
    @GetMapping("/{id}")
    public ResponseEntity<UserInfo> getUserById(@PathVariable("id") Long id) {
        UserInfo user = userService.getUserById(id).orElse(null);
        if (user != null) {
            return new ResponseEntity<>(user, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // Add a new user
    @PostMapping
    public ResponseEntity<UserInfo> addUser(@RequestBody UserInfo user) {
        UserInfo newUser = userService.saveUser(user); // Use saveUser method
        return new ResponseEntity<>(newUser, HttpStatus.CREATED);
    }

    // Update a user by ID
    @CrossOrigin(origins="*")
    @PutMapping("/{id}")
    public ResponseEntity<UserInfo> updateUser(@PathVariable("id") Long id, @RequestBody UserInfo user) {
        UserInfo updatedUser = userService.updateUser(id, user);
        if (updatedUser != null) {
            return new ResponseEntity<>(updatedUser, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // Delete a user by ID
    @CrossOrigin(origins="*")
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable("id") Long id) {
        boolean isRemoved = userService.deleteUser(id);
        if (isRemoved) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
