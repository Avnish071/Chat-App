import React, { useEffect, useState } from "react";
import { MessageCircle, Send, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

const dummyChats = [
  { id: 1, name: "Alice", lastMessage: "Hey there!" },
  { id: 2, name: "Bob", lastMessage: "Are we meeting today?" },
  { id: 3, name: "Charlie", lastMessage: "Let’s catch up soon." },
];

const dummyMessages = [
  { from: "them", text: "Hi! How are you?" },
  { from: "me", text: "I'm good, you?" },
  { from: "them", text: "Doing well!" },
];

export default function DashboardPage() {
  const [selectedChat, setSelectedChat] = useState(dummyChats[0]);
  const [messages, setMessages] = useState(dummyMessages);
  const [newMessage, setNewMessage] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAuth = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/auth/check", {
          credentials: "include",
        });
        if (res.ok) {
          const data = await res.json();
          setUser(data);
        } else {
          navigate("/login");
        }
      } catch (err) {
        console.error("Auth check failed:", err);
        navigate("/login");
      } finally {
        setLoading(false);
      }
    };
    fetchAuth();
  }, [navigate]);

  const handleSend = () => {
    if (newMessage.trim()) {
      setMessages((prev) => [...prev, { from: "me", text: newMessage }]);
      setNewMessage("");
    }
  };

  if (loading) {
    return <div className="p-10 text-center text-lg">Loading Dashboard...</div>;
  }

  return (
    <div className="h-screen w-full flex">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-100 border-r p-4 overflow-y-auto">
        <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <MessageCircle /> Chats
        </h2>
        <ul className="space-y-2">
          {dummyChats.map((chat) => (
            <li
              key={chat.id}
              onClick={() => setSelectedChat(chat)}
              className={`p-3 rounded-xl cursor-pointer hover:bg-blue-100 ${
                selectedChat.id === chat.id ? "bg-blue-200" : ""
              }`}
            >
              <div className="font-medium">{chat.name}</div>
              <div className="text-sm text-gray-500 truncate">
                {chat.lastMessage}
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="p-4 bg-white shadow flex items-center justify-between border-b">
          <div className="flex items-center gap-3">
            <User className="text-primary" />
            <div>
              <div className="font-semibold">{selectedChat.name}</div>
              <div className="text-sm text-gray-500">Online</div>
            </div>
          </div>
          <div className="text-sm text-gray-600">
            Logged in as <span className="font-semibold text-primary">{user?.fullName}</span>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 p-4 overflow-y-auto bg-gray-50 space-y-2">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`max-w-xs px-4 py-2 rounded-xl text-sm ${
                msg.from === "me"
                  ? "ml-auto bg-blue-500 text-white"
                  : "mr-auto bg-gray-200"
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="p-4 border-t bg-white flex items-center gap-2">
          <input
            type="text"
            placeholder="Type a message"
            className="flex-1 input input-bordered"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <button className="btn btn-primary" onClick={handleSend}>
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
