import { Avatar } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import db from "../firebase";
import "./SidebarChat.css";
import { Link } from "react-router-dom";

function SidebarChat({ id, name, addNewChat }) {
  const createChat = () => {
    const roomName = prompt("Please enter a name for chat");

    if (roomName) {
      db.collection("rooms").add({
        name: roomName,
      });
    }
  };
  return !addNewChat ? (
    <Link to={`/rooms/${id}`}>
      <div className="sidebarchat">
        <Avatar src="" />
        <div className="sidebarchat__info">
          <h2>{name}</h2>
          <p>Last message...</p>
        </div>
      </div>
    </Link>
  ) : (
    <Link>
      <div onClick={createChat} className="sidebarchat">
        <h2>create a new chat</h2>
      </div>
    </Link>
  );
}

export default SidebarChat;
