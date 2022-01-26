import React from "react";
import classes from "./EmptyState.module.css";

const emptyState = (props) => {
  return (
    <div className={classes.emptyStateWrapper}>
      <img
        src="https://cdni.iconscout.com/illustration/premium/thumb/empty-state-2130362-1800926.png"
        alt=""
      />
      <p>You Dont Have A Favorite Book. Add Your First Favorite Book Now.</p>
    </div>
  );
};

export default emptyState;
