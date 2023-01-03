import { useState } from "react";
import { BiHide } from "react-icons/bi";
import { FiEye } from "react-icons/fi";
export function Input({
  label,
  placeholder,
  hFor,
  required,
  type,
  handleValue,
}) {
  const className =
    type === "file"
      ? " block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
      : "text-white block w-full py-3 px-2 rounded-lg  border-[#121212] border-2 focus:border-[#ff008c] focus:outline-none bg-white/5";
  return (
    <div className="my-5 space-y-1">
      {type === "file" ? (
        <label className="block">
          <span className="sr-only">{label}</span>
        </label>
      ) : (
        <label
          htmlFor={hFor}
          className="my-2 after:content-['*'] after:ml-0.5 after:text-red-500"
        >
          {label}
        </label>
      )}

      <input
        required={required}
        type={type}
        className={className}
        onChange={handleValue}
        placeholder={placeholder}
      />
    </div>
  );
}

export function PasswordInput({ hFor, label, placeholder, handleValue }) {
  const [passType, setPassType] = useState("password");
  const [confirmPassType, setConfirmPassType] = useState("password");
  return (
    <div className="my-5 space-y-1">
      <label
        htmlFor={hFor}
        className="my-2 after:content-['*'] after:ml-0.5 after:text-red-500"
      >
        {label}
      </label>
      <div className="relative">
        <input
          type={label === "Password" ? passType : confirmPassType}
          className="text-white block w-full py-3 px-2 rounded-lg  border-[#121212] border-2 focus:border-[#ff008c] focus:outline-none bg-white/5"
          placeholder={placeholder}
          onChange={handleValue}
        />
        <div
          className="absolute -translate-x-[50%] -translate-y-[50%] left-[92%] top-[50%] 
                  bg-[#39393952] p-2 rounded-full hover:bg-[#393939b4] cursor-pointer focus:bg-[#393939b4]"
        >
          {label === "Password" ? (
            <span>
              {passType === "password" ? (
                <span onClick={() => setPassType("text")}>
                  <FiEye />
                </span>
              ) : (
                <span onClick={() => setPassType("password")}>
                  <BiHide />
                </span>
              )}
            </span>
          ) : (
            <span>
              {confirmPassType === "password" ? (
                <span onClick={() => setConfirmPassType("text")}>
                  <FiEye />
                </span>
              ) : (
                <span onClick={() => setConfirmPassType("password")}>
                  <BiHide />
                </span>
              )}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
