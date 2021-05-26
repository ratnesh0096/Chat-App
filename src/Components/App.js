import { useEffect, useState } from "react";
import "./App.css";
import UserList from "./Conversation-Panel/UserList";
import data from "../ConversationList.json";
import chatData from "../ChatList.json";
import SelectOption from "./Select-Component/Select";
function App() {
  const [conversationList, setCoversation] = useState([]);
  const [chatList, setChatList] = useState([]);

  useEffect(() => {
    setChatList(chatData.data.chats);
    let localData = localStorage.getItem("Conversation_List");
    localStorage.setItem(
      "Conversation_List",
      localData ? localData : JSON.stringify(data.data.conversations)
    );
    setCoversation(() => {
      const localData = localStorage.getItem("Conversation_List");
      return localData ? JSON.parse(localData) : [];
    });
  }, []);

  return (
    <div className="App">
      <div>
        <SelectOption />
      </div>
      <UserList
        conversationList={conversationList}
        chatList={chatList}
        setChatList={setChatList}
        setCoversation={setCoversation}
      />
    </div>
  );
}

export default App;
