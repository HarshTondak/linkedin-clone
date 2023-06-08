import React from "react";
import "./Widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function Widgets() {
  const newsArticle = (heading, subtitiles) => {
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>

      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitiles}</p>
      </div>
    </div>;
  };

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>Latest News</h2>
        <InfoIcon />
      </div>

      {newsArticle("Berserk chapter 373", "- Readers 9,89,972")}
      {newsArticle("One Piece chapter 1086", "- Readers 15,89,072")}
      {newsArticle("JJK chapter 225", "- Readers 6,75,979")}
      {newsArticle("EpicGames Mystery Vault", "- Readers 5,80,770")}
    </div>
  );
}

export default Widgets;
