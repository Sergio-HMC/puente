import { ButtonHTMLAttributes } from "react";

export default function Button(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  const { className = "", ...rest } = props;
  return (
    <button
      className={`px-4 py-2 rounded-2xl shadow-sm border border-slate-200 hover:shadow transition ${className}`}
      {...rest}
    />
  );
}
