import { PlayCircleIcon, PencilIcon } from "@heroicons/react/24/outline";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LyricsContext } from "../services/context";

const Track = ({ tracks }) => {
  const { fetchLyrics } = useContext(LyricsContext);

  return (
    <Link
      onClick={() => fetchLyrics(tracks.track.commontrack_id)}
      to={`/lyrics/${tracks.track.commontrack_id}`}
    >
      <div className="mx-2 my-2 p-4 border-solid border-[1px] rounded cursor-pointer transition duration-200 transform ease-in hover:scale-105 hover:z-50">
        <div className="flex items-center justify-between">
          <div className="flex items-center mx-2">
            <PlayCircleIcon className="h-6 mr-1" />
            <p className="font-semibold truncate max-w-40 text-[#ff5c35]">
              {tracks.track.track_name}
            </p>
          </div>
          <div>Ratings: {tracks.track.track_rating / 10}</div>
        </div>
        <div className=" mx-2 mt-2 flex items-center justify-between">
          <div className="flex items-center ">
            <PencilIcon className="h-3" />
            <p className="truncate max-w-40 mx-2">{tracks.track.artist_name}</p>
          </div>
          <div>Check Lyrics</div>
        </div>
      </div>
    </Link>
  );
};

export default Track;
