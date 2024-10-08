import React, { useContext } from "react";
import Track from "../components/Track";
import { LyricsContext } from "../services/context";
import Searchbar from "../components/Searchbar";

const Container = () => {
  const { trackList } = useContext(LyricsContext);
  console.log("here", trackList);
  return (
    <div>
      <Searchbar />
      {trackList?.length === 0 ? (
        <p> Loading ...</p>
      ) : (
        <div className="sm:grid xl:grid-cols-3 md:grid-cols-2 p-4">
          {trackList?.map((tracks) => (
            <Track
              key={tracks?.item?.id || tracks?.result?.id}
              tracks={tracks}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Container;
