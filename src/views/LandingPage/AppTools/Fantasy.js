import React from "react";
import AppToolContainer from "./AppToolContainer";
import media from "assets/img/AppDemos/fantasy.gif";

export default function Fantasy() {
  return (
    <AppToolContainer docName={"fantasy"} media={media}>
      <h2>Fantasy Ultimate</h2>
      <h6>App Shown</h6>
      <p>KUL Fantasy</p>
      <br />
      <h6>Use Cases</h6>
      <p>Getting fans or injured players a piece of the action</p>
      <br />
      <h6>Description</h6>
      <p>
        The most frivolous piece of software on the list... the goal of fantasy
        ultimate is to keep the competition alive even on the sidelines! Players
        are able to select a "fantasy" team of statgetters (see statkeeper) and
        compete with other digital players. In KUL it has been further
        configured to add more weight to newer players and not allow users to
        select the same people more than once to keep everyone scouting the
        field!
      </p>
    </AppToolContainer>
  );
}
