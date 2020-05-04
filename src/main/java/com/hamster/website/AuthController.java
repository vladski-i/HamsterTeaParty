package com.hamster.website;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
public class AuthController {
    static Integer lastId = 0;
    private UserRepository userRepository;
    private JwtTokenUtil jwtTokenUtil;

    @Autowired
    public AuthController(UserRepository userRepository, JwtTokenUtil jwtTokenUtil) {
        this.userRepository = userRepository;
        this.jwtTokenUtil = jwtTokenUtil;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping(path = "/signup")
    public ResponseEntity<?> signUpEndpoint(
        @RequestBody User user
    ){
        //TODO duplicate username
        System.out.println(user);
        boolean dup = !userRepository.findByUserName(user.userName).stream().findFirst().isEmpty();
        if(dup)
            return ResponseEntity.status(400).body("Duplicate Username");
        userRepository.save(user);
        System.out.println("Tot repository-ul de useri arata acum asa:");
        System.out.println(userRepository.findAll());
        return ResponseEntity.ok(true);
    }


    @PostMapping(path = "/login")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<?> loginEndpoint(
            @RequestBody JwtRequest authenticationRequest
    ) throws ChangeSetPersister.NotFoundException {
        List<User> users = userRepository.findByUserName(authenticationRequest.getUserName());
        User user = users.stream().findFirst().orElseThrow(ChangeSetPersister.NotFoundException::new);
        if(!user.getPasswd().equals(authenticationRequest.getPasswd()))
            return  ResponseEntity.badRequest().body("Invalid credentials");

        final String token = jwtTokenUtil.generateToken(user);

        return ResponseEntity.ok(new JwtResponse(token));
    }
}
