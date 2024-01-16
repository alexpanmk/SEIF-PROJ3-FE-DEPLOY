import { React, useEffect, useState } from "react";

//Elysio Card Components
import DayCard from "../DayCard/DayCard";
import QuoteCard from "../QuoteCard/QuoteCard";

//TODOS: props for display card

function DisplayCard(props) {
  const { dateNo, day } = props;
  // card will consist of different types / DayCard, QuoteCard, etc.

  //TODO: Conditional rendering for card type

  return (
    <>
      <DayCard dateNo={dateNo} day={day} />
    </>
  );
}
export default DisplayCard;
