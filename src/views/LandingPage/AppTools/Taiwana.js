import React from "react";
import AppToolContainer from "./AppToolContainer";
import media from "assets/img/AppDemos/taiwana.gif";

export default function Taiwana() {
  return (
    <AppToolContainer docName={"taiwana"} media={media}>
      <h2>Tournament Webapps (2)</h2>
      <h6>Event Shown</h6>
      <p>Taiwana Play (Kaohsiung, TW)</p>
      <br />
      <h6>Use Cases</h6>
      <p>Aggregating all event information into one mobile accessible place</p>
      <br />
      <h6>Description</h6>
      <p>
        No matter how many posts are made, emails sent out, or directions given
        players respond much better to information on demand (usually the day OF
        the event). Having all the information available at their fingerprints
        can go along way to reduce those last minute questions on the most
        stressful day! Currently working on making them available OFFLINE as
        well for international players without those simcards.
      </p>
    </AppToolContainer>
  );
}
