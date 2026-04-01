import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-200 to-purple-300">

      <h1 className="text-4xl font-bold mb-4">🧠 MindSync AI</h1>
      <p className="text-gray-700 mb-6 text-center max-w-md">
        Your personal mental health companion. Talk, reflect, and feel better 💙
      </p>

      <button
        onClick={() => navigate("/chat")}
        className="px-6 py-3 bg-blue-500 text-white rounded-xl shadow hover:bg-blue-600 transition"
      >
        Start Chatting 💬
      </button>
    </div>
  );
}