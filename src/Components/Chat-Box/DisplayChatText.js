import React, { useEffect, useState } from "react";
import DateFunction from "../../DateFunction";
import "./DisplayChatText.css";

function DisplayChatText({
  chatList,
  chatText,
  setChatList,
  setChatText,
  conversationId,
  conversationList,
  setCoversation,
}) {
  const [replyText, setReply] = useState("");
  useEffect(() => {
    localStorage.setItem(conversationId, JSON.stringify(chatText));
  }, [chatText]);

  const updateConversationList = () => {
    const copiedConversationList = conversationList;
    const toUpdateObject = copiedConversationList.filter(
      (object) => object.id === conversationId
    );
    toUpdateObject[0].chats[0].message = replyText;
    // toUpdateObject={...toUpdateObject]}
    setCoversation(copiedConversationList);
    // console.log(toUpdateObject[0].chats[0].message);
    console.log(copiedConversationList);
    localStorage.setItem(
      "Conversation_List",
      JSON.stringify(copiedConversationList)
    );
  };
  const handleReply = (e) => {
    const replyObject = {
      chatTypeId: 1,
      conversationId: parseInt(conversationId),
      createdAt: "2020-11-12T06:30:16.446574+00:00",
      message: replyText,
      userType: "user",
    };
    setChatText([...chatText, replyObject]);
    setChatList([...chatList, replyObject]);
    // setCoversation()
    updateConversationList();
  };
  return (
    <div className="chat--box">
      {chatText.map((chat) => {
        return (
          <div>
            <p>{chat.message}</p>
            <p>{DateFunction(chat.createdAt)}</p>
          </div>
        );
      })}
      <input
        type="text"
        value={replyText}
        onChange={(e) => setReply(e.target.value)}
      />
      <button onClick={handleReply}>send</button>
    </div>
  );
}

export default DisplayChatText;
