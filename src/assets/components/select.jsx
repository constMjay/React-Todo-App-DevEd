import React from "react";

const Select = () => {
  return (
    <select className="custom-select custom-select-sm">
      <option value="" />
      <option value="all">All</option>
      <option value="completed">Completed</option>
      <option value="uncompleted">Uncompleted</option>
    </select>
  );
};

export default Select;
