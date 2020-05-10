package com.hamster.website;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Comparator;
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
    @PostMapping(path = "/postJoke")
    public ResponseEntity<?> postJoke(RequestEntity<Joke> requestEntity) {
        String token = requestEntity.getHeaders().getFirst("Authorization");
        if (token == null)
            return ResponseEntity.status(403).body("No auth token");
        String userId = userRepository.findByUserName(jwtTokenUtil.getUsernameFromToken(token)).get(0)._id;
        Joke newJoke = requestEntity.getBody();
        newJoke.setPosterId(userId);
        newJoke.setAwardersIDs(new ArrayList<>());
        newJoke.setUpvotersIDs(new ArrayList<>());
        newJoke.setTags(new ArrayList<>());
        jokeRepository.save(newJoke);
        return ResponseEntity.ok().body("OK");
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(path = "/joke")
    public ResponseEntity<Joke> getJoke(
            @RequestParam String _id
    ){
        System.out.println(ResponseEntity.ok(jokeRepository.findBy_id(_id).stream().findFirst().get()));
        return ResponseEntity.ok(jokeRepository.findBy_id(_id).stream().findFirst().get());
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(path = "/jokesByPoster")
    public ResponseEntity<?> getJokesByPoster(
            @RequestParam String posterId
    ){
        System.out.println(ResponseEntity.ok(jokeRepository.findByposterId(posterId)));
        return ResponseEntity.ok(jokeRepository.findByposterId(posterId));
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(path = "/jokesByDate")
    public ResponseEntity<?> getSortedJokesByDate(){
        System.out.println(ResponseEntity.ok(jokeRepository.findAll(Sort.by("createdAt"))));
        return ResponseEntity.ok(jokeRepository.findAll(Sort.by("createdAt")));
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(path = "/jokesByUpvotes")
    public ResponseEntity<?> getSortedJokesByUpvotes(){
        List<Joke> jokes = jokeRepository.findAll();
        System.out.println("BEFORE SORT");
        System.out.println(jokes);
        int cnt = 0;
        for (Joke x : jokes) {
                x.upvotersIDs.add("Tomita");
                cnt++;
                if (cnt % 3 == 0) {
                    x.upvotersIDs.add("Danutu");
                }
        }
        jokes.sort(Comparator.comparingInt(joke -> joke.upvotersIDs.size()));
        System.out.println("AFTER SORT SORT");
        System.out.println(jokes);
        return ResponseEntity.ok(jokes);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PutMapping(path = "/upvoteJoke")
    public ResponseEntity<?> upvote(RequestEntity<Joke> requestEntity){
        String token = requestEntity.getHeaders().getFirst("Authorization");
        if (token == null)
            return ResponseEntity.status(403).body("No auth token");
        String userId = userRepository.findByUserName(jwtTokenUtil.getUsernameFromToken(token)).get(0)._id;
        requestEntity.getBody().getUpvotersIDs().add(userId);
        jokeRepository.save(requestEntity.getBody());
        return ResponseEntity.ok().build();
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PutMapping(path = "/awardJoke")
    public ResponseEntity<?> awar(RequestEntity<Joke> requestEntity){
        String token = requestEntity.getHeaders().getFirst("Authorization");
        if (token == null)
            return ResponseEntity.status(403).body("No auth token");
        String userId = userRepository.findByUserName(jwtTokenUtil.getUsernameFromToken(token)).get(0)._id;
        requestEntity.getBody().getAwardersIDs().add(userId);
        jokeRepository.save(requestEntity.getBody());
        return ResponseEntity.ok().build();
    }
}
