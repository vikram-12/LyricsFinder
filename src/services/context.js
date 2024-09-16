import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

const LyricsContext = createContext();

const LyricsProvider = ({ children }) => {
  const [trackList, setTrackList] = useState([]);
  const [lyrics, setLyrics] = useState({});
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const url = `https://genius-song-lyrics1.p.rapidapi.com/chart/songs`;
    const options = {
      method: "GET",

      params: {
        time_period: "day",
        chart_genre: "all",
        per_page: "20",
        page: "1",
      },
      headers: {
        "x-rapidapi-key": API_KEY,
        "x-rapidapi-host": "genius-song-lyrics1.p.rapidapi.com",
      },
    };

    const trackResults = await axios
      .get(url, options)
      .then((res) => res.data.chart_items)
      .catch((err) => console.log(err));

    setTrackList(trackResults);
  };
  const fetchLyrics = async (track_id) => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const url = "https://genius-song-lyrics1.p.rapidapi.com/song/lyrics";
    const options = {
      method: "GET",

      params: {
        id: track_id,
        text_format: "plain",
      },
      headers: {
        "x-rapidapi-key": API_KEY,
        "x-rapidapi-host": "genius-song-lyrics1.p.rapidapi.com",
      },
    };
    setLoader(true);
    try {
      const lyricsData = await axios
        .get(url, options)
        .then((res) => res.data.lyrics);
      setLyrics(lyricsData);
      // Assuming the API returns a single item array
      setLoader(false);
    } catch (error) {
      console.error("Error fetching item data", error);
    }
  };

  const searchLyrics = async (searchValue) => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const url = `https://genius-song-lyrics1.p.rapidapi.com/search`;
    const options = {
      method: "GET",

      params: {
        q: searchValue,
        per_page: "20",
        page: "1",
      },
      headers: {
        "x-rapidapi-key": API_KEY,
        "x-rapidapi-host": "genius-song-lyrics1.p.rapidapi.com",
      },
    };
    const trackResults = await axios
      .get(url, options)
      .then((res) => res.data.hits)
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
