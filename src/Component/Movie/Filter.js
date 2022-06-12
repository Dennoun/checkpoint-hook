import React from "react";
import Select from "react-select";

function Filter({ filter, setFilter, setFilterMovie, card }) {

  

  const filterHandler = (e) => {
    setFilter(e.label);
    console.log(e);
  };
  const rateOptions = [
    { value: "Bad", label: "Bad" },
    { value: "Terrible", label: "Terrible" },
    { value: "Average", label: "Average" },
    { value: "Great", label: "Great" },
    { value: "Perfect", label: "Perfect" },
    { value: "All", label: "All" },
  ];

  return (
    <>
      <label>Filter by Rate :</label>
      <br />
      <Select
        InputValue={filter}
        onChange={filterHandler}
        className="rateFilter"
        options={rateOptions}
      />
    </>
  );
}

export default Filter;
