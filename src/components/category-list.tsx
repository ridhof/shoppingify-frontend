"use client";

import Add from "@material-design-icons/svg/filled/add.svg";

interface CategoryListProps {
  category: string;
  items: string[];
}

function CategoryList({ category, items }: CategoryListProps) {
  return (
    <section key={category} className="mb-12">
      <h3 className="mb-4 text-lg font-medium">{category}</h3>
      <div className="grid grid-cols-[repeat(auto-fill,_minmax(0,182px))] gap-5">
        {items.map((item) => (
          <div
            key={item}
            className="flex h-fit justify-between rounded-xl bg-white p-4 text-base font-medium shadow-[0_2px_12px_2px_rgba(0,0,0,0.05)]"
          >
            <span>{item}</span>
            <Add className="fill-gray-400" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default CategoryList;
