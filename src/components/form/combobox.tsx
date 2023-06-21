"use client";

import Downshift, { type DownshiftProps } from "downshift";
import ChevronLeft from "@material-design-icons/svg/filled/chevron_right.svg";
import Close from "@material-design-icons/svg/filled/close.svg";

type ComboboxProps<T extends { id: number; name: string }> = {
  label: string;
  items: T[];
} & React.HtmlHTMLAttributes<"input"> &
  DownshiftProps<T>;

/**
 * TODO:
 * 1. implement useCombobox
 * 2. register to react-hook-form
 */
function Combobox<T extends { id: number; name: string }>({
  id,
  label,
  items,
  placeholder,
  ...props
}: ComboboxProps<T>) {
  return (
    <Downshift {...props}>
      {({ getInputProps, getItemProps, isOpen, selectedItem }) => (
        <div>
          <div className="relative w-full">
            <label htmlFor={id} className="mb-1 block text-sm font-medium">
              {label}
            </label>
            <input
              {...getInputProps({ id, placeholder, isOpen })}
              className="w-full rounded-xl border-0 px-4 py-5 text-sm font-medium ring-2 ring-gray-300 placeholder:text-sm placeholder:font-medium placeholder:text-gray-300 focus:ring-2 focus:ring-primary"
            />
            {selectedItem ? (
              <button className="absolute right-3 top-[50%]">
                <Close fill="#828282" />
              </button>
            ) : (
              <button className="absolute right-2 top-[50%]">
                <ChevronLeft fill="#828282" className="h-14 w-14 rotate-90" />
              </button>
            )}
          </div>
          {isOpen && (
            <ol className="mt-3 rounded-xl border-[1px] border-[#E0E0E0] bg-white p-2">
              {items.map((item, index) => (
                <li
                  key={item.id}
                  {...getItemProps({
                    item,
                    index,
                    isSelected: selectedItem === item,
                  })}
                  className="cursor-pointer rounded-xl px-6 py-3 text-lg font-medium text-gray-500 hover:bg-gray-200 hover:text-gray-600"
                >
                  {item.name}
                </li>
              ))}
            </ol>
          )}
        </div>
      )}
    </Downshift>
  );
}

export default Combobox;
