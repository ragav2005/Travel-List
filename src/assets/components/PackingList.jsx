import { useState } from "react";
import Items from "./Items";

export default function PackingList({ items, onDelete, onChecked, onReset }) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;
  if (sortBy === "input") sortedItems = items;

  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Items
            key={item.id}
            item={item}
            onDelete={onDelete}
            onChecked={onChecked}
          />
        ))}
      </ul>

      <div className="actions">
        <select
          name="Sort"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="input">Sort By Input</option>
          <option value="description">Sort By Name</option>
          <option value="packed">Sort By Packed status</option>
        </select>
        <button onClick={onReset}>reset</button>
      </div>
    </div>
  );
}
