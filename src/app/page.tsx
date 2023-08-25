import CategoryList from "~/components/category-list";
import SearchBar from "~/components/search-bar";

const categoryLists = [
  {
    category: "Fruit and vegetables",
    items: [
      {
        imageUrl: "/images/avocado.jpeg",
        name: "Avocado",
        categoryId: null,
        categoryName: "Fruit and vegetables",
        note: `
          Nutrient-dense foods are those that provide substantial amounts of
          vitamins, minerals and other nutrients with relatively few calories.
          One-third of a medium avocado (50 g) has 80 calories and contributes
          nearly 20 vitamins and minerals, making it a great nutrient-dense
          food choice.
        `,
      },
      {
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg",
        name: "Banana",
        categoryId: null,
        categoryName: "Fruit and vegetables",
        note: `
          A banana is a long, curved fruit with a thick skin and soft, sweet 
          flesh. It is typically yellow in color, but can also be green or red. 
          Bananas are a good source of potassium, vitamin C, and fiber. They 
          can be eaten fresh, cooked, or processed into products such as 
          banana bread and banana chips.
        `,
      },
    ],
  },
  {
    category: "Meat and Fish",
    items: [
      {
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/eb/Free_range_chicken_flock.jpg",
        name: "Chicken 1kg",
        categoryId: null,
        categoryName: "Meat and Fish",
        note: `
          1kg of chicken is about the same weight as a large chicken breast 
          or two whole chicken legs. It is a good source of protein and other 
          nutrients, such as niacin, phosphorus, and selenium. Chicken can be 
          cooked in many different ways, such as roasted, grilled, or fried.
        `,
      },
      {
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/1/18/Salmon_Fish.JPG",
        name: "Salmon 1kg",
        categoryId: null,
        categoryName: "Meat and Fish",
        note: `
          A 1kg salmon is a large fish that can grow up to 2 meters long. 
          It is typically pink in color, but can also be orange or silver. 
          Salmon is a good source of protein, omega-3 fatty acids, and other 
          nutrients. It can be cooked in many different ways, such as grilled, 
          baked, or smoked.
        `,
      },
    ],
  },
];

export default function Items() {
  return (
    <main className="min-h-screen w-3/4 bg-gray-100 py-9 px-36">
      <header className=" mb-14 flex justify-between">
        <h1 className="text-2xl font-medium leading-8">
          <span className="font-bold text-primary">Shoppingify</span> allows you
          take your
          <br />
          shopping list wherever you go
        </h1>
        <SearchBar />
      </header>
      {categoryLists.map((list) => (
        <CategoryList key={list.category} {...list} />
      ))}
    </main>
  );
}
