export default function Button({ label, variant = "primary", disabled, onClick }) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`px-4 py-2 rounded ${
        variant === "primary"
          ? "bg-blue-500 text-white"
          : "bg-gray-500 text-white"
      } ${disabled ? "opacity-50" : ""}`}
    >
      {label}
    </button>
  );
}