import { ForwardedRef, HTMLAttributes, ReactNode, forwardRef } from "react";

export interface I_Props extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export const DefaultButton = forwardRef(({ children, ...props }: I_Props, ref: ForwardedRef<HTMLButtonElement>) => {
  return (
    <button
      type="button"
      className="hidden md:block w-fit p-1 h-10 rounded-lg bg-gray-100 border border-gray-200 flex justify-center items-center"
    >
      {children}
    </button>
  );
});
