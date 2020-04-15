import React from "react";
import AppToolContainer from "./AppToolContainer";
import squadFinderMedia from "assets/img/AppDemos/beatthesunset.gif";

export default function SquadFinder() {
  return (
    <AppToolContainer docName={"squadFinder"} media={squadFinderMedia}>
      <h2>Squad Finder</h2>
      <h6>Event Shown</h6>
      <p>Beat The Sunset Relay Race</p>
      <br />
      <h6>Use Cases</h6>
      <p>
        Team Tournaments, Relay Races, anywhere people need help finding people
      </p>
      <br />
      <h6>Description</h6>
      <p>
        The goal of Squad Finder is to connect people who wish to participate in
        the same event and to take this burden off the organizers of that event.
      </p>
      <p>
        Squad Finder is a way for participants to create structured listings
        that are easy to browse and are therefore easier for players to find
        what they need. It gives the poster the options of many different
        contact methods along with a short description of what they're looking
        for. When the options are limited (example: Team looking for 1 girl, 2
        guys looking for a team, Team of 3 needs a guys and a girl) it generate
        the listing in multiple languages to further increase the chances that
        players can defeat the language barrier and find each other!
      </p>
    </AppToolContainer>
  );
}
