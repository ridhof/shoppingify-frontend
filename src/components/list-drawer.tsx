"use client";

import { useAtom } from "jotai";
import { listDrawerAtom } from "~/atoms";

import AddItem from "~/components/add-item";
import ItemDetails from "~/components/item-details";
import ShoppingList from "~/components/shopping-list";

function ListDrawer() {
  const [{ listId, isOpen }] = useAtom(listDrawerAtom);

  if (!isOpen) return null;

  if (listId === "shopping_list") {
    return <ShoppingList />;
  }
  if (listId === "item_details") {
    return <ItemDetails />;
  }
  if (listId === "add_item") {
    return <AddItem />;
  }
}

export default ListDrawer;
