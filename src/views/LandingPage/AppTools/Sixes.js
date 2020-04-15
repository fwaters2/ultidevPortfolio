import React from "react";
import AppToolContainer from "./AppToolContainer";
import media from "assets/img/AppDemos/sixes.gif";

export default function Sixes() {
  return (
    <AppToolContainer docName={"sixes"} media={media}>
      <h2>Tournament Webapps (1)</h2>
      <h6>Event Shown</h6>
      <p>Six on the Beach (Pohang, South Korea)</p>
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
