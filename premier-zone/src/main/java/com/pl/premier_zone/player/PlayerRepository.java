package com.pl.premier_zone.player;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface PlayerRepository extends JpaRepository<Player, String> {
    void deleteByName(String playerName);

    @Override
    Optional<Player> findById(String name);


    Optional<Player> findByName(String name);
}
