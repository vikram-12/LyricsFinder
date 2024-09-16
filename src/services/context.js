import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

const LyricsContext = createContext();

const LyricsProvider = ({ children }) => {
  const [trackList, setTrackList] = useState([]);
  const [lyrics, setLyrics] = useState({});
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const API_KEY = process.env.REACT_APP_API_KEY;
      //   const url = "/api/ws/1.1/chart.tracks.get?";
      // console.log(process.env.REACT_APP_API_KEY);
      const trackResults = await axios
        .get("/api/ws/1.1/chart.tracks.get", {
          params: {
            chart_name: "top",
            page: 1,
            page_size: 20,
            country: "in",
            f_has_lyrics: 1,
            apikey: API_KEY,
          },
        })
        .then((res) => res.data.message.body)
        .catch((err) => console.log(err));
      setTrackList(trackResults);
    };
    fetchData();
  }, []);

  const fetchLyrics = async (track_id) => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    setLoader(true);
    try {
      const lyricsData = await axios
        .get("/api/ws/1.1/track.lyrics.get", {
          params: {
            commontrack_id: track_id,
            apikey: API_KEY,
          },
        })
        .then((res) => res.data.message.body.lyrics);
      setLyrics(lyricsData);
      // Assuming the API returns a single item array
      setLoader(false);
    } catch (error) {
      console.error("Error fetching item data", error);
    }
  };

  const searchLyrics = async (searchValue) => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const trackResults = await axios
      .get("/api/ws/1.1/track.search", {
        params: {
          q: searchValue,
          page: 1,
          page_size: 20,
          s_track_rating: "desc",
          country: "in",
          f_has_lyrics: 1,
          apikey: API_KEY,
        },
      })
      .then((res) => res.data.message.body)
      .catch((err) => console.log(err));
    setTrackList(trackResults);
  };

  return (
    <LyricsContext.Provider
      value={{
        trackList,
        lyrics,
        fetchLyrics,
        searchLyrics,
        loader,
      }}
    >
      {children}
    </LyricsContext.Provider>
  );
};

export { LyricsContext, LyricsProvider };
