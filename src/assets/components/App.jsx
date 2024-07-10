import { useState } from "react";
import Form from "./Form";
import Logo from "./Logo";
import PackingList from "./PackingList";
import Stats from "./Stats";

export default function App() {
  const [items, setItems] = useState([
    { id: 1, description: "Charger", quantity: 1, packed: true },
    { id: 2, description: "Bag", quantity: 1, packed: false },
    { id: 3, description: "Shirts", quantity: 5, packed: true },
    { id: 4, description: "Shorts", quantity: 5, packed: false },
  ]);
  const handleChecked = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  const handleDelete = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };
  const handleReset = () => {
    const confirm = window.confirm("Are you sure to detele all the items ?");
    if (confirm) setItems([]);
  };
  return (
    <div className="app">
      <Logo></Logo>
      <Form onAddItems={setItems}></Form>
      <PackingList
        items={items}
        onDelete={handleDelete}
        onChecked={handleChecked}
        onReset={handleReset}
      ></PackingList>
      <Stats items={items}></Stats>
    </div>
  );
}
