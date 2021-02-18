import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    if (e.key === "Enter") {
      onSearch && onSearch(searchTerm);
    } else {
      const text = e.target.value;
      setSearchTerm(text);
    }
  };

  return (
    <div className="relative w-full">
      <input
        type="text"
        className="h-14 w-full pr-8 pl-5 rounded z-0 focus:shadow focus:outline-none"
        placeholder="Search for any job, title, keywords or company"
        value={searchTerm}
        onChange={handleChange}
        onKeyPress={handleChange}
      />
      <div className="absolute top-4 right-3">
        <i className="fa fa-search"></i>{" "}
      </div>
    </div>
  );
};

export default SearchBar;
