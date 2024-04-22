import { Dropdown } from "@/app/shared/components/ui/dropdown/dropdown";

type Props = {
  list: { name: string; id: string }[];
  value: string | null;
  onChange: (id: string | null) => void;
};

export const Selector = ({ list, value, onChange }: Props) => {
  const onItemClick = (id: string) => {
    // if (value === id) {
    //   onChange(null);
    // } else onChange(id);
    onChange(id);
  };
  const current = list.find(l => l.id === value);
  const itemsList = list.map(l => {
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
  });
  return <Dropdown itemsList={itemsList}>{current ? current.name : "---"}</Dropdown>;
};
