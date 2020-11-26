import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import "./patreon.css";
// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";
import db from "utils/Firebase";

const useStyles = makeStyles(styles);
const initialData = { name: "", email: "", message: "" };

export default function PatreonSection() {
  const classes = useStyles();
  const [data, setData] = useState(initialData);

  const handleSubmit = () => {
    db.collection("messages").add({
      date: new Date(),
      ...data,
    });

    alert(
      "Thanks for messaging me! If you'd like to get in touch with me even faster, find me on social media!"
    );
    setData(initialData);
  };
  const handleChange = (dataType) => (e) => {
    console.log("dataType", dataType);
    console.log(e);
    setData({ ...data, [dataType]: e.target.value });
  };

  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}>
            Interested in supporting these projects?
          </h2>
          <h4 className={classes.description}>
            If you'd like to show your support for any of these projects,
            consider becoming a supporter on Patreon!
          </h4>
          <form>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={4} className={classes.textCenter}>
                {/* <a
              href="https://www.patreon.com/bePatron?u=28484430"
              data-patreon-widget-type="become-patron-button"
            >
              Become a Patron!
            </a>
            <script
              async
              src="https://c6.patreon.com/becomePatronButton.bundle.js"
            ></script> */}
                <a
                  className="patreon-button"
                  href="https://www.patreon.com/bePatron?u=28484430"
                  role="button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div classname="patreon-inner-container">
                    <div className="patreon-svg-container">
                      <span
                        style={{
                          height: "1rem",
                          width: "1rem",
                          display: "flex",
                        }}
                      >
                        <svg
                          viewBox="0 0 569 546"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{ color: "white" }}
                        >
                          <g>
                            <circle
                              style={{ color: "white" }}
                              cx="362.589996"
                              cy="204.589996"
                              data-fill="1"
                              id="Oval"
                              r="204.589996"
                            ></circle>
                            <rect
                              data-fill="2"
                              height="545.799988"
                              id="Rectangle"
                              width="100"
                              x="0"
                              y="0"
                            ></rect>
                          </g>
                        </svg>
                      </span>
                    </div>
                    Become a Patron!
                  </div>
                </a>
              </GridItem>
            </GridContainer>
          </form>
        </GridItem>
      </GridContainer>
    </div>
  );
}
