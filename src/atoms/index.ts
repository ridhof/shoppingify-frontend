import { atom } from "jotai";

interface ListDrawer {
  listId: "shopping_list" | "item_details" | "add_item";
  isOpen: boolean;
}

const listDrawerAtom = atom<ListDrawer>({
  listId: "shopping_list",
  isOpen: true,
});

export { listDrawerAtom };
