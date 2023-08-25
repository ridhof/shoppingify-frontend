"use client";

import Add from "@material-design-icons/svg/filled/add.svg";
import { useAtom } from "jotai";

import { itemDetailAtom, listDrawerAtom } from "~/atoms";
import type { ItemDetailInterface } from "~/atoms";

interface CategoryListProps {
  category: string;
  items: ItemDetailInterface[];
}

function CategoryList({ category, items }: CategoryListProps) {
  const [, setListDrawer] = useAtom(listDrawerAtom);
  const [, setItemDetail] = useAtom(itemDetailAtom);
  return (
    <section key={category} className="mb-12">
      <h3 className="mb-4 text-lg font-medium">{category}</h3>
      <div className="grid grid-cols-[repeat(auto-fill,_minmax(0,182px))] gap-5">
        {items.map((item) => (
          <button
            key={item.name}
            onClick={() => {
              setItemDetail(item);
              setListDrawer((drawer) => ({ ...drawer, listId: "item_details" }));
            }}
          >
            <div
              key={item.name}
              className="flex h-fit items-start justify-between rounded-xl bg-white p-4 text-base font-medium shadow-[0_2px_12px_2px_rgba(0,0,0,0.05)]"
            >
              <span className="text-left">{item.name}</span>
              <button
                // onClick={() => 
                //   console.log('a')
                // }
              >
                <Add />
              </button>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}

export default CategoryList;
