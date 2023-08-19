import CategoryList from "~/components/category-list";
import SearchBar from "~/components/search-bar";

const categoryLists = [
  {
    category: "Fruit and vegetables",
    items: [
      "Avocado",
      "Banana",
      "Bunch of carrots 5pcs",
      "Chicken 1kg",
      "Pre-cooked corn 450gr",
      "Mandarin Nadorcott",
      "Piele De Sapo Melon",
      "Watermelon",
    ],
  },
  {
    category: "Meat and Fish",
    items: [
      "Chicken leg box",
      "Chicken 1kg",
      "Pork fillets 450kg",
      "Salmon 1kg",
    ],
  },
];

export default function Items() {
  return (
    <main className="min-h-screen w-3/4 bg-gray-100 py-9 pl-44">
      <header className=" mb-14 flex justify-between">
        <h1 className="text-2xl font-medium leading-8">
          <span className="font-bold text-primary">Shoppingify</span> allows you
          take your
          <br />
          shopping list wherever you go
        </h1>
        <SearchBar />
      </header>
      {/* {categoryLists.map((list) => (
        <CategoryList key={list.category} {...list} />
      ))} */}
    </main>
  );
}
