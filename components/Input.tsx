"use client";
import { FaSearch as SearchIcon } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { useState, useEffect } from "react";

interface InputProps {
  setLocation: React.Dispatch<React.SetStateAction<string>>;
}

const Input = ({ setLocation }: InputProps) => {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      setLocation(inputValue);
    }, 500);

    return () => clearTimeout(debounceTimer);
  }, [inputValue, setLocation]);

  return (
    <div className="relative w-full md:w-96">
      <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-gray-400">
        <FiSearch className="w-5 h-5" />
      </div>
      <input
        type="text"
        className="w-full pl-12 pr-4 py-3 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent bg-white/90 shadow-sm text-gray-800 placeholder-gray-400"
        placeholder="Search city..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </div>
  );
};

export default Input;
