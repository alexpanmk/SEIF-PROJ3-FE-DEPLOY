import { React, useState, useEffect } from "react";
import DisplayCard from "../DisplayCard/DisplayCard";
import QuoteCard from "../QuoteCard/QuoteCard";

//TODO: To fetch cards to render for DisplayCards, to create useElysioAPI for logic to create the display sequence.

function Frontpage() {
  const [monthArray, setMonthArray] = useState(generateMonthArray(2024, 1)); //For the days

  //TODO: Fetch the display sequence from the displaycard route
  const [displayCardArray, setDisplayCardArray] = useState([]); // For the cards

  useEffect(() => {
    const updatedDisplayCardArray = monthArray.map((day, index) => {
      return (
        <DisplayCard
          key={index}
          dateNo={day.dateNumber}
          day={day.day}
          index={index}
        />
      );
    });
    setDisplayCardArray(updatedDisplayCardArray);
  }, [monthArray]);

  return (
    <>
      <div class="ml-6 mr-6 gap-8 columns-4 ">{displayCardArray}</div>
    </>
  );
}

/////////////// Utility Functions ///////////////

function generateMonthArray(year, month) {
  let monthArray = [];
  let date = new Date(year, month, 1);

  while (date.getMonth() === month) {
    monthArray.push({
      dateNumber: date.getDate(),
      day: date.toLocaleString("en-US", { weekday: "long" }),
    });
    date.setDate(date.getDate() + 1);
  }

  return monthArray;
}

export default Frontpage;
