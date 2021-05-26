import React from "react";
import DateFunction from "../../DateFunction";

function User({ conversation, handleClick }) {
  return (
    <div>
      <div className="user--card" id={conversation.id} onClick={handleClick}>
        <div>
          <img src={conversation.user.profilePic} />
        </div>
        <p>{conversation.user.firstName}</p>
        <p>{conversation.chats[conversation.chats.length - 1].message}</p>
        <p>{DateFunction(conversation.updatedAt)}</p>
      </div>
    </div>
  );
}

export default User;
