import { DetailedHTMLProps, ForwardedRef, HTMLAttributes, InputHTMLAttributes, forwardRef } from "react";

export interface I_Props extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  error?: string;
}
export const DefaultInput = forwardRef(({ error, ...props }: I_Props, ref: ForwardedRef<HTMLInputElement>) => {
  return (
    <>
      <input
        ref={ref}
        // type="search"
        className="pl-10 pr-2 h-10 py-1 rounded-lg border border-gray-200 focus:border-gray-300 focus:outline-none focus:shadow-inner leading-none"
        // placeholder="Search"
        {...(props as HTMLAttributes<HTMLInputElement>)}
      />
      {error && <div>{error}</div>}
    </>
  );
});
