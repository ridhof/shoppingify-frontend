import { atom } from "jotai";

interface ListDrawer {
  listId: "shopping_list" | "item_details" | "add_item";
  isOpen: boolean;
}

const listDrawerAtom = atom<ListDrawer>({
  listId: "shopping_list",
  isOpen: true,
});

interface ItemDetailInterface {
  imageUrl: string;
  name: string | null;
  categoryId: number | null;
  categoryName: string | null;
  note: string | null;
}

const itemDetailAtom = atom<ItemDetailInterface>({
  imageUrl: "/images/avocado.jpeg",
  name: null,
  categoryId: null,
  categoryName: null,
  note: null,
});

export { itemDetailAtom, listDrawerAtom };
export type { ItemDetailInterface };
