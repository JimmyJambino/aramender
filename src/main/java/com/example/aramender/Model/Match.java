package com.example.aramender.Model;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "matches")
public class Match {

    @Id
    private int id;

    private String mId;

    @ManyToMany(cascade = {CascadeType.ALL})
    private List<Player> players;


    public Match() {

    }
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getmId() {
        return mId;
    }

    public void setmId(String mId) {
        this.mId = mId;
    }

    public List<Player> getPlayers() {
        return players;
    }

    public void setPlayers(List<Player> players) {
        this.players = players;
    }
}
