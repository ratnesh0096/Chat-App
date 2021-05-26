import React from "react";

function DateFunction(updatedAt) {
  const date = new Date(updatedAt);
  const dateString =
    date.getDate() +
    "/" +
    date.getMonth() +
    "/" +
    date.getFullYear() +
    " " +
    date.getHours() +
    ":" +
    date.getUTCMinutes();

  return dateString;
}

export default DateFunction;
