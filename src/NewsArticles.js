import React from "react";
import FiberManualRecordTwoToneIcon from "@mui/icons-material/FiberManualRecordTwoTone";
import "./NewsArticles.css";

function NewsArticles({ heading, subtitles }) {
  return (
    <div className="newsArticles">
      <div className="articleLeft">
        <FiberManualRecordTwoToneIcon />
      </div>

      <div className="articleRight">
        <h4>{heading}</h4>
        <p>{subtitles}</p>
      </div>
    </div>
  );
}
export default NewsArticles;
