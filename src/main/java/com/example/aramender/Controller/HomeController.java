package com.example.aramender.Controller;

import com.example.aramender.Model.Match;
import com.example.aramender.Repository.MatchRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@Controller
public class HomeController {



    @GetMapping("/")
    public String index() {
        return "home/index";
    }


}
