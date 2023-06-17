import BackNavigation from "~/components/back-navigation";
import CreatedDate from "~/components/created-date";

interface HistoryDetailsEntryItem {
  name: string;
  count: number;
}

interface HistoryDetailsEntryProps {
  category: string;
  items: HistoryDetailsEntryItem[];
}

function HistoryDetailsEntry({ category, items }: HistoryDetailsEntryProps) {
  return (
    <div className="mb-16">
      <h2 className="mb-4 text-lg font-semibold">{category}</h2>
      <div className="flex items-start gap-5">
        {items.map(({ name, count }) => (
          <div
            key={name}
            className="flex w-[182px] justify-between rounded-xl bg-white px-4 py-3 text-base font-semibold shadow-[0_2px_12px_2px_rgba(0,0,0,0.05)]"
          >
            {name}
            <span className="shrink-0 text-sm text-primary">{count} pcs</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const historyDetails: HistoryDetailsEntryProps[] = [
  {
    category: "Cookies",
    items: [
      { name: " Cookies Chocolate", count: 3 },
      { name: "Doris Truffle", count: 1 },
    ],
  },
  {
    category: "Beverages",
    items: [
      {
        name: "2 x soft drink 1.5 l",
        count: 2,
      },
      {
        name: "Beer",
        count: 8,
      },
      {
        name: "Cider",
        count: 6,
      },
    ],
  },
];

export default function HistoryDetails() {
  return (
    <main className="min-h-screen w-3/4 py-9 pl-44">
      <header className="mb-9">
        <BackNavigation href="/history" />
      </header>
      <div className="mb-14">
        <h1 className="mb-5 text-2xl font-bold">Eero’s farewell party</h1>
        <CreatedDate date="Mon 24.8.2020" />
      </div>
      {historyDetails.map((detail) => (
        <HistoryDetailsEntry key={detail.category} {...detail} />
      ))}
    </main>
  );
}
