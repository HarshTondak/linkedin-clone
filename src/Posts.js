import React from "react";
import "./Posts.css";
import Avatar from "@mui/material/Avatar";
import InputOptions from "./InputOptions";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import CommentIcon from "@mui/icons-material/Comment";
import SendIcon from "@mui/icons-material/Send";
import ShareIcon from "@mui/icons-material/Share";

function Posts({ name, desc, msg, photoURL }) {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar />
        <div className="post__info">
          <h2>{name}</h2>
          <p>{desc}</p>
        </div>
      </div>

      <div className="post__body">
        <p>{msg}</p>
      </div>

      <div className="post__buttons">
        <InputOptions Icon={ThumbUpOffAltIcon} title="Like" color="grey" />
        <InputOptions Icon={CommentIcon} title="Comment" color="grey" />
        <InputOptions Icon={ShareIcon} title="Share" color="grey" />
        <InputOptions Icon={SendIcon} title="Send" color="grey" />
      </div>
    </div>
  );
}

export default Posts;
