import { useState } from "react";

interface I_Props {
  list: { name: string; id: string }[];
  value: string | null;
  onChange: (id: string | null) => void;
  title?: string;
}

export const Selector = ({ list, value, onChange, title }: I_Props) => {
  const [open, setOpen] = useState(false);
  const onItemClick = (id: string) => {
    // if (value === id) {
    //   onChange(null);
    // } else onChange(id);
    onChange(id);
    setOpen(false);
  };
  const current = list.find(l => l.id === value);
  return (
    <div className="mt-5 relative inline-block text-left w-56">
      {title && <h3 className="p-1">{title}</h3>}
      <div className="min-w-full">
        <button
          type="button"
          className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          onClick={() => setOpen(o => !o)}
        >
          {current ? current.name : "---"}
          <svg
            className="-mr-1 h-5 w-5 text-gray-400 ml-auto"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {open && (
        <div
          className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex={-1}
        >
          <div className="py-1" role="none">
            {list.map(l => {
              const isActive = current && current.id === l.id;
              return (
                <div
                  key={l.id}
                  className="text-gray-700 block px-4 py-2 text-sm"
                  style={isActive ? { backgroundColor: "#eee" } : {}}
                  role="menuitem"
                  tabIndex={-1}
                  id={"menu-item-" + l.id}
                  onClick={() => onItemClick(l.id)}
                >
                  {l.name}
                </div>
              );
            })}
            {/* <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-0">
            Account settings
          </a>
          <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-1">
            Support
          </a>
          <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-2">
            License
          </a> */}
          </div>
        </div>
      )}
    </div>
  );
};
