"use client";

import Image from "next/image";
import { useAtom } from "jotai";

import Add from "@material-design-icons/svg/filled/add.svg";
import Edit from "@material-design-icons/svg/filled/edit.svg";

import { listDrawerAtom } from "~/atoms";
// @ts-ignore
import Bottle from "~/../public/images/bottle.svg?url";

function ShoppingList() {
  const [, setListDrawer] = useAtom(listDrawerAtom);

  return (
    <section className="absolute right-0 top-0 h-screen w-1/4 bg-secondary">
      <div className="pl-12 pr-8 pt-11">
        <header className="relative mb-11 flex flex-col gap-3 rounded-3xl bg-maroon py-4 pl-28">
          <Image
            src={Bottle.src}
            alt="Bottle"
            width={80}
            height={200}
            className="absolute left-3 top-0 -translate-y-5"
          />
          <span className="text-base font-bold leading-5 text-white">
            Didn’t find what you need?
          </span>
          <button
            onClick={() => setListDrawer({ listId: "add_item", isOpen: true })}
            className="w-[120px] rounded-xl bg-white px-7 py-3 text-sm font-bold text-gray-600"
          >
            Add item
          </button>
        </header>
        <div className="mb-10 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-600">Shopping List</h2>
          <Edit />
          <Add className="hidden" />
        </div>
        <div className="mb-12">
          <p className="mb-6 text-sm font-medium text-gray-500">
            Fruit and Vegetables
          </p>
          <div className="mb-6 flex items-center justify-between">
            <span className="text-lg font-medium">Avocado</span>
            <button className="rounded-3xl border-2 border-primary px-5 py-2 text-xs text-primary">
              3pcs
            </button>
          </div>
          <div className="mb-6 flex items-center justify-between">
            <span className="text-lg font-medium">Pre-cooked corn 450g</span>
            <button className="rounded-3xl border-2 border-primary px-5 py-2 text-xs text-primary">
              1pcs
            </button>
          </div>
        </div>
        <div className="mb-12">
          <p className="mb-6 text-sm font-medium text-gray-500">
            Meat and Fish
          </p>
          <div className="mb-6 flex items-center justify-between">
            <span className="text-lg font-medium">Chicken 1kg</span>
            <button className="rounded-3xl border-2 border-primary px-5 py-2 text-xs text-primary">
              3pcs
            </button>
          </div>
          <div className="mb-6 flex items-center justify-between">
            <span className="text-lg font-medium">Pork fillets 450g</span>
            <button className="rounded-3xl border-2 border-primary px-5 py-2 text-xs text-primary">
              1pcs
            </button>
          </div>
          <div className="mb-6 flex items-center justify-between">
            <span className="text-lg font-medium">Salmon 1kg</span>
            <button className="rounded-3xl border-2 border-primary px-5 py-2 text-xs text-primary">
              1pcs
            </button>
          </div>
          <div className="mb-6 flex items-center justify-between">
            <span className="text-lg font-medium">Chicken leg box</span>
            <button className="rounded-3xl border-2 border-primary px-5 py-2 text-xs text-primary">
              5pcs
            </button>
          </div>
        </div>
      </div>
      <footer className="absolute bottom-0 w-full bg-white px-10 py-9">
        <div className="relative w-full">
          <button className="absolute right-0 h-full rounded-xl bg-primary px-6 text-base font-bold text-white">
            Save
          </button>
          <input
            className="h-16 w-full rounded-xl border-0 bg-white px-4 py-5 ring-2 ring-primary placeholder:text-sm placeholder:font-medium placeholder:text-gray-300 focus:ring-2 focus:ring-primary"
            type="text"
            name="shopping-list"
            placeholder="Enter a name"
          />
        </div>
      </footer>
    </section>
  );
}

export default ShoppingList;
