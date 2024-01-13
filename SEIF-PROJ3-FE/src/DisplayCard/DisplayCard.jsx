import { React, useEffect, useState } from "react";

//TODOS: props for display card

function DisplayCard() {
  // card will consist of different types / DayCard, QuoteCard, etc.

  const [card, setCard] = useState([]);

  return (
    <div className="h-96 my-8 card bordered shadow-lg bg-primary">
      <div className="card-body">
        {/* <h2 className="card-title">Card Title</h2> */}
        {/* <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          necessitatibus incidunt ut officiis explicabo inventore.
        </p> */}

        <p className="text-9xl font-bold">28</p>

        {/* <div className="justify-end card-actions">
          <button className="btn btn-secondary">More Info</button>
        </div> */}
      </div>
    </div>
  );
}
export default DisplayCard;
