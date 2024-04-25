import { TextField } from "@/app/components/inputs/text-field";
import { useCart } from "@/shared/hooks";
import { useEffect, useState } from "react";

export const CartForm = () => {
  const cart = useCart();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  useEffect(() => {
    setName(cart.getName());
    setPhone(cart.getPhone());
    setMessage(cart.getMessage());
  }, []);
  const handleChangeName = (value: string) => {
    setName(value);
    cart.setName(value);
  };
  const handleChangePhone = (value: string) => {
    setPhone(value);
    cart.setPhone(value);
  };
  const handleChangeMessage = (value: string) => {
    setMessage(value);
    cart.setMessage(value);
  };
  return (
    <div className="flex flex-col gap-2 mb-3">
      <TextField placeholder="Your Name" value={name} onChange={e => handleChangeName(e.target.value)} />
      <TextField placeholder="Phone number" value={phone} onChange={e => handleChangePhone(e.target.value)} />
      <TextField placeholder="Message" value={message} onChange={e => handleChangeMessage(e.target.value)} />
    </div>
  );
};
