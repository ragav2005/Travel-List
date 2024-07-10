export default function Items({ item, onDelete, onChecked }) {
  return (
    <li>
      <div
        className="text"
        style={item.packed ? { textDecoration: "line-through" } : {}}
      >
        <input
          type="checkbox"
          checked={item.packed}
          onChange={() => onChecked(item.id)}
        />
        <span>{item.quantity}</span>
        <span>{item.description}</span>
      </div>
      <span
        style={{ fontSize: "18px", cursor: "pointer" }}
        onClick={() => onDelete(item.id)}
      >
        ❌
      </span>
    </li>
  );
}
