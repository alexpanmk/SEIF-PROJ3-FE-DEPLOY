import React from "react";

function MonthButton(props) {
  const { month, onClick } = props;
  return (
    <div>
      <button
        onClick={() => onClick(month)}
        className="ml-4 bg-gray-300 text-white py-2 px-6 rounded"
      >
        {returnMonth(month)}
      </button>
    </div>
  );
}

export default MonthButton;

const returnMonth = (num) => {
  switch (num - 1) {
    case 0:
      return "Jan";
    case 1:
      return "Feb";
    case 2:
      return "Mar";
    case 3:
      return "Apr";
    case 4:
      return "May";
    case 5:
      return "June";
    case 6:
      return "July";
    case 7:
      return "Aug";
    case 8:
      return "Sept";
    case 9:
      return "Oct";
    case 10:
      return "Nov";
    case 11:
      return "Dec";
    default:
      return "Error";
  }
};
