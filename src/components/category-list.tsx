"use client";

import { useAtom } from "jotai";

import { listDrawerAtom } from "~/atoms";

interface CategoryListProps {
  category: string;
  items: string[];
}

function CategoryList({ category, items }: CategoryListProps) {
  const [, setListDrawer] = useAtom(listDrawerAtom);
  return (
    <section key={category} className="mb-12">
      <h3 className="mb-4 text-lg font-medium">{category}</h3>
      <div className="grid grid-cols-[repeat(auto-fill,_minmax(0,182px))] gap-5">
        {items.map((item) => (
          <button
            key={item}
            onClick={() => 
              setListDrawer((drawer) => ({ ...drawer, listId: "item_details" }))
            }
          >
            <div
              key={item}
              className="flex h-fit items-start justify-between rounded-xl bg-white p-4 text-base font-medium shadow-[0_2px_12px_2px_rgba(0,0,0,0.05)]"
            >
              <span className="text-left">{item}</span>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}

export default CategoryList;
