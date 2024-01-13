import { React, useState, useEffect } from "react";
import DisplayCard from "../DisplayCard/DisplayCard";

//TODO: To fetch cards to render for DisplayCards, to create useElysioAPI for logic to create the display sequence.

function Frontpage() {
  const [monthArray, setMonthArray] = useState([]); //For the days
  const [quoteArray, setQuoteArray] = useState([]); // For the quotes

  useEffect(() => {
    setMonthArray(generateMonthArray(2021, 8));
  }, []);

  return (
    <>
      <div class="ml-6 mr-6 gap-8 columns-4 ">
        <DisplayCard />
        <img
          class="w-full aspect-video mb-6"
          src="https://picsum.photos/500/300?random=1"
        />
        <img
          class="w-full aspect-square mb-6"
          src="https://picsum.photos/500/300?random=2"
        />
        <img
          class="w-full aspect-square mb-6"
          src="https://picsum.photos/500/300?random=3"
        />

        <img
          class="w-full aspect-square mb-6"
          src="https://picsum.photos/500/300?random=4"
        />
        <img
          class="w-full aspect-video mb-6"
          src="https://picsum.photos/500/300?random=5"
        />
        <img
          class="w-full aspect-video mb-6"
          src="https://picsum.photos/500/300?random=6"
        />
        <img
          class="w-full aspect-square mb-6"
          src="https://picsum.photos/500/300?random=7"
        />
        <img
          class="w-full aspect-video mb-6"
          src="https://picsum.photos/500/300?random=8"
        />
        <DisplayCard />
        <img
          class="w-full aspect-square mb-6"
          src="https://picsum.photos/500/300?random=9"
        />
        <DisplayCard />
      </div>
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
