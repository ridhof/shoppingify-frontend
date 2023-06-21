"use client";

import Button from "./ui/button";
import Combobox from "./form/combobox";
import Input from "./form/input";
import TextArea from "./form/text-area";

const categories = [
  { id: 1, name: "Fruit and vegetables" },
  { id: 2, name: "Meat and Fish" },
  { id: 3, name: "Beverages" },
];

function AddItem() {
  return (
    <section className="absolute right-0 top-0 h-screen w-1/5">
      <div className="pl-12 pr-8 pt-11">
        <h1 className="mb-8 text-2xl font-medium">Add a new item</h1>
        <form>
          <Input
            label="Name"
            type="text"
            id="name"
            name="name"
            placeholder="Enter a name"
          />
          <TextArea
            label=" Note (optional)"
            placeholder="Enter a note"
            rows={3}
          />
          <Input
            label="Image (optional)"
            type="text"
            id="image"
            name="image"
            placeholder="Enter a url"
          />
          <Combobox
            placeholder="Enter a category"
            label="Category"
            itemToString={(item) => (item ? item.name : "")}
            items={categories}
          />
        </form>
      </div>
      <div className="absolute bottom-0 flex w-full items-center justify-center gap-5 pb-8">
        <Button variant="secondary">cancel</Button>
        <Button variant="primary">Save</Button>
      </div>
    </section>
  );
}

export default AddItem;
