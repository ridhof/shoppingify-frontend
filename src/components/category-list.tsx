"use client";

import Add from "@material-design-icons/svg/filled/add.svg";
import { useAtom } from "jotai";
import Image from "next/image";

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
              <button
                // onClick={() => 
                //   console.log('a')
                // }
              >
                <Image
                  key={item}
                  src={Add}
                  alt="add icon"
                  className="w-6 h-6 text-black"
                />
              </button>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}

export default CategoryList;
