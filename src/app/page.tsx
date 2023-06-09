import SearchBar from "~/components/search-bar";

export default function Items() {
  return (
    <main className="bg-gray-100 py-9 pl-44">
      <header className="flex gap-16">
        <h1 className="text-2xl font-medium leading-8">
          <span className="font-bold text-primary">Shoppingify</span> allows you
          take your
          <br />
          shopping list wherever you go
        </h1>
        <SearchBar />
      </header>
    </main>
  );
}
