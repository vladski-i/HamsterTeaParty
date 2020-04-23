package com.hamster.website;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class JokeController {
    // static Integer lastId = 0;
    private JokeRepository jokeRepository;

    @Autowired
    public JokeController(JokeRepository jokeRepository) {
        this.jokeRepository = jokeRepository;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping(path = "/jokes")
    public Boolean signUpEndpoint(
            @RequestBody Joke joke
    ){

        System.out.println(joke);
        jokeRepository.save(joke);
        System.out.println("Tot repository-ul de jokes arata acum asa:");
        System.out.println(jokeRepository.findAll());
        return true;
    }
}
