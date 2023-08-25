import Image from "next/image";
import { useAtom } from "jotai";

import { itemDetailAtom, listDrawerAtom } from "~/atoms";

import BackNavigation from "./back-navigation";
import Button from "./ui/button";

function ItemDetails() {
  const [, setListDrawer] = useAtom(listDrawerAtom);
  const [itemDetail] = useAtom(itemDetailAtom);

  return (
    <section className="absolute right-0 top-0 h-screen w-1/4 overflow-y-scroll bg-white">
      <div className="pl-12 pr-8 pt-7">
        <BackNavigation
          href="#"
          onClick={() =>
            setListDrawer((drawer) => ({ ...drawer, listId: "shopping_list" }))
          }
        />
        <div className="relative mb-14 mt-9 aspect-[3/2] w-full overflow-hidden rounded-3xl">
          <Image
            src={itemDetail.imageUrl}
            alt={itemDetail.name || ""}
            fill
            className="object-cover"
          />
        </div>
        <div className="mb-8">
          <p className="mb-3 text-xs font-medium text-gray-400">name</p>
          <h2 className="text-2xl font-medium">{ itemDetail.name }</h2>
        </div>
        <div className="mb-8">
          <p className="mb-3 text-xs font-medium text-gray-400">category</p>
          <p className="text-lg font-medium">{ itemDetail.categoryName }</p>
        </div>
        <div className="mb-8">
          <p className="mb-3 text-xs font-medium text-gray-400">note</p>
          <p className="text-lg font-medium">
            { itemDetail.note }
          </p>
        </div>
      </div>
      <div className="absolute bottom-0 flex w-full items-center justify-center gap-5 pb-8">
        <Button variant="secondary">delete</Button>
        <Button variant="primary">Add to list</Button>
      </div>
    </section>
  );
}

export default ItemDetails;
