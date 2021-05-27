import React, { useState } from "react";
import DisplayChatText from "../Chat-Box/DisplayChatText";
import User from "./User";
import "./UserList.css";

function UserList({ conversationList, chatList, setChatList, setCoversation }) {
  const [chatText, setChatText] = useState([]);
  const [conversationId, setConversationId] = useState(-1);
  const [isClicked, setClick] = useState(false);

  // To get respective user chat using its conversation id
  const filterUserChat = (tempCurrentId) => {
    const tempChatText = chatList.filter(
      (item) => tempCurrentId === item.conversationId
    );
    return tempChatText;
  };

  // To navigate to the different different user chatting window
  const handleClick = (e) => {
    const tempCurrentId = parseInt(e.target.id);
    const tempChatText = filterUserChat(tempCurrentId);
    // setChatText((prev) => (prev = tempChatText));
    localStorage.setItem(conversationId, JSON.stringify(chatText));
    setChatText(() => {
      const localData = localStorage.getItem(tempCurrentId);
      return localData ? JSON.parse(localData) : tempChatText;
    });
    setConversationId(tempCurrentId);
    setClick(true);
  };
  return (
    <div className="main--container">
      {/* Mapping user chatting to show on window  */}
      {conversationList.map((conversation) => {
        return (
          <>
            {conversation.chats.length > 0 && (
              // Reusable User component to vaoid code redundancy
              <User conversation={conversation} handleClick={handleClick} />
            )}
          </>
        );
      })}
      {isClicked ? (
        // Right hand side chatting window
        <DisplayChatText
          chatList={chatList}
          chatText={chatText}
          setChatList={setChatList}
          setChatText={setChatText}
          conversationId={conversationId}
          conversationList={conversationList}
          setCoversation={setCoversation}
        />
      ) : (
        <div className="chat--box">
          <h1>Please click chat to open it :-)</h1>
        </div>
      )}
    </div>
  );
}

export default UserList;
