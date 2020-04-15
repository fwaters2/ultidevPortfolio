import React from "react";
import AppToolContainer from "./AppToolContainer";
import registrationMedia from "assets/img/AppDemos/registration.gif";

export default function Registration() {
  return (
    <AppToolContainer docName={"registration"} media={registrationMedia}>
      <h2>Registration</h2>
      <h6>Event Shown</h6>
      <p>Kaohsiung Ultimate League</p>
      <br />
      <h6>Use Cases</h6>
      <p>Tournaments and Leagues</p>
      <br />
      <h6>Description</h6>
      <p>
        There are TONS of options for registering players out there so what is
        the point of using a more custom option? While it does look nice to be
        able to give your registraion an "original" feel, the main power to be
        gained is how the instantaneously digested and displayed for anyone
        trying to get a quick look at the current jersey order size, gender
        ratio, or a quick ranked list of players based on their
        self-assessments. The scorekeeping and fantasy ultimate apps below were
        created from the information gathered. Possibilities are endless!
      </p>
    </AppToolContainer>
  );
}
