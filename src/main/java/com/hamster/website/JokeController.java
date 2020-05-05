package com.hamster.website;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class JokeController {
    // static Integer lastId = 0;
    private JokeRepository jokeRepository;
    private JwtTokenUtil jwtTokenUtil;
    private UserRepository userRepository;
    @Autowired
    public JokeController(JokeRepository jokeRepository, JwtTokenUtil jwtTokenUtil, UserRepository userRepository) {
        this.jokeRepository = jokeRepository;
        this.jwtTokenUtil = jwtTokenUtil;
        this.userRepository = userRepository;
    }

    @CrossOrigin(origins = "http://localhost:3000")
        @GetMapping(path = "/jokes")
    public List<Joke> getAllJokes(
    ){

        return jokeRepository.findAll();
    }
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(path = "/postJoke")
    public ResponseEntity<?> postJoke(RequestEntity<Joke> requestEntity) {
        String token = requestEntity.getHeaders().getOrEmpty("Authentication").get(0);
        if (token == null)
            return ResponseEntity.status(403).body("No auth token");
        String userId = userRepository.findByUserName(jwtTokenUtil.getUsernameFromToken(token)).get(0)._id;
        Joke newJoke = requestEntity.getBody();
        newJoke.setPosterId(userId);
        jokeRepository.save(newJoke);
        return ResponseEntity.ok().body("OK");
    }
}
