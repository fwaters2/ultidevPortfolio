import React from "react";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import Button from "components/CustomButtons/Button";

export default function SquadFinder(props) {
  const { direction } = props;
  const currentLikes = 872;
  return (
    <div>
      <GridContainer direction={direction}>
        <GridItem
          xs={12}
          sm={12}
          md={6}
          style={{ color: "black", textAlign: "left" }}
        >
          <div>
            <h2>Squad Finder</h2>
            <h6>Event Shown</h6>
            <p>Beat The Sunset Relay Race</p>
            <br />
            <h6>Use Cases</h6>
            <p>
              Team Tournaments, Relay Races, anywhere people need help finding
              people
            </p>
            <br />
            <h6>Description</h6>
            <p>
              The goal of Squad Finder is to connect people who wish to
              participate in the same event and to take this burden off the
              organizers of that event.
            </p>
            <p>
              Squad Finder is a way for participants to create structured
              listings that are easy to browse and are therefore easier for
              players to find what they need. It gives the poster the options of
              many different contact methods along with a short description of
              what they're looking for. When the options are limited (example:
              Team looking for 1 girl, 2 guys looking for a team, Team of 3
              needs a guys and a girl) it generate the listing in multiple
              languages to further increase the chances that players can defeat
              the language barrier and find each other!
            </p>
            <GridContainer alignItems="center">
              <GridItem xs={6}>
                <Button fullWidth color="primary">
                  Like
                </Button>
              </GridItem>
              <GridItem xs={6}>Current Likes: {currentLikes}</GridItem>
            </GridContainer>
          </div>
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <img
            width="90%"
            src={require("assets/img/AppDemos/beatthesunset.gif")}
            alt="beat the sunset"
          />
        </GridItem>
      </GridContainer>
    </div>
  );
}
