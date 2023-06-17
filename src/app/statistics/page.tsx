import Progress from "~/components/ui/progress";

interface TopProgressPorps {
  name: string;
  percentage: number;
  color: string;
}

function TopProgress({ name, percentage, color }: TopProgressPorps) {
  return (
    <div className="mb-7 w-full">
      <div className="mb-3 flex items-center justify-between text-sm font-semibold">
        {name}
        <span className="text-lg">{percentage}%</span>
      </div>
      <Progress percentage={percentage} color={color} />
    </div>
  );
}

const topItems = [
  { name: "Banana", percentage: 12 },
  { name: "Rice", percentage: 10 },
  { name: "Chiken 1kg", percentage: 8 },
];

const topCategories = [
  { name: "Fruit and Vegetables", percentage: 23 },
  { name: "Meat and Fish", percentage: 14 },
  { name: "Pets", percentage: 11 },
];

export default function Statistics() {
  return (
    <main className="min-h-screen w-3/4 py-12 pl-44">
      <div className="flex gap-20">
        <div className="w-1/3">
          <h2 className="mb-9 text-2xl font-semibold">Top Items</h2>
          {topItems.map(({ name, percentage }) => (
            <TopProgress
              key={name}
              color="primary"
              name={name}
              percentage={percentage}
            />
          ))}
        </div>
        <div className="w-1/3">
          <h2 className="mb-9 text-2xl  font-semibold">Top Categories</h2>
          {topCategories.map(({ name, percentage }) => (
            <TopProgress
              key={name}
              color="light-blue"
              name={name}
              percentage={percentage}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
