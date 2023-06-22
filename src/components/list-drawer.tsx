"use client";

import { useAtom } from "jotai";
import { listDrawerAtom } from "~/atoms";

import AddItem from "~/components/add-item";
import ItemDetails from "~/components/item-details";
import ShoppingList from "~/components/shopping-list";

function ListDrawer() {
  const [{ listId, isOpen }] = useAtom(listDrawerAtom);

  if (!isOpen) return null;

  if (listId === 0) {
    return <ShoppingList />;
  }
  if (listId === 1) {
    return <ItemDetails />;
  }
  if (listId === 2) {
    return <AddItem />;
  }
}

export default ListDrawer;
