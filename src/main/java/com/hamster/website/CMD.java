package com.hamster.website;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.Date;

@Component
public class CMD implements CommandLineRunner {

    private UserRepository userRepository;
    private JokeRepository jokeRepository;

    @Autowired
    public CMD(UserRepository userRepository, JokeRepository jokeRepository) {
        this.userRepository = userRepository;
        this.jokeRepository = jokeRepository;
    }

    @Override
    public void run(String...args) throws Exception {
        // userRepository.deleteAll();
        userRepository.save(new User("0","cptvladski","vlad@vlad.com","vlad","leica",21,"RO","clung","fb.com/vlad",new ArrayList<>(),"vlad","1234", 0));
        userRepository.save(new User("1","cptvlad","vlad@vlad.com","vlad","leica",21,"RO","clung","fb.com/vlad",new ArrayList<>(),"vlad","1234", 0));
        System.out.println(userRepository.findAll());

//        jokeRepository.save(new Joke("1", "adasdes", "newjoke1", "Acesta este textul", new Date(System.currentTimeMillis()),new ArrayList<>(),new ArrayList<>(),new ArrayList<>()));
        System.out.println(jokeRepository.findAll());
    }
}