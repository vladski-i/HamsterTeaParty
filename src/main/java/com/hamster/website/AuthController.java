package com.hamster.website;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class AuthController {
    static Integer lastId = 0;
    private UserRepository userRepository;

    @Autowired
    public AuthController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping(path = "/signup")
    public Boolean signUpEndpoint(
        @RequestBody User user
    ){

//        User newUser = new User(
//                ++lastId,
//                userName,
//                phone,
//                email,
//                firstName,
//                lastName,
//                age,
//                country,
//                city,
//                favouriteSite,
//                passwd
//
//        );
        System.out.println(user);
        userRepository.save(user);
        return true;
    }
}
