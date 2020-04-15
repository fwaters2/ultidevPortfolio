import React from "react";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import Button from "components/CustomButtons/Button";
import useGetLikes from "utils/useGetLikes";
import db from "utils/Firebase";

export default function AppToolContainer({ docName, media, children }) {
  const currentLikes = useGetLikes(docName);

  const handleClick = () => {
    console.log("added a like to " + docName);
    db.collection("likes")
      .doc(docName)
      .set({ likes: currentLikes + 1 }, { merge: true });
  };
  return (
    <div style={{ margin: "4em 0" }}>
      <GridContainer>
        <GridItem
          xs={12}
          sm={12}
          md={6}
          style={{ color: "black", textAlign: "left" }}
        >
          <div>
            {children}
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
        <GridItem
          xs={12}
          sm={12}
          md={6}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img width="60%" src={media} alt={docName} />
        </GridItem>
      </GridContainer>
    </div>
  );
}
