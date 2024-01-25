import { React, useEffect, useState } from "react";

//Elysio Card Components
import DayCard from "../DayCard/DayCard";
import QuoteCard from "../QuoteCard/QuoteCard";

//TODOS: props for display card

function DisplayCard(props) {
  const { cardType, cardData, index } = props;
  const [settings, setSettings] = useState({
    quoteFrequency: 3, //Frequency of quote card
  });
  // card will consist of different types / DayCard, QuoteCard, etc.

  //TODO: Conditional rendering for card type

  switch (cardType) {
    case "quote":
      return <QuoteCard quote={cardData.quote} />;
    case "day":
      //TODO: Include payload attribute should we decide to pass other data through this way
      return <DayCard dateNo={cardData.dayNo} day={cardData.dayName} />;
  }
}
export default DisplayCard;
