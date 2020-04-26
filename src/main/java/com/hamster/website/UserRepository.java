package com.hamster.website;

import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface UserRepository extends MongoRepository<User, String> {
    public List<User> findByUserName(String userName);
}
