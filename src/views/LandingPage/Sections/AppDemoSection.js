import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

//Media
import Sotg from "../AppTools/Sotg";
import SquadFinder from "../AppTools/SquadFinder";
import Registration from "../AppTools/Registration";
import Sixes from "../AppTools/Sixes";
import Taiwana from "../AppTools/Taiwana";
import Statkeeper from "../AppTools/Statkeeper";
import Fantasy from "../AppTools/Fantasy";

const useStyles = makeStyles(styles);

export default function AppDemoSection({ refs }) {
  const classes = useStyles();

  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Tools</h2>
          <h5 className={classes.description}>
            Feel free to peruse the tools below and like the ones you'd like to
            see used more and feel free to message with any feature ideas you'd
            like see implemented in the future!
          </h5>
        </GridItem>
      </GridContainer>
      <Sotg refs={refs} />
      <Sixes />
      <Taiwana />
      <SquadFinder />
      <Registration />
      <Statkeeper />
      <Fantasy />
    </div>
  );
}
