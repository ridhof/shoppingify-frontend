"use client";

import { useCombobox } from "downshift";
import ChevronLeft from "@material-design-icons/svg/filled/chevron_right.svg";
import Close from "@material-design-icons/svg/filled/close.svg";
import clsx from "clsx";

type ComboboxProps<T extends { id: number; name: string }> = {
  label: string;
  items: T[];
  error: string | undefined;
  onInputChange: (query: string) => void;
} & React.HtmlHTMLAttributes<"input">;

/**
 * TODO:
 * 1. implement useCombobox (done)
 * 2. register to react-hook-form
 * 3. integrate to react-query
 */
function Combobox<T extends { id: number; name: string }>({
  label,
  items,
  onInputChange,
}: ComboboxProps<T>) {
  const {
    isOpen,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getInputProps,
    getItemProps,
    highlightedIndex,
    selectedItem,
  } = useCombobox({
    items: items,
    onInputValueChange({inputValue}) {
      onInputChange(inputValue || "");
    },
    itemToString(item) {
      return item ? item.name : "";
    },
  });

  return (
    <div>
      <div className="relative w-full">
        <label className="mb-1 block text-sm font-medium" {...getLabelProps()}>
          {label}
        </label>
        <input
          {...getInputProps()}
          className="w-full rounded-xl border-0 px-4 py-5 text-sm font-medium ring-2 ring-gray-300 placeholder:text-sm placeholder:font-medium placeholder:text-gray-300 focus:ring-2 focus:ring-primary"
        />
        <div
          className="absolute right-2 top-[50%] cursor-pointer"
          {...getToggleButtonProps()}
        >
          {isOpen ? (
            <Close fill="#828282" />
          ) : (
            <ChevronLeft fill="#828282" className="rotate-90" />
          )}
        </div>
      </div>
      <ul
        className={clsx(
          { hidden: !isOpen && items.length },
          "mt-3 max-h-96 overflow-y-auto rounded-xl border-[1px] border-[#E0E0E0] bg-white p-2",
        )}
        {...getMenuProps()}
      >
        {isOpen &&
          items.map((item, index) => (
            <li
              key={`${item.name}-${index}`}
              {...getItemProps({ item, index })}
              className={clsx(
                {
                  "bg-gray-100 text-gray-500": highlightedIndex === index,
                  "bg-gray-200 text-gray-600": selectedItem === item,
                },
                "cursor-pointer rounded-xl px-6 py-3 text-lg font-medium text-gray-500 hover:bg-gray-200",
              )}
            >
              {item.name}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Combobox;
