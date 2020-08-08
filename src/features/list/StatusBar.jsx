import React from "react";

export const StatusBar = ({ isFetching = true }) => {
  return (
    <div className="app-status-bar">
      <i>{isFetching && "Updating data in background..."}</i>
    </div>
  );
};
