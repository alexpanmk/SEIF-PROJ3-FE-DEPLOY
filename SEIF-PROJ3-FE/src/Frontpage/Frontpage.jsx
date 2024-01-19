import { React, useState, useEffect } from "react";
import DisplayCard from "../DisplayCard/DisplayCard";
import QuoteCard from "../QuoteCard/QuoteCard";

//TODO: To fetch cards to render for DisplayCards, to create useElysioAPI for logic to create the display sequence.

const sampleMonthArray = [
  { dateNo: 1, day: "Wednesday" },
  { dateNo: 2, day: "Thursday" },
  { dateNo: 3, day: "Friday" },
  { dateNo: 4, day: "Saturday" },
  { dateNo: 5, day: "Sunday" },
];

function Frontpage() {
  const [monthArray, setMonthArray] = useState(generateMonthArray(2024, 1)); //For the days
  const [quoteArray, setQuoteArray] = useState([]); // For the quotes
  const [displayCardArray, setDisplayCardArray] = useState([]); // For the cards

  useEffect(() => {
    const updatedDisplayCardArray = monthArray.map((day, index) => {
      if ((index + 1) % 3 === 0) {
        return <QuoteCard key={index} />;
      } else {
        return (
          <DisplayCard
            key={index}
            dateNo={day.dateNumber}
            day={day.day}
            index={index}
          />
        );
      }
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
