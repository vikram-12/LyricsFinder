import React, { useContext } from "react";
import { LyricsContext } from "../services/context";

const Lyrics = () => {
  const { lyrics, loader } = useContext(LyricsContext);
  console.log(lyrics);
  return (
    <div className="flex justify-center">
      {loader ? (
        <p>Loading Lyrics ...</p>
      ) : (
        <div className="w-full sm:w-1/2 text-center">
          <div className="mb-4">
            <h2 className="font-bold text-2xl text-[#ff5c35] tracking-wider ">
              {lyrics?.tracking_data?.title}
            </h2>
            <p className="font-medium  tracking-wide">
              Artist: {lyrics?.tracking_data?.primary_artist}
            </p>
          </div>
          <div className="text-left tracking-wide border-[1px] border-solid p-4">
            <div className="w-full sm:w-1/3">{lyrics.lyrics?.body.plain}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Lyrics;
