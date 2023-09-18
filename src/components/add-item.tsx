"use client";

import { z } from "zod";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { FetchCategorySearch } from "~/api/category";
import { listDrawerAtom } from "~/atoms";
import { SelectOption } from "~/types/primitive";

import Button from "./ui/button";
import Combobox from "./form/combobox";
import Input from "./form/input";
import TextArea from "./form/text-area";

const FormSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  note: z.string().optional(),
  image: z
    .string()
    .min(1, { message: "Image is required" })
    .regex(
      /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/,
      { message: "Image URL invalid" },
    ),
  category: z.number(),
});

type FormInput = z.infer<typeof FormSchema>;

function AddItem() {
  const [, setListDrawer] = useAtom(listDrawerAtom);
  const [getCategoryList, setCategoryList] = useState<SelectOption[]>([]);
  const [getCategoryQuery, setCategoryQuery]= useState("");

  const { category, isLoading, isError } = FetchCategorySearch(getCategoryQuery);
  useEffect(() => {
    if (!isLoading) {
      if (isError || !category || !category?.data) setCategoryList([]);
      else setCategoryList(category?.data?.map((row) => ({ ...row, name: row.namaKategori })));
    }
  }, [category, isLoading, isError]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      note: "",
      image: "",
      category: 0,
    },
  });

  return (
    <section className="absolute right-0 top-0 h-screen w-1/4">
      <div className="pl-12 pr-8 pt-11">
        <h1 className="mb-8 text-2xl font-medium">Add a new item</h1>
        <form onSubmit={handleSubmit((d) => console.log(d))} id="add-item-form">
          <Input
            label="Name"
            type="text"
            id="name"
            placeholder="Enter a name"
            {...register("name", { required: true })}
            error={errors?.name?.message}
          />
          <TextArea
            label=" Note (optional)"
            placeholder="Enter a note"
            id="note"
            {...register("note")}
            rows={3}
            error={errors?.note?.message}
          />
          <Input
            label="Image (optional)"
            type="text"
            id="image"
            {...register("image")}
            placeholder="Enter a url"
            error={errors?.image?.message}
          />
          <Combobox
            placeholder="Enter a category"
            label="Category"
            items={getCategoryList}
            {...register("category", { required: true })}
            error={errors?.category?.message}
            onInputChange={(query: string) => setCategoryQuery(query)}
          />
        </form>
      </div>
      <div className="absolute bottom-0 flex w-full items-center justify-center gap-5 pb-8">
        <Button
          onClick={() =>
            setListDrawer((drawer) => ({ ...drawer, listId: "shopping_list" }))
          }
          variant="secondary"
        >
          cancel
        </Button>
        <Button type="submit" form="add-item-form" variant="primary">
          Save
        </Button>
      </div>
    </section>
  );
}

export default AddItem;
