export default function Stats({ items }) {
  if (items.length === 0)
    return (
      <footer className="stats">
        <p>Start adding items to your list 🚀.</p>
      </footer>
    );
  const totalItems = items.length;
  const totalPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((totalPacked / totalItems) * 100);
  return (
    <footer className="stats">
      {percentage === 100
        ? "✈️You are ready to go. 🎉"
        : ` The total items in list is ${totalItems} and you packed ${percentage} % (
      ${totalPacked}) items.`}
    </footer>
  );
}
