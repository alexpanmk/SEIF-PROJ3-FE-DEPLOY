import React, { useEffect, useState } from "react";

function QuoteCard() {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    //TODO: Reference from settings in future if we want to allow users to turn off quotes or show quotes pertaining to challenges detected in their journal entries.

    !quote &&
      fetch("https://api.quotable.io/random")
        .then((res) => res.json())
        .then((data) => setQuote(data.content));
  });

  return (
    quote && (
      <div className="my-8 card bordered shadow-lg bg-accent">
        <div className="card-body">
          <p className="text-2xl font-bold">{quote}</p>
        </div>
      </div>
    )
  );
}

export default QuoteCard;
