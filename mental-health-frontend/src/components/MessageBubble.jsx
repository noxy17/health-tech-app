export default function MessageBubble({ text, sender }) {
  return (
    <div className={`flex ${sender === "user" ? "justify-end" : "justify-start"}`}>
      <div
        className={`px-4 py-2 rounded-2xl max-w-xs shadow 
        ${sender === "user" 
          ? "bg-blue-500 text-white rounded-br-none" 
          : "bg-white text-gray-800 rounded-bl-none"}`}
      >
        {text}
      </div>
    </div>
  );
}