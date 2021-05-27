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

  // to load data from local storage whenever user try to send the message
  useEffect(() => {
    localStorage.setItem(conversationId, JSON.stringify(chatText));
  }, [chatText]);

  // To update conversation list (left hand side panel) with latest message
  const updateConversationList = () => {
    const copiedConversationList = conversationList;
    const toUpdateObject = copiedConversationList.filter(
      (object) => object.id === conversationId
    );
    toUpdateObject[0].chats[0].message = replyText;
    setCoversation(copiedConversationList);
    console.log(copiedConversationList);
    localStorage.setItem(
      "Conversation_List",
      JSON.stringify(copiedConversationList)
    );
  };

  // Setting user reply object
  const handleReply = (e) => {
    if (replyText) {
      const replyObject = {
        chatTypeId: 1,
        conversationId: parseInt(conversationId),
        createdAt: "2020-11-12T06:30:16.446574+00:00",
        message: replyText,
        userType: "user",
      };
      setChatText([...chatText, replyObject]);
      setChatList([...chatList, replyObject]);
      updateConversationList();
      setReply("");
    } else {
      alert("Please enter the message");
    }
  };
  return (
    <div className="chat--box">
      {chatText.map((chat) => {
        return (
          <>
            {/* Rendering chat according to user type */}
            {chat.userType === "user" ? (
              <div
                className="chat__text"
                style={{ textAlign: "right", marginLeft: "80%" }}
              >
                <h5>{chat.userType}</h5>
                <p>{chat.message}</p>
                <p>{DateFunction(chat.createdAt)}</p>
              </div>
            ) : (
              <div className="chat__text" style={{ textAlign: "right" }}>
                <h5>{chat.userType}</h5>
                <p>{chat.message}</p>
                <p>{DateFunction(chat.createdAt)}</p>
              </div>
            )}
          </>
        );
      })}
      <div>
        <input
          className="box--style"
          type="text"
          placeholder="Type your query..."
          value={replyText}
          onChange={(e) => setReply(e.target.value)}
        />
        <button className="button--style" onClick={handleReply}>
          send
        </button>
      </div>
    </div>
  );
}

export default DisplayChatText;
