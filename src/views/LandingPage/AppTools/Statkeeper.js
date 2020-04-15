import React from "react";
import AppToolContainer from "./AppToolContainer";
import media from "assets/img/AppDemos/statkeeper.gif";

export default function Statkeeper() {
  return (
    <AppToolContainer docName={"statkeeper"} media={media}>
      <h2>Statkeeper</h2>
      <h6>App Shown</h6>
      <p>Kaohsiung Ultimate League Statkeeper</p>
      <br />
      <h6>Use Cases</h6>
      <p>Any event interested on keeping stats for its players</p>
      <br />
      <h6>Description</h6>
      <p>
        Stats are fun! Until they're work... Having an easy way to keep
        statistics that update your leaderboards without extra work for
        volunteers can go a long way in adding to everyone's enjoyment! If used
        with the registration, then the configuration can be done automatically
        as well!
      </p>
    </AppToolContainer>
  );
}
