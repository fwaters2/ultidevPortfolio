import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import Button from "components/CustomButtons/Button";
import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import AppDescription from "./AppDescription";
import Sotg from "../AppTools/Sotg";
import SquadFinder from "../AppTools/SquadFinder";
const useStyles = makeStyles(styles);

export default function AppDemoSection() {
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
      <SquadFinder direction="row" />
      <Sotg direction="row-reverse" />
    </div>
  );
}
