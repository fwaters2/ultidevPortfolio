import React from "react";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import Button from "components/CustomButtons/Button";
import useGetLikes from "utils/useGetLikes";
import db from "utils/Firebase";

export default function Sotg(props) {
  const { direction } = props;
  const currentLikes = useGetLikes("sotg");
  const handleClick = () => {
    console.log("added a like to SOTG");
    db.collection("likes")
      .doc("sotg")
      .set({ likes: currentLikes + 1 }, { merge: true });
  };
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
            <h2>Online Spirit Sheets</h2>
            <h6>App Shown</h6>
            <p>SOTG.online</p>
            <br />
            <h6>Use Cases</h6>
            <p>
              Any event that uses Spirit Scores. Also available for any two
              teams (only requires an email)
            </p>
            <br />
            <h6>Description</h6>
            <p>
              The goal of SOTG.online is to help teams communicate spirit in a
              more efficient and productive way. Organizers set up their event
              by supplying only an email and the teams in their tournament and
              can view scores being submitted in realtime to be on top of any
              team that needs to be reminded to submit and will also have the
              current Spirit Standings at their disposal. For the spirit
              captains, bundled into the app are the official spirit score
              examples that a user can add to their feedback with a single
              touch. If a spirit captain supplies their email upon completion,
              they will receive the opposing teams score as well (but only after
              they've submitted as well).
            </p>
            <GridContainer alignItems="center">
              <GridItem xs={6}>
                <Button fullWidth color="primary" onClick={handleClick}>
                  Like
                </Button>
              </GridItem>
              <GridItem xs={6}>Current Likes: {currentLikes}</GridItem>
            </GridContainer>
          </div>
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <img
            width="50%"
            src={require("assets/img/AppDemos/SOTGDemo.gif")}
            alt="SOTG online"
          />
        </GridItem>
      </GridContainer>
    </div>
  );
}
