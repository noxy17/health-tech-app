import ChatPanel from "../components/ChatPanel";
import { useNavigate } from "react-router-dom";

export default function Chat() {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col">

      {/* Top Bar */}
      <div className="flex items-center justify-between p-4 bg-white shadow">
        <button
          onClick={() => navigate("/")}
          className="text-blue-500"
        >
          ⬅ Back
        </button>

        <h2 className="font-semibold">MindSync Chat</h2>
      </div>

      {/* Chat UI */}
      <ChatPanel />
    </div>
  );
}