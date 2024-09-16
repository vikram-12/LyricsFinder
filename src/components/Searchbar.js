import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import React, { useContext, useState } from "react";
import { LyricsContext } from "../services/context";

const Searchbar = () => {
  const [inputValue, setInputValue] = useState("");
  const { searchLyrics } = useContext(LyricsContext);
  const handleChange = (event) => {
    setInputValue(event.target.value); // Update state with the input value
  };
  const handleClick = () => {
    if (inputValue) {
      searchLyrics(inputValue);
    }
  };
  return (
    <div className="flex justify-center  items-center">
      <div className="mx-2 mt-3 font-semibold">Search</div>
      <div className="flex items-center justify-between w-full sm:w-1/3 mt-4 rounded p-2 border-[1px] border-solid">
        <input
          className="outline-0 border-0 "
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Enter artist , song , lyrics .."
        />
        <PaperAirplaneIcon
          onClick={handleClick}
          className={`${
            inputValue
              ? "h-4 cursor-pointer"
              : "opacity-40 h-4 cursor-not-allowed"
          }`}
        />
      </div>
    </div>
  );
};

export default Searchbar;
