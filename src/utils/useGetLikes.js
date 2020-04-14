import React, { useState, useEffect } from "react";
import db from "./Firebase";

export default function useGetLikes(document) {
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    const unsubscribe = db
      .collection("likes")
      .doc(document)
      .onSnapshot((snapshot) => {
        const currentLikes = snapshot.data() ? snapshot.data().likes : 0;
        setLikes(currentLikes);
        return null;
      });
    return () => unsubscribe();
  }, [document]);
  return likes;
}
