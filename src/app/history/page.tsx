import HistoryList from "~/components/history-list";

const shoppingHistory = [
  {
    date: "August 2020",
    items: [
      {
        name: "Grocery List",
        date: "Mon, 27.8.2020",
        status: "completed",
      },
      {
        name: "Eero's farewell party",
        date: "Mon, 24.8.2020",
        status: "completed",
      },
    ],
  },
  {
    date: "July 2020",
    items: [
      {
        name: "Board game week 2",
        date: "Mon, 27.7.2020",
        status: "completed",
      },
      {
        name: "Grocery List",
        date: "Mon, 16.7.2020",
        status: "canceled",
      },
    ],
  },
];

export default function History() {
  return (
    <main className="min-h-screen w-3/4 py-9 pl-44">
      <header className="mb-10">
        <h1 className="text-2xl font-bold text-gray-600">Shopping history</h1>
      </header>
      {shoppingHistory.map(({ date, items }) => (
        <HistoryList key={date} date={date} items={items} />
      ))}
    </main>
  );
}
