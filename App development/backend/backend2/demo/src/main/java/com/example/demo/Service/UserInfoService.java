// package com.example.demo.Service;

// import com.example.demo.Model.UserInfo;
// import com.example.demo.Repository.UserInfoRepository;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.security.crypto.password.PasswordEncoder;
// import org.springframework.stereotype.Service;

// import java.util.List;
// import java.util.Optional;

// @Service
// public class UserInfoService {
//     @Autowired
//     private UserInfoRepository userRepository;

//     @Autowired
//     private PasswordEncoder passwordEncoder;

//     public List<UserInfo> getAllUsers() {
//         return userRepository.findAll();
//     }

//     public Optional<UserInfo> getUserById(Long id) {
//         return userRepository.findById(id);
//     }

//     public Optional<UserInfo> getUserByEmail(String email) {
//         return userRepository.findByEmail(email);
//     }

//     public UserInfo saveUser(UserInfo user) {
       
//         user.setPassword(passwordEncoder.encode(user.getPassword()));
//         return userRepository.save(user);
//     }

//     public void deleteUser(long id) {
//         userRepository.deleteById(id);
//     }
// }

package com.example.demo.Service;

import com.example.demo.Model.UserInfo; // Ensure this is used
import com.example.demo.Repository.UserInfoRepository; // Ensure this is used
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserInfoService {
    @Autowired
    private UserInfoRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public List<UserInfo> getAllUsers() {
        return userRepository.findAll();
    }

    public Optional<UserInfo> getUserById(Long id) {
        return userRepository.findById(id);
    }

    public Optional<UserInfo> getUserByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    public UserInfo saveUser(UserInfo user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepository.save(user);
    }

    public UserInfo updateUser(Long id, UserInfo user) {
        if (userRepository.existsById(id)) {
            user.setId(id);
            return userRepository.save(user);
        }
        return null;
    }

    public boolean deleteUser(Long id) {
        if (userRepository.existsById(id)) {
            userRepository.deleteById(id);
            return true;
        }
        return false;
    }
}
