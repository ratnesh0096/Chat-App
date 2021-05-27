import React from "react";
import DateFunction from "../../DateFunction";

function User({ conversation, handleClick }) {
  return (
    <aside
      className="user--card"
      id={conversation.id}
      onClick={handleClick}
      style={{ height: "195px" }}
    >
      <div className="icon" id={conversation.id}>
        <img src={conversation.user.profilePic} id={conversation.id} />
      </div>
      <div className="user--crad__info" id={conversation.id}>
        <p id={conversation.id}>
          {conversation.user.firstName} <br /> <br />
          {
            conversation.chats[conversation.chats.length - 1].message
          } <br /> <br />
          {DateFunction(conversation.updatedAt)}
        </p>
      </div>
    </aside>
  );
}

export default User;
