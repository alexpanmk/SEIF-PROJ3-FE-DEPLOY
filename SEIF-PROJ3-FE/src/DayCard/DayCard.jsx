import { React, useState } from "react";

function DayCard({ dateNo, day }) {
  console.log(dateNo);
  return (
    <>
      <div className="h-96 my-8 card bordered shadow-lg bg-primary">
        <div className="card-body">
          {/* <h2 className="card-title">Card Title</h2> */}
          {/* <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          necessitatibus incidunt ut officiis explicabo inventore.
        </p> */}

          <h1 className="text-9xl font-bold">{dateNo}</h1>
          <p className="text-2xl font-bold">{day}</p>

          {/* <div className="justify-end card-actions">
          <button className="btn btn-secondary">More Info</button>
        </div> */}
        </div>
      </div>
    </>
  );
}

export default DayCard;
