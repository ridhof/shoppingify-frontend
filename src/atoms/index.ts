import { atom } from "jotai";

const listDrawerAtom = atom({
  listId: 0,
  isOpen: true,
});

export { listDrawerAtom };
