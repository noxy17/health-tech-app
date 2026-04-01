const moods = ["😊", "😔", "😡", "😰", "😴"];

export default function MoodSelector({ setMood }) {
  return (
    <div className="flex justify-center gap-4 p-2">
      {moods.map((mood, i) => (
        <button
          key={i}
          onClick={() => setMood(mood)}
          className="text-2xl hover:scale-110 transition"
        >
          {mood}
        </button>
      ))}
    </div>
  );
}