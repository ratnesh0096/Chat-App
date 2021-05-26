import React, { useState } from "react";
import DisplayChatText from "../Chat-Box/DisplayChatText";
import User from "./User";
import "./UserList.css";

function UserList({ conversationList, chatList, setChatList, setCoversation }) {
  const [chatText, setChatText] = useState([]);
  const [conversationId, setConversationId] = useState(-1);
  const filterUserChat = (tempCurrentId) => {
    const tempChatText = chatList.filter(
      (item) => tempCurrentId === item.conversationId
    );
    return tempChatText;
  };

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
  };
  return (
    <div className="main--container">
      {conversationList.map((conversation) => {
        return (
          <div>
            {conversation.chats.length > 0 && (
              <User conversation={conversation} handleClick={handleClick} />
            )}
          </div>
        );
      })}
      <DisplayChatText
        chatList={chatList}
        chatText={chatText}
        setChatList={setChatList}
        setChatText={setChatText}
        conversationId={conversationId}
        conversationList={conversationList}
        setCoversation={setCoversation}
      />
    </div>
  );
}

export default UserList;
