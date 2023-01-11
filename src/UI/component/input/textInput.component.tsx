import { FC } from "react";

export interface ITextInput {
  onChange: (data: string) => void;
  placeholder: string;
  type:'number'|'text'
}
export const TextInput: FC<ITextInput> = ({ onChange, placeholder,type }) => {
  const onInputChange = (e: any) => {
    onChange(e.target.value);
  };

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 opacity-30"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
      <input
        className="bg-gray-100 outline-none"
        type={type}
        placeholder={placeholder}
        onChange={onInputChange}
      />
    </>
  );
};
