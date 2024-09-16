import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { LyricsContext } from "../services/context";

const Lyrics = () => {
  const { commonId } = useParams();
  const [trackName, setTrackName] = useState("");
  const [trackArtist, setTrackArtist] = useState("");
  const { trackList, lyrics, loader } = useContext(LyricsContext);
  useEffect(() => {
    if (commonId) {
      console.log(trackList);
      trackList.track_list.forEach((tracks) => {
        if (tracks.track.commontrack_id.toString() === commonId) {
          setTrackName(tracks.track.track_name);
          setTrackArtist(tracks.track.artist_name);
        }
      });
    }
  }, [commonId, trackList]);
  return (
    <div className="flex justify-center">
      {loader ? (
        <p>Loading Lyrics ...</p>
      ) : (
        <div className="w-full sm:w-1/2 text-center">
          <div className="mb-4">
            <h2 className="font-bold text-2xl text-[#ff5c35] tracking-wider ">
              {trackName}
            </h2>
            <p className="font-medium  tracking-wide">Artist: {trackArtist}</p>
          </div>
          <div className="text-left tracking-wide border-[1px] border-solid p-4">
            <div className="w-full sm:w-1/3">{lyrics.lyrics_body}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Lyrics;
