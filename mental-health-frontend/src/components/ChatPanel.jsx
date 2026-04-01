import { useState, useRef, useEffect } from "react";
import axios from "axios";
import MessageBubble from "./MessageBubble";
import MoodSelector from "./MoodSelector";

export default function ChatPanel() {
  const [messages, setMessages] = useState([
    { text: "Hi! I'm here for you 💙 How are you feeling today?", sender: "bot" }
  ]);
  const [input, setInput] = useState("");
  const [mood, setMood] = useState(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input) return;

    const userMsg = { text: input, sender: "user" };
    setMessages(prev => [...prev, userMsg]);

    try {
      const res = await axios.post("http://127.0.0.1:5000/chat", {
        message: input,
        mood: mood
      });

      const botMsg = { text: res.data.reply, sender: "bot" };
      setMessages(prev => [...prev, botMsg]);

    } catch (err) {
      setMessages(prev => [...prev, {
        text: "Server not connected 😢",
        sender: "bot"
      }]);
    }

    setInput("");
  };

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-blue-100 to-purple-200">

      {/* Header */}
      <div className="p-4 text-center text-xl font-semibold text-gray-700">
        🧠 MindSync AI
      </div>

      {/* Mood Selector */}
      <MoodSelector setMood={setMood} />

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto px-4 space-y-3">
        {messages.map((msg, i) => (
          <MessageBubble key={i} text={msg.text} sender={msg.sender} />
        ))}
        <div ref={bottomRef}></div>
      </div>

      {/* Input Box */}
      <div className="p-4 flex gap-2 bg-white shadow-md">
        <input
          className="flex-1 p-2 border rounded-lg outline-none"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your thoughts..."
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button
          onClick={sendMessage}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Send
        </button>
      </div>
    </div>
  );
}