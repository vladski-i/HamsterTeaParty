package com.hamster.website;

import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface JokeRepository extends MongoRepository<Joke, Integer> {
    public List<Joke> findByTitle(String title);
}
