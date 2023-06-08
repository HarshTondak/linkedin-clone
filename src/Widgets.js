import React from "react";
import "./Widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import NewsArticles from "./NewsArticles";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>Latest News</h2>
        <InfoIcon />
      </div>

      <NewsArticles
        heading="Berserk chapter 373"
        subtitles="- Readers 9,89,972"
      />

      <NewsArticles
        heading="One Piece Chapter 1086"
        subtitles="- Readers 15,89,072"
      />
      <NewsArticles
        heading="JuJutsu Kaisen Chapter 225"
        subtitles="- Readers 6,75,979"
      />
      <NewsArticles
        heading="EpicGames Mystery Vault"
        subtitles="- Readers 5,80,770"
      />
    </div>
  );
}

export default Widgets;
