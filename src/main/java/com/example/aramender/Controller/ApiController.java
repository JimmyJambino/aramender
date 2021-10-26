package com.example.aramender.Controller;

import com.example.aramender.Model.Match;
import com.example.aramender.Repository.MatchRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ApiController {

    @Autowired
    MatchRepository matchRepository;

    @PostMapping("/")
    public Match addMatch(@RequestBody Match match) {
        System.out.println("Match ID: " +match.getId());
        return matchRepository.save(match);

    }
}
